import React from "react";
import { Link } from "react-router-dom";
import style from '../Footer/Footer.module.css'


export default function Footer() {
    return (
        
        <nav className={style.footer}>
            <div className={style.container}>
                <div className={style.info}>
                    <h4>SOFT SKILLS</h4>
              
                </div>
                <div className={style.info}>
                    <h4>ABOUT ME</h4>
                </div>
                <div className={style.info}>
                    <h4>PROJECTS</h4>
                </div>
            </div>
        </nav>
    )
}
