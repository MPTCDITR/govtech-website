import Link from 'next/link';

import { cn } from '@/lib/utils';

interface NavItemProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export function NavItem({ href, children, className }: NavItemProps) {
    return (
        <li
            className={cn(
                'rounded-md bg-background px-4 py-4 font-medium text-sm hover:bg-primary hover:text-white md:text-base',
                className,
            )}
        >
            <Link prefetch={true} href={href}>
                {children}
            </Link>
        </li>
    );
}
