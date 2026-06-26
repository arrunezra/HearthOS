import React from 'react';

import { AlertCircle, CheckCircle2, AlertTriangle, UploadCloud, TrashIcon } from 'lucide-react-native';
import { Icon } from '@/components/ui/icon';
import {
    AlertDialog,
    AlertDialogBackdrop,
    AlertDialogContent,
    AlertDialogBody,
    AlertDialogFooter,
    Box,
    VStack,
    Heading,
    Text,
    Button,
    ButtonText,
    AlertDialogHeader
} from './HOSGluestackUI';

type AlertType = 'success' | 'error' | 'warning' | 'info';
type ButtonAction = "primary" | "negative" | "secondary" | "positive" | "default";

export interface CustomAlertConfig {
    type: AlertType;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}

export interface GlobalAlertProps {
    isOpen: boolean;
    onClose: () => void;
    config: CustomAlertConfig;
}

export default function GlobalAlert({
    isOpen,
    onClose,
    config
}: GlobalAlertProps) {

    // ✅ FIX 1: Type the record keys explicitly as AlertType instead of 'string'
    // ✅ FIX 2: Double check that 'action' strings perfectly match the ButtonAction union
    const alertConfig: Record<AlertType, {
        icon: any;
        color: string;
        bgColor: string;
        action: ButtonAction;
    }> = {
        success: {
            icon: CheckCircle2,
            color: 'stroke-success-600',
            bgColor: 'bg-success-50',
            action: 'positive',
        },
        error: {
            icon: TrashIcon,
            color: 'stroke-error-600',
            bgColor: 'bg-error-50',
            action: 'negative',
        },
        warning: {
            icon: AlertTriangle,
            color: 'stroke-success-600',
            bgColor: 'bg-warning-50',
            action: 'negative', // Changed to 'default' if 'primary' causes downstream component errors
        },
        info: {
            icon: UploadCloud,
            color: 'stroke-info-600',
            bgColor: 'bg-info-50',
            action: 'primary', // Valid according to your ButtonAction type definition above
        }
    };

    // Fallback to 'info' if type is undefined
    const current = alertConfig[config.type as keyof typeof alertConfig] || alertConfig.info;


    return (
        <AlertDialog isOpen={isOpen} onClose={onClose} >
            <AlertDialogBackdrop />
            <AlertDialogContent className="w-[85%] max-w-[340px] p-6 rounded-3xl gap-4 items-center bg-white shadow-xl">
                {/* 1. Dynamic Icon Container */}
                <Box className={`rounded-full h-[60px] w-[60px] items-center justify-center ${current.bgColor}`}>
                    <Icon
                        as={current.icon}
                        size="xl"
                        className={current.color}
                    />
                </Box>

                {/* 2. Text Content */}
                <AlertDialogHeader className="mb-1">
                    <Heading size="md" className="text-center ">{config.title}</Heading>
                </AlertDialogHeader>

                <AlertDialogBody>
                    <Text size="sm" className="text-center">
                        {config.message}
                    </Text>
                </AlertDialogBody>

                {/* 3. Footer Buttons */}
                <AlertDialogFooter className="mt-5 w-full flex-row gap-3">
                    {/* Cancel Button - Outline/Secondary */}
                    <Button
                        variant="outline"
                        action="secondary"
                        onPress={onClose}
                        className="flex-1 rounded-xl border-outline-300"
                    >
                        <ButtonText>Cancel</ButtonText>
                    </Button>

                    {/* Confirm Button - Solid/Negative or Primary */}
                    <Button
                        action={current.action}
                        onPress={config.onConfirm || onClose}
                        className="flex-1 rounded-xl"
                    >
                        <ButtonText>
                            {config.onConfirm ? config.confirmText : "OK"}
                        </ButtonText>
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}