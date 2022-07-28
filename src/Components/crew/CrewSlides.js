import React from "react";

export default function CrewSlides(props){
  return(
    <div className="slide">
      <div className="slide_contentDiv">
        <h2 className="slide_contentDiv-header">{props.head}</h2>
        <h3 className="slide_contentDiv-subheader">{props.sub_head}</h3>
        <p className="slide_contentDiv-para">{props.para}</p>
      </div>
      <div className="slide_imgDiv">
        <img className="slide_imgDiv-img" alt={props.sub_head} src={props.img} />
      </div>
    </div>
  )
 
}