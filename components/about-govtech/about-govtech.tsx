import Link from 'next/link';
import TextElement from '../TextElement';

export default function AboutGovtech() {
    return (
        <div className='container flex flex-col items-center gap-8 p-4 lg:flex-row lg:items-start lg:justify-around'>
            <div className='grid w-full gap-6'>
                <TextElement variant='subheading' className='text-primary xl:mt-10'>
                    About Govtech
                </TextElement>
                <TextElement variant='body'>
                    The GovTech Conference is a gathering where Cambodian ministries,
                    businesses, and development partners come together to collaboratively shape
                    the future of digital government technology. This event provides a platform
                    to explore how cutting-edge technology is revolutionizing public services,
                    fostering trust within the community, and strengthening citizen engagement.
                </TextElement>
                <Link href='/agenda'>
                    <TextElement variant='body' className='text-primary underline'>
                        The Conference takes place on September 17, 2024.{''}
                    </TextElement>
                </Link>
                <TextElement variant='body'>
                    Attendees can expect discussions, demonstrations, and partnerships focused
                    on creating a more transparent, efficient, and citizen-centric government.
                    The conference highlights the collaborative efforts between the public and
                    private sectors to advance the nation’s digital infrastructure and improve
                    the quality of life for all Cambodians.
                </TextElement>
            </div>
            <div className='w-full lg:mt-20 lg:max-w-2xl xl:mt-auto'>
                <img className='w-full' src='HRTechx 1.png' alt='' />
            </div>
        </div>
    );
}
