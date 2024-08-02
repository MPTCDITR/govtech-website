import { NAV_DATA } from '../data';
import { NavItem } from './nav-item';

export function MobileNavBar() {
    const navigationItems = NAV_DATA;

    return (
        <ul className='h-[calc(100vh-4rem)] overflow-auto px-0'>
            {navigationItems.map((item) => (
                <NavItem key={item.href} href={item.href}>
                    {item.label}
                </NavItem>
            ))}
        </ul>
    );
}
