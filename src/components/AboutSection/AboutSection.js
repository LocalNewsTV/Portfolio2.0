import Image from "next/image"
import details from "@/UpdatableInfo/aboutDetails"
export const AboutSection = () => {
  const scale = .4
  return (
  <div className={"aboutSection"}>
    <div className={"aboutLeft aboutCont container-primary-tint"}>

      <h3 className={"header-primary"}>Beginnings</h3>
      {details.writeup.beginnings.map((words,index) =>{ return <p key={index + "_beginnings"} className={"font-primary"}>{words}</p> })}

      <h3 className={"header-primary"}>Getting Started</h3>
      {details.writeup.gettingStarted.map((words,index) =>{ return <p key={index + "_gettingStarted"} className={"font-primary"}>{words}</p> })}

      <h3 className={"header-primary"}>Hobbies</h3>
      {details.writeup.hobbies.map((words,index) =>{ return <p key={index + "_hobbies"} className={"font-primary"}>{words}</p> })}

      <h3 className={"header-primary"}>Favourite Tools</h3>
      {details.writeup.favouriteTools.map((words,index) =>{ return <p key={index + "tools"} className={"font-primary"}>{words}</p> })}

      <h3 className={"header-primary"}>Education</h3>
      {details.writeup.education.map((words,index) =>{ return <p key={index + "_education"} className={"font-primary"}>{words}</p> })}

    </div>
    <div className={"container-primary-tint aboutRight aboutCont"}>
      <Image
        className={"border mt"}
        src={details.headshot.src}
        alt={details.headshot.alt}
        height={details.headshot.height * details.headshot.scale}
        width={details.headshot.width * details.headshot.scale}
      />
      <h3 className={"header-accent"}>{details.headshot.caption}</h3>
    </div>
  </div>
  )
}