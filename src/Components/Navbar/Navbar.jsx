import React from 'react'
import style from "../Navbar/Navbar.module.css"
import ColorSchemesExample from '../ColorSchemesExample'
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Navbar({scroll0, scroll1, scroll2, scroll3}) {
  
  var [render, setRender] = useState({
    Marlon: false,
    Home: false,
    About: false,
    Projects: false,
    Habilities:false
})

const handleClick = (e, bool) => {
    e.preventDefault();
    if (bool) setRender({ ...render, [e.target.id]: true })
    else setRender({ ...render, [e.target.id]: !render[e.target.id] })
}
  return (
    <div>
        <div className={style.Navbar}>
          <Link to='/Home' id='Marlon' onClick={(e) => { scroll0.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }} className={style.Link}> <h5>Marlon Guzman</h5>  </Link>
          <Link to='/Home' id='Home' onClick={(e) => { scroll0.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }} className={style.Link}> <h5>Home</h5>  </Link>
          <Link to='/Home' id='About' onClick={(e) => { scroll1.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }} className={style.Link}> <h5>About Me</h5>  </Link>
          <Link to='/Home' id='Projects' onClick={(e) => { scroll3.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }} className={style.Link}> <h5>Projects</h5> </Link>
          <Link to='/Home' id='Habilities' onClick={(e) => { scroll2.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }} className={style.Link}> <h5>Habilities</h5> </Link>
        </div>
    </div>

  )
}
