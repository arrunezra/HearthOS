import React, { createContext, useContext, useState, ReactNode } from 'react';
import GlobalAlert, { CustomAlertConfig } from '../components/GlobalAlert';

interface AlertContextType {
    showAlert: (options: CustomAlertConfig) => void;
    hideAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [config, setConfig] = useState<CustomAlertConfig>({
        type: 'info',
        title: '',
        message: '',
        confirmText: 'OK',
        cancelText: 'Cancel',
        onConfirm: () => { },
    });

    const showAlert = (options: CustomAlertConfig) => {
        // 🚀 THE CRITICAL FIX: Wrap callbacks so they automatically dismiss the modal frame
        setConfig({
            ...options,
            onConfirm: () => {
                setIsOpen(false);
                if (options.onConfirm) options.onConfirm();
            },
            onCancel: () => {
                setIsOpen(false);
                if (options.onCancel) options.onCancel();
            }
        });
        setIsOpen(true);
    };

    const hideAlert = () => setIsOpen(false);

    return (
        <AlertContext.Provider value={{ showAlert, hideAlert }}>
            {children}
            <GlobalAlert
                isOpen={isOpen}
                onClose={hideAlert}
                config={config}
            />
        </AlertContext.Provider>
    );
};

export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) throw new Error('useAlert must be used within AlertProvider');
    return context;
};