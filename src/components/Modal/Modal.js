import React from "react";
import Image from "next/image";
import { ModalButton } from "./ModalButton/ModalButton";
import { ImageSection } from "./ImageSection/ImageSection"
import { WriteUpSection } from './WriteUpSection/WriteUpSection'
const props = {
  id: "Hello",
  title: "Sample Title Text",
  sourceImage: ["/images/projectImg/128Final.webp", "/images/projectImg/BlackJack.webp"],
  description: "",
  writeUp: {
    url: "https://localnewstv.github.io/<Repo>",
    github: "https://github.com/LocalNewsTV/<Repo>",
    legacy: "",
    tools: "",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet odio diam, quis cursus lacus pharetra non. Quisque faucibus eget odio vitae elementum. Nunc mattis lobortis lectus eu tristique. Phasellus eleifend justo vel viverra molestie. Duis ornare velit ac urna pulvinar finibus. Sed commodo interdum sem. Quisque tempus, ipsum vitae hendrerit laoreet, odio sem bibendum mauris, et elementum sapien elit id tortor. Ut non orci purus. Aenean sit amet rutrum ex. Morbi auctor quam at lacus hendrerit maximus. Sed eget felis eget ex semper tempus vestibulum sit amet sapien. Vestibulum finibus ac arcu eget tempus. Proin ut orci enim. Mauris sodales leo et quam semper, vel auctor tellus semper."
  },
}
export const Modal = () => {
  const [modal, setModal] = React.useState(props);
  const handleClick = () => {
    document.getElementsByClassName('modalMain')[0].style.display = "none";
  }
  return (
    <div>
      <div className={"modalMain"}>
        <div className={"top"}>
          <input type={"button"}
            className={"modalExit button"}
            value={"✖"}
            onClick={handleClick}
          />
        </div>
        <div className={"modalCenter"}>
          <ImageSection src={modal.sourceImage} title={modal.title} tools={modal.tools} />
          <WriteUpSection description={modal.writeUp.summary} />
        </div>
        <div className={"modalBottom"}>
          {modal.writeUp.github
          ? <ModalButton value={"Github"} url={modal.writeUp.github} />
          :<></>}
          {modal.writeUp.legacy 
          ? <ModalButton value={"Old Demo"} url={modal.writeUp.legacy} />
          :<></>}
          {modal.writeUp.url 
          ? <ModalButton value={"Demo"} url={modal.writeUp.url}/> 
          : <></>}
        </div>
      </div>
    </div>
  )
}