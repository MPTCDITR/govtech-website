import { Menu } from 'lucide-react';
import Link from 'next/link';
import LocaleSwitcher from '../lang/locale-switcher';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { MobileNavBar } from './mobile-navbar/mobile-navbar';

export async function NavBar() {
    const NavigationMenus = () => (
        <nav className='hidden flex-row items-center space-x-20 lg:flex'>
            <Link href='/'>
                <p className='text-gray-900 hover:text-primary'>Home</p>
            </Link>
            <Link href='/agenda'>
                <p className='text-gray-900 hover:text-primary'>Agenda</p>
            </Link>
            <Link href='/floor-plan'>
                <p className='text-gray-900 hover:text-primary'>Floor Plan</p>
            </Link>
            <Link href='/speakers'>
                <p className='text-gray-900 hover:text-primary'>Speakers</p>
            </Link>
        </nav>
    );

    return (
        <header className='sticky top-0 z-40 border-b bg-background py-4'>
            <div className='container mx-auto px-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Link href='/'>
                            <b className='text-primary'>GovTech</b>
                        </Link>
                    </div>
                    <div className=' items-center justify-center'>
                        <NavigationMenus />
                    </div>
                    <div className='flex items-center'>
                        <LocaleSwitcher />
                        <Sheet>
                            <SheetTrigger>
                                <Menu
                                    className='ml-4 h-8 w-8 text-blue-950 lg:hidden'
                                    aria-label='Open mobile menu'
                                />
                            </SheetTrigger>
                            <SheetContent side='right' className='w-[300px] md:w-[400px]'>
                                <nav className='mt-3 flex flex-col gap-4'>
                                    <MobileNavBar />
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
