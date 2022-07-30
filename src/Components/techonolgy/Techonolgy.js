import React from "react";
import Data from "./Data";
import TechSlide from "./TechSlides";
import { nanoid } from "nanoid";

export default function Technology(){
  const [index, setIndex] = React.useState(0);
  const data = Data
  const control = data.map((_, idx) => {
      return <div className={`control ${index === idx ? " active" : ""}`}  key={nanoid()}
      onClick={() => {
        setIndex(idx);
      }}
      ><h3 className="text">{idx + 1}</h3></div>
  })
  const elements = data.map(each => {
    return <TechSlide 
              header = {each.name}
              para = {each.description}
              img = {each.images.desktop}
              img_tablet = {each.images.tablet}
              key = {nanoid()}
          />
  })
  return(
    <main className="technology-main">
      <div className="technology-main_head">
        <h1 className="technology-main_head-header"><span>03</span> space launch 101</h1>
      </div>
      <div className="technology-main_body">
        <div className="technology-main_body-controls">
          {control}
        </div>
        <div className="technology-main_body-slides">
          <div className="slideshow">
            <div className="slideshowSlider" style= {{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
              {elements}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}