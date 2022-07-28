import React from "react";
import data from "./Data";

export default function Destination(){
  const [num, setNum] = React.useState(1)
  const Data = data[num -1]
  
  function setnum(id){
    setNum(id)
  }

  return(
    <main className="destination-main">
      <div className="destination-main_head">
        <h1 className="destination-main_head-header"><span>01</span>Pick your destination</h1>
      </div>
      <div className="destination-main_body">
        <div className="destination-main_body_imgDiv">
          <img className="destination-main_body_imgDiv-img" alt={Data.name} src={Data.image} />
        </div>
        <div className="destination-main_body_contentDiv">
          <div className="destination-main_body_contentDiv-header">
            <ul className="destination-main_body_contentDiv-header-lists">
              <li className="list"><h2 className={`head ${ num === 1 ? 'active' : ''}`} onClick={() => setnum(1)} >Moon</h2></li>
              <li className="list"><h2 className={`head ${ num === 2 ? 'active' : ''}`} onClick={() => setnum(2)}>Mars</h2></li>
              <li className="list"><h2 className={`head ${ num === 3 ? 'active' : ''}`} onClick={() => setnum(3)}>Europa</h2></li>
              <li className="list"><h2 className={`head ${ num === 4 ? 'active' : ''}`} onClick={() => setnum(4)}>Titan</h2></li>
            </ul>
          </div>
          <div className="destination-main_body_contentDiv-body">
            <h2 className="destination-main_body_contentDiv-body-head">{Data.name}</h2>
            <p className="destination-main_body_contentDiv-body-para">{Data.description}</p>
          </div>
          <div className="destination-main_body_contentDiv-footer">
            <div className="destination-main_body_contentDiv-footer_dist">
              <h3>{Data.distance}</h3>
              <h4>AVG. DISTANCE</h4>
            </div>
            <div className="destination-main_body_contentDiv-footer_time">
              <h3>{Data.travel}</h3>
              <h4>Est. travel time</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}