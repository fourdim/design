import type { CSSProperties, FocusEventHandler, HTMLAttributes, KeyboardEventHandler, ReactNode } from 'react';
export type InputProps = {
    disabled?: boolean;
    width?: CSSProperties['width'];
    onChange?: (value: string) => void;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
    noBorder?: boolean;
    status?: 'error' | 'success' | 'warning' | 'default';
    size?: 'default' | 'large' | 'extraLarge';
    preFix?: ReactNode;
    endFix?: ReactNode;
    type?: HTMLInputElement['type'];
    inputStyle?: CSSProperties;
    onEnter?: () => void;
} & Omit<HTMLAttributes<HTMLInputElement>, 'onChange' | 'onCompositionStart' | 'onCompositionEnd'>;
export declare const Input: import("react").ForwardRefExoticComponent<{
    disabled?: boolean | undefined;
    width?: CSSProperties['width'];
    onChange?: ((value: string) => void) | undefined;
    onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
    noBorder?: boolean | undefined;
    status?: "default" | "error" | "warning" | "success" | undefined;
    size?: "default" | "large" | "extraLarge" | undefined;
    preFix?: ReactNode;
    endFix?: ReactNode;
    type?: string | undefined;
    inputStyle?: CSSProperties | undefined;
    onEnter?: (() => void) | undefined;
} & Omit<HTMLAttributes<HTMLInputElement>, "onCompositionEnd" | "onCompositionStart" | "onChange"> & import("react").RefAttributes<HTMLInputElement>>;
