import Link from 'next/link';
import { Button } from '../ui/button';
import Text from '../ui/text';

export const HeroSectionHeader = () => {
    return (
        <div className="flex h-96 flex-col items-center justify-center bg-[length:1750px_600px] bg-[url('/darkblue.png')] bg-center">
            <Text variant='heading' className='p-6 font-[1100] text-[24px] text-white'>
                GovTech Conference2024
            </Text>
            <Text variant='subheading' className='p-6 font-[1200] text-white'>
                Empowering Digital Transformation in the Public Sector
            </Text>
            <Button className='bg-white hover:bg-slate-200'>
                <Link href='/register'>Register Now</Link>
            </Button>
        </div>
    );
};
export default HeroSectionHeader;
