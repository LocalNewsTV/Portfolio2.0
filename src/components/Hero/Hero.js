import Image from "next/image";
export const Hero = () => {
  return (
    <div className={"heroCont"}>
      <Image 
        src={'/HeroLogo.png'}
        width={350}
        height={225}
        alt={"Matthew Logan Logo"}
      />
    </div>
  )
}