import { useTranslations } from 'next-intl';
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
    const t = useTranslations('Footer');
    return (
        <div className='flex flex-col gap-4 '>
            <Text variant='smallheading'>{t('quickLink')}</Text>
            <ul className='flex flex-col gap-2'>
                <QuickLinkItem title={t('home')} path='/' />
                <QuickLinkItem title={t('agenda')} path='/agenda' />
                <QuickLinkItem title={t('floorPlan')} path='/floor-plan' />
                <QuickLinkItem title={t('speakers')} path='/speakers' />
            </ul>
        </div>
    );
};
