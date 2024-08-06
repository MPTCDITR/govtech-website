import TextElement from '../TextElement';
import { Button } from '../ui/button';
import Text from '../ui/text';

export default function AboutGovtech() {
    return (
        <div className='container flex flex-col items-center gap-8 p-4 lg:flex-row lg:items-start lg:justify-around'>
            <div className='grid w-full gap-6'>
                <TextElement variant='subheading' className='text-primary'>
                    About Govtech
                </TextElement>
                <TextElement variant='body'>
                    The GovTech Conference is a gathering where Cambodian ministries,
                    businesses, and development partners come together to collaboratively shape
                    the future of digital government technology. This event provides a platform
                    to explore how cutting-edge technology is revolutionizing public services,
                    fostering trust within the community, and strengthening citizen engagement.
                </TextElement>
                <TextElement variant='body'>
                    The Conference take place on September 17, 2024
                </TextElement>
                <TextElement variant='body'>
                    Attendees can expect discussions, demonstrations, and partnerships focused
                    on creating a more transparent, efficient, and citizen-centric government.
                    The conference highlights the collaborative efforts between the public and
                    private sectors to advance the nation’s digital infrastructure and improve
                    the quality of life for all Cambodians.
                </TextElement>
                <Button className='w-48 bg-primary text-white'>View Agenda</Button>
            </div>
            <div className='w-full lg:max-w-2xl'>
                <img className='w-full' src='HRTechx 1.png' alt='' />
            </div>
        </div>
    );
}
