import React from "react";
import { ModalButton } from "./ModalButton/ModalButton";
import { ImageSection } from "./ImageSection/ImageSection"
import { WriteUpSection } from './WriteUpSection/WriteUpSection'
import { SectionCont } from "../SectionCont/SectionCont";
export const Modal = ({modal}) => {

  const handleClick = (evt) => {
    if(evt.target.id === 'modalOverlay' || evt.target.id === 'modalExit'){
      document.getElementById('modalOverlay').style.display = "none";
      document.body.style.overflow = '';
    }
  }
  return (
    <div id={"modalOverlay"} onClick={handleClick}>
        <div className={"modalMain container-secondary"}>
          <div className={"top"}>
            <input type={"button"}
              className={"button-secondary"}
              id={"modalExit"}
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