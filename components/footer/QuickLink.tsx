import Link from 'next/link';
import Text from '../ui/text';

interface QuickLinkProps {
    title: string;
    path: string;
}

const QuickLinkItem: React.FC<QuickLinkProps> = ({ title, path }) => (
    <li>
        <Link href={path} className='hover:text-blue-600'>
            {title}
        </Link>
    </li>
);

export const QuickLink = () => {
    return (
        <div className='flex flex-col gap-4 '>
            <Text variant='smallheading'>Quick Link</Text>
            <ul className='flex flex-col gap-2'>
                <QuickLinkItem title='Home' path='/' />
                <QuickLinkItem title='Agenda' path='/agenda' />
                <QuickLinkItem title='Floor Plan' path='/floor-plan' />
                <QuickLinkItem title='Speaker' path='/speakers' />
            </ul>
        </div>
    );
};
