const images = [
  { src: "/photo_2024-07-04_11-35-40-removebg-preview 1.png", alt: "" },
  { src: "/dgc 1.png", alt: "" },
  { src: "/photo_2024-07-04_11-35-40-removebg-preview 1.png", alt: "" },
  { src: "/dgc 1.png", alt: "" },
  { src: "/photo_2024-07-04_11-35-40-removebg-preview 1.png", alt: "" },
  { src: "/dgc 1.png", alt: "" },
];

const ImageGrid = () => {
  return (
    <div className="mx-4 my-20 grid grid-cols-2 justify-items-center md:grid-cols-6">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} className="h-full max-h-36" />
      ))}
    </div>
  );
};

export default ImageGrid;
