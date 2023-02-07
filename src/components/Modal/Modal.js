import React from "react";

export const Modal = () => {
  const [modal, setModal] = React.useState({});
  const handleClick = () => {
    document.getElementsByClassName('modalMain')[0].style.display = "none";
  }
  return (
  <div className={"modalMain"}>
    <div className={"top"}>
    <input type={"button"}
    className={"modalButton"}
    value={"✖"}
    onClick={handleClick}
    />
    </div>
    <div className={"modalCenter"}>

    </div>
    <div className={"modalBottom"}>
      
    </div>
  </div>
  )
}