import React from "react"
import 'next/image';

export const SectionCont = ({id = "", background="", ...props}) => {

  React.useEffect(()=>{
    document.getElementById(id).style.backgroundImage = `url('/images/${background}.webp')`;
  });

  return (
    <div id={id} className={"sectionCont"}>

    </div>
  )
}