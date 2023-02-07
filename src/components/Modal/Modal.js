import React from "react";
import Image from "next/image";
const props =    {
  id: "Hello",
  title: "Sample Title Text",
  sourceImage: "/images/projectImg/128Final.webp",
  description: "",
      writeUp: {
          url: "https://localnewstv.github.io/<Repo>",
          github: "https://github.com/LocalNewsTV/<Repo>",
          tools: "",
          summary: ""
      },
}
export const Modal = () => {
  const [modal, setModal] = React.useState(props);
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
      <div className={"DemoImage"}>
        <Image
          src={modal.sourceImage}
          height={350}
          width={350}
          alt={modal.title + " image"}
          />

      </div>
    </div>
    <div className={"modalBottom"}>
      
    </div>
  </div>
  )
}