import Image from "next/image"
export const AboutSection = () => {
  const scale = .4
  return (
  <div className={"aboutSection"}>
    <div className={"aboutLeft aboutCont"}>
      <p>Hello</p>
    </div>
    <div className={"aboutRight aboutCont"}>
      <div className={"aboutImage"}>
      <Image
        className={"border"}
        src={"/images/myself.webp"}
        alt={"Matthew Logan"}
        height={1024 * scale}
        width={764 * scale}
      />
      </div>
    </div>
  </div>
  )
}