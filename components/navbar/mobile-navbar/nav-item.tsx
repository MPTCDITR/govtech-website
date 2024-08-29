import Link from 'next/link';

import { SheetClose } from '@/components/ui/sheet';
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
                'rounded-md bg-background px-4 py-4 font-medium text-sm hover:bg-accent md:text-base',
                className,
            )}
        >
            <SheetClose asChild>
                <Link href={href}>{children}</Link>
            </SheetClose>
        </li>
    );
}
