import { useState, useEffect } from 'react';

const images = [
  '/images/carousel/carousel1.jpg',
  '/images/carousel/carousel2.jpg',
  '/images/carousel/carousel7.jpg',
  '/images/carousel/masala2.jpg',
  '/images/carousel/oil2.jpg',
  '/images/carousel/seeds.jpg',
  '/images/carousel/tea3.jpg',
  '/images/carousel/cereal2.jpg',
];
console.log("slider page")
const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((current + 1) % length);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [current, length]);

  if (!Array.isArray(images) || length === 0) return null;

  return (
    <div className="relative w-full max-w-6xl h-80 mx-auto overflow-hidden rounded-md">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-80 object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default Slider;
