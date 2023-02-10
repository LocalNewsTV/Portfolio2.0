import Image from "next/image"
import React from "react"
import { contact } from "@/UpdatableInfo/contact"
export const ContactBox = () => {
  const ContactItem = ({title, icon, link}) => (
    <li>
      {<Image src={icon} alt={title} width={16} height={16} />}
      <a href={link}>{title}</a>
    </li>
  )

  const handleFluff = () => {
    let br = (tag) => document.getElementsByClassName(tag)[0].style;
    br('contactBoxFluff').borderRadius = br('contactBoxFluff').borderRadius === '90px' ? '0' : '90px';
  }
  return (
    <div className={"contactMain contentContainer container-primary-tint"}>
      <div className={"contactBoxFluff container-accent-tint"} onClick={handleFluff} />
      <div className={"contactList"}>
        <ul>
          {contact.map((data, index) =>  <ContactItem key={`${index}_contact`} {...data} />)}
        </ul>
      </div> 
    </div>
    )
}