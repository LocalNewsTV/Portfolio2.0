import React from "react";
import { projects } from "@/UpdatableInfo/projects";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Modal } from "@/components/Modal/Modal";


export const ModalContext = () => {
  const [modal, setModal] = React.useState(projects[0]);
  return (
    <div className={"projectContainer"}>
      <Modal modal={modal} />
      {projects.map((project, index) => <ProjectCard key={index} props={project} setModal={setModal} />)}
    </div>
  )
}