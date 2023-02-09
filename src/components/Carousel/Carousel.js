import React from 'react';
import Image from 'next/image';
export const Carousel = ({images}) => {
  const [image, setImage] = React.useState(0);
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
          hidden={image <= 0}
        />
      </div>
      <div className={"demoImage"}>
        <Image
          src={images[image]}
          height={350}
          width={350}
          alt={"Project image"}
        />
      </div>
      <div className={"carouselSpacer"}>
        <input 
          type={"button"} 
          value={"▶"} 
          className={"button carouselButton"} 
          onClick={handleClick.bind(this,1)} 
          hidden={image >= images.length -1}
        />
      </div>
    </div>
  )
}