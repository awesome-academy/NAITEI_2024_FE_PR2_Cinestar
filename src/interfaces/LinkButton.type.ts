import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface LinkButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    icon?: string;
    children?: ReactNode;
    href: string;
}
