import React from 'react'
import style from "../Navbar/Navbar.module.css"
import ColorSchemesExample from '../ColorSchemesExample'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <div className={style.Navbar}>
          <Link to='/Home'className={style.Link}> <h5>Marlon Guzman</h5>  </Link>
          <Link to='/Home'className={style.Link}> <h5>Home</h5>  </Link>
          <Link to='/About'className={style.Link}> <h5>About Me</h5>  </Link>
          <Link to='/Projects'className={style.Link}> <h5>Projects</h5> </Link>
        </div>
    </div>
  )
}
