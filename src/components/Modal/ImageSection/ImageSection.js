import Image from "next/image"
import React from "react";
import { Carousel } from "@/components/Carousel/Carousel";
export const ImageSection = ({src, title, tools}) => {
  const [currImage, setCurrImage] = React.useState(0);
  return (
    <div className="imageSection">
      <Carousel images={src} />
      <h2>{title || ""}</h2>
      <p>{tools || ""}</p>
    </div>
  )
}