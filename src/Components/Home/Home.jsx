import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from "../Home/Home.module.css"
import logoGithub from "../../Image/5847f98fcef1014c0b5e48c0.png"
import logoIn from "../../Image/58e91afdeb97430e81906504.png"
import logoWP from "../../Image/whatsapp-logo-png-2260.png"

export default function Home() {
  return (
      <div>
          <Navbar />
          <div className={style.NameContainer}>

              <div>
                  <span className={style.Text}>Soy </span>
              </div>
              <div>
                  <span className={style.Text}>Marlon Guzman </span>
              </div>
              <div>
                  <span className={style.Text}>Full Stack</span>
              </div>
              <div>
                  <span className={style.Text}>Web Developer</span>
              </div>
              <div className={style.Social}>
              <span className={style.image}><img src={logoGithub}/></span>
              <span className={style.image}><img src={logoIn}/></span>
              <span className={style.image}><img src={logoWP}/></span>
              </div>
          </div>


          <section id="about" className={style.aboutPageContainer}>

              <div className={style.TwhiteBackground}>
                  <h1 className={style.subTitle} style={{ color: "#fff" }}>Sobre MI</h1>
              </div>

              <div className={style.descriptionContainer}>
                  <div className={style.description}>
                      <span className={style.textDescription}>
                          Soy desarrollador web especializado en Front End, amante de los diseños simples y modernos.
                          Soy una persona autodidacta, siempre que puedo intento aprender nuevas tecnologías. <br /><br />
                          Estudié programación web Full Stack en el bootcamp Soy Henry
                          <strong><a href="https://certificates.soyhenry.com/cert?id=9a14a737-bb3c-47ca-ac61-7924de3cbdf7"
                              target="_blank"
                              rel="noreferrer"
                              className={style.certificado}> (ver certificado)</a></strong> donde realicé varios de los proyectos
                          que se encuentran en esta página y adquirí experiencia de trabajo con metodología ágil SCRUM.
                          También trabajé como Tutor Front End en CoderHouse donde tuve la oportunidad de impartir mis conocimientos de desarrollo con otros alumnos
                          y guiarlos en su proceso de aprendizaje. <br /><br />
                          Actualmente estoy buscando trabajar en un lugar que me permita dejar mi marca en la web y con el que
                          pueda crecer profesionalmente.
                      </span>
                      <div className={style.TwhiteBackground} style={{ marginTop: "45px", marginBottom: "40px", marginLeft: "-4rem", cursor: "pointer" }}>
                          <a href="https://drive.google.com/file/d/1G1T3HmeQa3HvrbCBTI4itifglDocXlHT/view?usp=sharing" target="_blank" rel="noreferrer" className={style.download} ><span className={style.subTitle} style={{ color: "#00A1F1" }}>DESCARGAR CV</span></a>
                      </div>
                  </div>
              </div>

          </section>

      </div>
  )
}
