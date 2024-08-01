import { ContactUsList } from '../contact-us-list';
import Text from '../ui/text';

export const Contact = () => {
    return (
        <div className='flex flex-col gap-4'>
            <Text variant='smallheading'>Contact Us</Text>
            <ul className='flex flex-col gap-2'>
                <ContactUsList />
            </ul>
        </div>
    );
};
