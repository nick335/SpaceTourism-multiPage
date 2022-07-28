import React from "react";
import logo from '../../images/shared/logo.svg';
import {Link} from 'react-router-dom';

export default function Nav(props){
  const menuActive =  props.menu_active ? 'is-active' : ''

  return(
    <nav className="nav">
      <div className="nav_div-logo">
        <img src={logo} alt="logo" className="nav-logo"/>
      </div>
      <div className={`nav_bar-div ${menuActive}`}>
        <div className="nav-lists-div">
          <ul className="nav-lists">
            <li className={`list ${ props.page === 'page-home' ? 'active' : '' }`} ><CustomLink num={'00'}  className='link ' to="/">Home</CustomLink></li>
            <li className={`list ${ props.page === 'page-destination' ? 'active' : '' }`} ><CustomLink num={'01'}  className='link' to="/destination">Destination</CustomLink></li>
            <li className={`list ${ props.page === 'page-crew' ? 'active' : '' }`} ><CustomLink num={'02'}  className='link' to="/crew" >Crew</CustomLink></li>
            <li className={`list ${ props.page === 'page-technology' ? 'active' : '' }`} ><CustomLink num={'03'}  className='link' to="/technology">Technology</CustomLink></li>
          </ul>
        </div>
      </div>
      <div className="nav-line"></div>
      <div className={`navbar_toggle ${menuActive}`} onClick={props.toggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav> 
  )
 
}

function CustomLink({ to, children, setpage, ...props }) {
  return (
    <>
      <Link  to={to} {...props}><span>{props.num}</span>
          {children}
      </Link>
    </>
      
  )
}
