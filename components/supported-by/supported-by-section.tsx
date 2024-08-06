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
        <div className='grid·list-none·grid-cols-2·place-items-center·gap-16·p-8·md:grid-cols-4·lg:grid-cols-6'>
            {images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} className='h-full max-h-36' />
            ))}
        </div>
    );
};
