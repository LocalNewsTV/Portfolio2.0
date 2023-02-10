import Image from "next/image"
import details from "@/UpdatableInfo/aboutDetails"
export const AboutSection = () => {
  const scale = .4
  return (
  <div className={"aboutSection"}>
    <div className={"aboutLeft aboutCont container-primary-tint"}>

      <h3 className={"header-primary"}>Beginnings</h3>
      <p className={"font-primary"}>{details.writeup.beginnings}</p>
      <h3 className={"header-primary"}>Getting Started</h3>
      <p className={"font-primary"}>{details.writeup.gettingStarted}</p>
      <h3 className={"header-primary"}>Hobbies</h3>
      <p className={"font-primary"}>{details.writeup.hobbies}</p>
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