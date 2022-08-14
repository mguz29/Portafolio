import React from "react";
import { Link } from "react-router-dom";
import style from '../Footer/Footer.module.css'


export default function Footer() {
    return (
        
        <nav className={style.footer}>
            <div className={style.container}>
                <div className={style.info}>
                    <span>TO GO TO</span>
                    <span>CONTACT</span>
                </div>
                <div className={style.info}>
                  <span>FAQ</span>
                    <span>ABOUT US</span>
                </div>
                <div className={style.info}>
                    <h4>ADITIONAL INFO</h4>
                    <span>ANY SUGESTIONS</span>
                </div>
            </div>
        </nav>
    )
}
