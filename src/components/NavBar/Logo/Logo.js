import Image from "next/image"
export const Logo = ({title="LocalNewsTV"}) => (
  <div className="logo-title">
      <Image 
      src="images/Logo.png"
      width={55}
      height={50}
      alt={"Logo"}
      />
    <h1>{title}</h1>
  </div>
)