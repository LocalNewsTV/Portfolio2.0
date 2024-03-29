export const  ModalButton = ({value, url}) => {
  const handleClick = (url) => {
    window.open(url, '_blank');
  }
  return (
    <input
      type={"button"}
      value={value}
      className={"modalButton button button-secondary"}
      onClick={handleClick.bind(this, url)}
    />
  )
}