import Text from '../ui/text';
import { Contact } from './Contact';
import { QuickLink } from './QuickLink';

export default function Footer() {
    return (
        <footer className=' bg-primary px-8 pt-5 pb-5 text-white'>
            <div className='flex grid list-none grid-cols-1 flex-col gap-8 p-4 md:grid-cols-3 lg:grid-cols-3'>
                <div className='flex flex-col gap-4'>
                    <Text variant='smallheading'>GovTech</Text>
                    <p>
                        It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the.remaining essentially unchanged.{' '}
                    </p>
                </div>
                <div className='flex md:justify-center'>
                    <QuickLink />
                </div>
                <div>
                    <Contact />
                </div>
            </div>
            {/* <hr/> */}
            <div className='border ' />
            <Text variant='body' className='mt-5 text-center text-slate-300'>
                2024 GovTech - Cambodia Academy Of Digital Technology - All Rights Reserved.
            </Text>
        </footer>
    );
}
