

export const VideoContainer = ({video}) => {
  
  return (
    <div className="videoFull">
      <video autoPlay loop muted>
        <source src={`/Portfolio2.0/images/${video}`} type="video/mp4" />
      </video>
    </div>
  )
}
