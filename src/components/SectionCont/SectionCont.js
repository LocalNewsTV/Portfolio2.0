import React from "react"
import 'next/image';

export const SectionCont = ({id = "", background="", title="", ...props}) => {

  React.useEffect(()=>{
    document.getElementById(id).style.backgroundImage = `url('/images/${background}.webp')`;
  });

  return (
    <div id={id} className={"sectionMain"}>
      {title 
      ? <div className={"sectionTitleBox"} >
          <div className={"sectionTitle"}>
            <h2>{title}</h2>
          </div>
        </div> 
      : <></>}
      <div className={"sectionCont"}>
        {props.children}
      </div>
    </div>
  )
}