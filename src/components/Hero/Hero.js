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
      {/* <h1>Page Under Construction</h1> */}
    </div>
  )
}