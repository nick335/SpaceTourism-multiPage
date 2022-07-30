import React from "react";
import data from "./Data";
import CrewSlides from "./CrewSlides";
import { nanoid } from "nanoid";

export default function Crew(){
  const [index, setIndex] = React.useState(0);

  const Data = data;
  const element = Data.map(each => {
    return <CrewSlides 
              img = {each.images}
              head = {each.role}
              sub_head = {each.name}
              para = {each.bio}
              key = {nanoid()}
            />
  })
  const dots = Data.map((_, idx)=> {
    return <div key={nanoid()} className= {`slideshowDot ${index === idx ? " active" : ""}`} 
    onClick={() => {
      setIndex(idx);
    }}
    ></div>
  })
  return(
    <main className="crew-main">
      <div className="crew-main_head">
        <h1 className="crew-main_head-header"><span>02</span>Meet your crew</h1>
      </div>
      <div className="crew-main_body">
        <div className="slideshow">
          <div className="slideshowSlider" style= {{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {element}
          </div>
        </div>
        <div className="slideshowDots">
            {dots}
        </div>
      </div>

    </main>
  )
}