import { Button } from '../ui/button';
import Text from '../ui/text';

export default function AboutGovtech() {
    return (
        <div className='mt-8 flex flex-col justify-center gap-x-32 px-1 lg:flex-row'>
            <div className='mt-5 grid w-[385px]'>
                    <Text variant='subheading' className='text-center text-primary'>
                        About Govtech
                    </Text>
                    <Text variant='body'>
                        It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem
                        Ipsum.
                    </Text>
                    <Text variant='body'>March 14, 2024</Text>
                    <Text variant='body'>
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout
                    </Text>
                <div className='grid justify-items-center'>
                    <div className='mt-5 flex w-[150px] justify-center'>
                        <Button className='bg-primary text-white hover:bg-sky-500'>
                            <b>View Agenda</b>
                        </Button>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <img className='w-full max-w-xl' src='HRTechx 1.png' alt='' />
            </div>
        </div>
    );
}
