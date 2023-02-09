import React from "react";
import { ModalButton } from "./ModalButton/ModalButton";
import { ImageSection } from "./ImageSection/ImageSection"
import { WriteUpSection } from './WriteUpSection/WriteUpSection'

export const Modal = ({modal}) => {

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