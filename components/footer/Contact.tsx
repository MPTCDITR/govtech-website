import { useTranslations } from 'next-intl';
import { ContactUsList } from '../contact-us-list';
import Text from '../ui/text';

export const Contact = () => {
    const t = useTranslations('Footer');
    return (
        <div className='flex flex-col gap-4'>
            <Text variant='smallheading'>{t('contact')}</Text>
            <ul className='flex flex-col gap-2'>
                <ContactUsList />
            </ul>
        </div>
    );
};
