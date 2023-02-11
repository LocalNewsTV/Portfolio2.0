export const WriteUpSection = ({description}) => {
  return (
    <div className={"writeUpSection"}>
        <div className={"writeUp"}>
          {description.map((words,index) => {return <p key={index + "_modal"} className={"font-secondary"}>{words}</p>})}
        </div>
    </div>
  )
}