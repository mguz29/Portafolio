import React from "react";
import { Link } from "react-router-dom";
import style from '../Footer/Footer.module.css'
import { useRef, useState } from "react";


export default function Footer({scroll0, scroll1, scroll2, scroll3}) {
    var [render, setRender] = useState({
        Marlon: false,
        Home: false,
        About: false,
        Projects: false,
    })
    
    const handleClick = (e, bool) => {
        e.preventDefault();
        if (bool) setRender({ ...render, [e.target.id]: true })
        else setRender({ ...render, [e.target.id]: !render[e.target.id] })
    }
    return (
        
        <nav className={style.footer}>
            <div className={style.container}>
                <div className={style.info}>
                    <h4>SOFT SKILLS</h4>
              
                </div>
                <div className={style.info}>
                    <h4  id='About' onClick={(e) => { scroll1.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }}>ABOUT ME</h4>
                </div>
                <div className={style.info}>
                    <h4 id='Projects' onClick={(e) => { scroll3.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }} >PROJECTS</h4>
                </div>
            </div>
        </nav>
    )
}
