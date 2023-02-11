import React from "react";
import { ModalButton } from "./ModalButton/ModalButton";
import { ImageSection } from "./ImageSection/ImageSection"
import { WriteUpSection } from './WriteUpSection/WriteUpSection'

export const Modal = ({modal}) => {

  const handleClick = () => {
    document.getElementsByClassName('modalMain')[0].style.display = "none";
    document.body.style.overflow = '';
  }
  return (
    <div>
      <div className={"modalMain container-secondary"}>
        <div className={"top"}>
          <input type={"button"}
            className={"modalExit button-secondary"}
            value={"✖"}
            onClick={handleClick}
          />
        </div>
        <div className={"modalCenter"}>
          <ImageSection modal={modal} />
          <WriteUpSection description={modal.writeUp.summary} />
        </div>
        <div className={"modalBottom"}>
          {modal.links.github
          ? <ModalButton value={"Github"} url={modal.links.github} />
          :<></>}
          {modal.links.legacy 
          ? <ModalButton value={"Legacy Demo"} url={modal.links.legacy} />
          :<></>}
          {modal.links.demo
          ? <ModalButton value={"Demo"} url={modal.links.demo}/> 
          : <></>}
          {modal.links.download 
          ? <ModalButton value={"Download"} url={modal.links.download}/> 
          : <></>}
          {modal.links.readmore 
          ? <ModalButton value={"Read More"} url={modal.links.readmore}/> 
          : <></>}
        </div>
      </div>
    </div>
  )
}