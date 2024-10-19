import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
    const [images, setImages] = useState([]);

    // Dynamically load images from the public directory
    useEffect(() => {
        // Define the image file names (can be fetched from API or config as well)
        const imageNames = [
            't0.jpg',
            't1.jpg',
            't2.jpg',
            't3.jpg',
            't4.jpg',
            't5.jpg',
            't6.jpg',
            't7.jpg',
            't8.jpg',
            't9.jpg',
            't10.jpg',
            't11.jpg',
            't12.jpg',
            't13.jpg',
            't14.jpg',
            't15.jpg',
            't16.jpg'
        ];

        // Map these to the corresponding public folder path
        const loadedImages = imageNames.map(name => `${process.env.PUBLIC_URL}/images/${name}`);
        setImages(loadedImages);
    }, []);

    return (
      <div className="max-w-4xl mx-auto my-8 p-4 bg-gray-100 shadow-lg rounded-lg">
        <h2 className="text-3xl text-center font-semibold text-blue-600 mb-6">Image Carousel</h2>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          autoPlay={true}
          interval={3000}
          stopOnHover={true}
          dynamicHeight={true}
        >
          {images.map((image, index) => (
            <div key={index} className="h-64 md:h-96 overflow-hidden">
              <img src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
};

export default ImageCarousel;
