import React from 'react'
import Header from './header/Header'
import Crew from './crew/Crew';
import Home from './home/Home';
import Technology from './techonolgy/Techonolgy';
import Destination from './destination/Destination';
import {Route, Routes, useLocation} from "react-router-dom";

export default function PageTemplate(){
  const [pageBg, setPageBg] = React.useState('page-home')
  const [menu, setMenu] = React.useState(false)
  const location = useLocation();

  React.useEffect(() => {
      const child =location.pathname
      if(child === '/'){
        setPageBg('page-home')
      }
      if(child === '/crew'){
        setPageBg('page-crew')
      }
      if(child === '/destination'){
        setPageBg('page-destination')
      }
      if(child === '/technology'){
        setPageBg('page-technology')
      }
  }, [location])



  function toggleMenu(){
    setMenu(prevstate => !prevstate)
  }
  return(
    <div className={`page ${pageBg}`}>
      <Header 
      page = {pageBg}
      toggle = {toggleMenu}
      menu_active = {menu}
      />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/crew' element={<Crew />} />
      <Route path='/destination' element={<Destination />} />
      <Route path='/technology' element={<Technology />}/>
      </Routes>
    </div>
  )
}