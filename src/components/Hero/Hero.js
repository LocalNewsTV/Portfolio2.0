import Image from "next/image";
export const Hero = () => {
  return (
    <div className={"heroCont"}>
      <Image 
        src={'/images/projectImg/BlackJack.webp'}
        width={350}
        height={350}
        alt={"Matthew Logan Logo"}
      />
    </div>
  )
}