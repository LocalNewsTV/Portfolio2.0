import React from 'react';
import Image from 'next/image';
export const Carousel = ({images, setImage, image}) => {
  const handleClick = (change) => {
    setImage(image + change);
  }
  return (
    <div className={"carousel"}>
      <div className={"carouselSpacer"}>
        <input 
          type={"button"} 
          value={"◀"}
          className={"button carouselButton"} 
          onClick={handleClick.bind(this,-1)}
          disabled={image <= 0}
        />
      </div>
      <div className={"demoImage"}>
        {image < images.length
        ? <Image
            src={images[image]}
            height={350}
            width={350}
            alt={"Project image"}
          />
        : setImage(0)}
      </div>
      <div className={"carouselSpacer"}>
        <input 
          type={"button"} 
          value={"▶"} 
          className={"button carouselButton"} 
          onClick={handleClick.bind(this,1)} 
          disabled={image >= images.length -1}
        />
      </div>
    </div>
  )
}