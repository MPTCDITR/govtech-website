import ImageGrid from '@/components/supported-by/imagegrid';
import Text from '../ui/text';

export const SupportedBySection = () => {
    return (
        <div className='mt-12 flex flex-col bg-gray-300 px-4'>
            <div className='mt-5'>
                <Text variant='subheading' className='mt-5 text-center text-primary'>
                    SUPPORTED BY
                </Text>
            </div>
            <div className='flex justify-center'>
                <ImageGrid />
            </div>
        </div>
    );
};
