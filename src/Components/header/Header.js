import React from "react";
import Nav from "./Nav";

export default function Header(props){
  return(
    <header className="header">
      <Nav 
        page = {props.page}
        toggle = {props.toggle}
        menu_active = {props.menu_active}
      />
    </header>
  )
}