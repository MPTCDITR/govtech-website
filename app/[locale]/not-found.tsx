import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <div
            className='flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white text-center'
            style={{ minHeight: '100vh' }}
        >
            <div className='rounded-lg p-4'>
                <h1 className='font-bold text-9xl text-red-600'>404</h1>
                <p className='mt-5 font-light text-2xl text-gray-800 md:text-3xl'>
                    Oops! Page not found.
                </p>
                <p className='mt-2 text-gray-600'>
                    The page you are looking for might have been removed or is temporarily
                    unavailable.
                </p>
                <Button asChild>
                    <Link
                        href='/'
                        className='mt-10 inline-block rounded px-6 py-3 text-sm text-white transition-colors duration-300 md:text-base'
                    >
                        Go back to Home Page
                    </Link>
                </Button>
            </div>
        </div>
    );
}
