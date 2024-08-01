import { NavItem } from './nav-item';

export function MobileNavBar() {
    return (
        <ul className='h-[calc(100vh-4rem)] overflow-auto px-0'>
            <NavItem href='/home'>{'Home'}</NavItem>
            <NavItem href='/agenda'>{'Agenda'}</NavItem>
            <NavItem href='/speaker'>{'Speakers'}</NavItem>
            <NavItem href='/check-in'>{'Check in'}</NavItem>
        </ul>
    );
}
