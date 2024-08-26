import TextElement from '../TextElement';

export const HeroSectionHeader = () => {
    return (
        <div className="flex h-96 flex-col items-center justify-center bg-[length:1750px_600px] bg-[url('/darkblue.png')] bg-center">
            <TextElement
                variant='heading'
                id='what-we-do-heading'
                className='mb-4 text-center text-white'
            >
                GovTech Conference2024
            </TextElement>
            <TextElement
                variant='body'
                id='what-we-do-heading'
                className='mb-4 text-center text-white'
            >
                Empowering Digital Transformation in the Public Sector
            </TextElement>
        </div>
    );
};
export default HeroSectionHeader;
