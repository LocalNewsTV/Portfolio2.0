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
 
  
export const ProjectCard = () => {

  const showModal = (props) => {
    setModal(props);
    console.log(props);
  }

  return(
    <div className={"projectCard"}>
      <div className={"projectImageCont"}>
        <Image src={props.sourceImage} alt={props.title + " Image"} height={350} width={350}/>
      </div>
      <div className={"contentTitle"}>
      <p className>{props.title}</p>
      </div>
      <div className={"buttonCont"}>
        <input 
          type={"button"} 
          className={"seeMore"} 
          value={"See More"}
          onClick={showModal.bind(this, props)
          
          } />
      </div>
    </div>
  )
}