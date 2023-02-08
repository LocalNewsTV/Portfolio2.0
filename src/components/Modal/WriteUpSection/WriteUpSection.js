export const WriteUpSection = ({description}) => {
  return (
    <div className={"writeUpSection"}>
      <div>
        <h3>Summary</h3>
        <div className={"writeUp"}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}