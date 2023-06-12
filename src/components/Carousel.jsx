import React, { useState, useEffect } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    url: 'https://www.youtube.com/embed/vWWA98lpSZ4',
  },
  {
    url: 'https://www.youtube.com/embed/Z5NoQg8LdDk',
  },
  {
    url: 'https://www.youtube.com/embed/l5t9IXtTr6g',
  },
  {
    url: 'https://www.youtube.com/embed/9c3XMEzYwo8',
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  useEffect(() => {
    const handleResize = () => {
      setSlide(0);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'
      />
      {sliderData.map((item, index) => (
        <div
          className={index === slide ? 'opacity-100' : 'opacity-0'}
          key={index}
        >
          {index === slide && (
            <iframe
              className='w-screen h-screen'
              src={item.url}
              title='Video'
              allow='autoplay; encrypted-media'
              allowFullScreen
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
