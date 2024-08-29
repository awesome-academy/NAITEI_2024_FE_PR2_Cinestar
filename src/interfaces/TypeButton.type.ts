import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface TypeButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    icon?: string;
    children?: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}
