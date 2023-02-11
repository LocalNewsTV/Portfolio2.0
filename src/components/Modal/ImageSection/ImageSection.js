import Image from "next/image"
import React from "react";
import { Carousel } from "@/components/Carousel/Carousel";
export const ImageSection = ({modal}) => {
  const [image, setImage] = React.useState(0);
  React.useEffect(()=>{
    setImage(0);
  },[modal])
  return (
    <div className="imageSection">
      <Carousel images={modal.sourceImage} image={image} setImage={setImage} />
      <h2>{modal.title || ""}</h2>
      <p>{modal.tools || ""}</p>
    </div>
  )
}