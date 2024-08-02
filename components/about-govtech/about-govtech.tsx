import { Button } from '../ui/button';
import Text from '../ui/text';

export default function AboutGovtech() {
    return (
        <div className='mx-auto flex flex-col p-4 lg:flex-row lg:justify-around'>
            <div className='w-[360px]'>
                <Text variant='subheading' className='text-primary'>
                    About Govtech
                </Text>
                <Text variant='body' className='mt-8'>
                    It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Text variant='body' className='mt-14'>
                    March 14, 2024
                </Text>
                <Text variant='body' className='mt-8'>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout
                </Text>
                <Button className='bg-primary text-white'>View Agenda</Button>
            </div>
            <div className='mt-8 md:mt-0'>
                <img className='w-full max-w-2xl' src='HRTechx 1.png' alt='' />
            </div>
        </div>
    );
}
