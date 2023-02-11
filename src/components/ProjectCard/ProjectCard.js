import Image from "next/image";

export const ProjectCard = ({props, setModal}) => {
  const showModal = () => {
    setModal(props);
    document.getElementsByClassName('modalMain')[0].style.display = "flex";
    document.body.style.overflow = 'hidden';
  }

  return(
    <div className={"projectCard container-secondary"}>
      <div className={"projectImageCont"}>
        <Image src={props.sourceImage[0]} alt={props.title + " Image"} height={350} width={350}/>
      </div>
      <div className={"contentTitle"}>
      <p className={"font-secondary"}>{props.title}</p>
      </div>
      <div className={"buttonCont"}>
        <input 
          type={"button"} 
          className={"seeMore button"} 
          value={"See More"}
          onClick={showModal.bind(this, props)
          } />
      </div>
    </div>
  )
}