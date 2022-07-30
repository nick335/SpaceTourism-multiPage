import React from "react";

export default function TechSlide(props){
  const [windowDimenion, detectHW] = React.useState({
    winWidth: window.innerWidth
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth
    })
  }

  React.useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])

  return(
    <div className="slide">
      <div className="slide_contentDiv">
        <h2 className="slide_contentDiv-header">The terminology...</h2>
        <h3 className="slide_contentDiv-subheader">{props.header}</h3>
        <p className="slide_contentDiv-para">{props.para}</p>
      </div>
      <div className="slide_imgDiv">
        <img className="slide_imgDiv-img" src={ windowDimenion.winWidth <= 912 ? props.img_tablet : props.img} alt={props.header} />
      </div>
    </div>
  )
}