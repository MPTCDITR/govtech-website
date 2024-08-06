const images = [
    { src: '/photo_2024-07-04_11-35-40-removebg-preview 1.png', alt: '' },
    { src: '/dgc 1.png', alt: '' },
    { src: '/photo_2024-07-04_11-35-40-removebg-preview 1.png', alt: '' },
    { src: '/dgc 1.png', alt: '' },
    { src: '/photo_2024-07-04_11-35-40-removebg-preview 1.png', alt: '' },
    { src: '/dgc 1.png', alt: '' },
];

const ImageGrid = () => {
    return (
        <div className='my-24 mt-12 flex flex-col gap-x-12 px-1 lg:flex-row'>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className='mt-5 w-full max-w-40'
                />
            ))}
        </div>
    );
};

export default ImageGrid;
