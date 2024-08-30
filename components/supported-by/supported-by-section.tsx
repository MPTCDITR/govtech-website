const images = [
    { src: '/photo_2024-07-04_11-35-40-removebg-preview 1.png', alt: '' },
    { src: '/dgc 1.png', alt: '' },
    { src: '/photo_2024-07-04_11-35-40-removebg-preview 1.png', alt: '' },
    { src: '/dgc 1.png', alt: '' },
    { src: '/photo_2024-07-04_11-35-40-removebg-preview 1.png', alt: '' },
    { src: '/dgc 1.png', alt: '' },
];

export const SupportedBySection = () => {
    return (
        <div className='container mx-auto px-2'>
            <div className='grid list-none grid-cols-2 place-items-center gap-8 p-8 md:grid-cols-3 lg:grid-cols-6'>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className='h-full max-h-36 rounded-full bg-white p-3'
                    />
                ))}
            </div>
        </div>
    );
};
