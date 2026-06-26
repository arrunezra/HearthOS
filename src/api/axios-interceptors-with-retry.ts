// axios-interceptors-with-retry.ts
import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig
} from 'axios';
import { API_BASE_URL_DEV, NODE_ENV } from '../utils/environment';
import { Alert } from 'react-native';

// Custom interface for retry config
interface RetryableRequestConfig extends InternalAxiosRequestConfig {
    retry?: number;
}

// Response data structure (customize based on your API)
interface ApiResponse<T = any> {
    success?: boolean;
    data?: T;
    status?: string;
    message?: string;
    [key: string]: any; // Allow root level properties from standard PHP outputs
}

// Error response structure
interface ErrorResponse {
    statusCode: number;
    message: string;
    error?: string;
}

class AxiosInterceptorManager {
    private apiClient: AxiosInstance;
    private readonly MAX_RETRIES: number = 3;
    private readonly RETRY_STATUS_CODES: number[] = [408, 429, 500, 502, 503, 504];

    constructor() {
        this.apiClient = axios.create({
            baseURL: API_BASE_URL_DEV,
            timeout: 15000,
            headers: {
                'Content-Type': 'application/json',
            }
        });

        this.setupInterceptors();
        this.setupRetryLogic();
    }

    private setupInterceptors(): void {
        // Request interceptor
        this.apiClient.interceptors.request.use(
            this.handleRequest.bind(this),
            this.handleRequestError.bind(this)
        );

        // Response interceptor
        this.apiClient.interceptors.response.use(
            this.handleResponse.bind(this),
            this.handleResponseError.bind(this)
        );
    }

    private setupRetryLogic(): void {
        // Add retry logic for failed requests
        this.apiClient.interceptors.response.use(
            (response: AxiosResponse) => response,
            async (error: AxiosError) => {
                const config = error.config as RetryableRequestConfig;

                // If config doesn't exist or retry is not set, initialize it
                if (!config) {
                    return Promise.reject(error);
                }

                if (!config.retry) {
                    config.retry = 0;
                }

                // Check if we should retry
                if (config.retry < this.MAX_RETRIES && this.shouldRetry(error)) {
                    config.retry += 1;

                    // Exponential backoff with jitter
                    const delay = this.calculateBackoffDelay(config.retry);
                    await new Promise<void>(resolve => setTimeout(resolve, delay));

                    // Retry the request
                    return this.apiClient(config);
                }

                return Promise.reject(error);
            }
        );
    }

    private shouldRetry(error: AxiosError): boolean {
        // Retry on network errors (no response)
        if (!error.response) {
            return true;
        }

        // Retry on specific status codes
        const status = error.response.status;
        return this.RETRY_STATUS_CODES.includes(status);
    }

    private calculateBackoffDelay(retryCount: number): number {
        // Exponential backoff with jitter
        const baseDelay = Math.pow(2, retryCount) * 1000;
        const jitter = Math.random() * 500;
        return Math.min(baseDelay + jitter, 30000); // Cap at 30 seconds
    }

    private handleRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
        // Add request ID for tracking (optional)
        const requestId = this.generateRequestId();
        config.headers['X-Request-ID'] = requestId;

        // Log request for debugging
        if (NODE_ENV as string === 'development') {
            console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`, {
                headers: config.headers,
                params: config.params,
                data: config.data,
                requestId
            });
        }

        return config;
    }

    private handleRequestError(error: AxiosError): Promise<never> {
        console.error('[API Request Error]', {
            message: error.message,
            config: error.config
        });
        return Promise.reject(error);
    }

    private handleResponse(response: AxiosResponse): any {
        // Log response for debugging
        if (NODE_ENV as string === 'development') {
            console.log(`[API Response] ${response.config.url}`, {
                status: response.status,
                data: response.data,
                headers: response.headers
            });
        }

        // Handle specific response formats
        const responseData = response.data as ApiResponse;

        // Check for API error in response
        if (responseData && typeof responseData === 'object' && 'status' in responseData) {
            if (responseData.status === 'error') {
                return Promise.reject(new Error(responseData.message || 'API returned an error'));
            }
            // Return the data directly if it's wrapped
            if ('data' in responseData) {
                return responseData.data;
            }
        }

        return response;
    }

    private handleResponseError(error: AxiosError): Promise<never> {
        // Handle specific error scenarios
        if (error.response) {
            const status = error.response.status;
            const errorData = error.response.data as ErrorResponse;

            // Log detailed error information
            console.error('[API Response Error]', {
                status,
                message: errorData?.message || error.message,
                data: errorData,
                config: error.config
            });

            // Handle specific status codes
            switch (status) {
                case 400:
                    this.handleBadRequest(errorData);
                    break;
                case 401:
                    this.handleUnauthorized();
                    break;
                case 403:
                    this.handleForbidden();
                    break;
                case 404:
                    this.handleNotFound();
                    break;
                case 429:
                    this.handleRateLimit();
                    break;
                case 500:
                case 502:
                case 503:
                    this.handleServerError();
                    break;
                default:
                    this.handleGenericError(error);
            }
        } else if (error.request) {
            this.handleNetworkError();
        } else {
            console.error('[API Error]', {
                message: error.message,
                code: error.code
            });
        }

        return Promise.reject(error);
    }

    // Error handlers with specific types
    private handleBadRequest(errorData?: ErrorResponse): void {
        console.warn('Bad Request:', errorData?.message || 'Invalid request parameters');
        // Could dispatch to a toast notification system
    }

    private handleUnauthorized(): void {
        console.warn('Unauthorized - please login');
        // Show unauthorized message
        this.showErrorNotification('Please login to continue');
    }

    private handleForbidden(): void {
        console.warn('Forbidden - insufficient permissions');
        // Show permission error message
        this.showErrorNotification('You do not have permission to perform this action');
    }

    private handleNotFound(): void {
        console.warn('Resource not found');
        this.showErrorNotification('The requested resource was not found');
    }

    private handleRateLimit(): void {
        console.warn('Rate limit exceeded');
        this.showErrorNotification('Too many requests. Please try again later.');
    }

    private handleServerError(): void {
        console.error('Server error occurred');
        this.showErrorNotification('Server error. Please try again later.');
    }

    private handleNetworkError(): void {
        console.error('Network error - check your internet connection');
        this.showErrorNotification('Network error. Please check your internet connection.');
    }

    private handleGenericError(error: AxiosError): void {
        console.error('An error occurred:', {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data
        });
        this.showErrorNotification('An unexpected error occurred');
    }

    // Utility methods
    private generateRequestId(): string {
        return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    private showErrorNotification(message: string): void {
        // Implement your notification system here
        // Example: toast.error(message);
        // or dispatch to a notification service
        Alert.alert(message)
    }

    // Public method to get client instance
    public getClient(): AxiosInstance {
        return this.apiClient;
    }

    // Public method to clear all interceptors (useful for testing)
    public clearInterceptors(): void {
        // Clear all interceptors
        this.apiClient.interceptors.request.clear();
        this.apiClient.interceptors.response.clear();
    }
}

// Export singleton instance
export default new AxiosInterceptorManager().getClient();

// Export the class for testing or extension
export { AxiosInterceptorManager };