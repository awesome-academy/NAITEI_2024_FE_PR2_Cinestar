import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    icon?: string;
    children?: ReactNode;
    href: string;
}
