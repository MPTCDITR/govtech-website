const images = [{ src: '/support.png', alt: '' }];

export const SupportedBySection = () => {
    return (
        <div className='container mx-auto px-2'>
            <div className='my-6 grid list-none place-items-center gap-8 px-2'>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className='h-full max-h-screen bg-white p-3'
                    />
                ))}
            </div>
        </div>
    );
};
