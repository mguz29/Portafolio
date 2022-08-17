import React, { useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import style from "../Home/Home.module.css"
import logoGithub from "../../Image/5847f98fcef1014c0b5e48c0.png"
import logoIn from "../../Image/icone-linkedin-ronde-noire.png"
import logoWP from "../../Image/what.png"
import Pi from "../../Image/Pokemons.png"
import { frontEnd, backEnd, otras } from '../Habilities'
import CardHability from '../Card/CardHability'
import Footer from '../Footer/Footer'
import beerland from "../../Image/Beerland.png"
import Contact from '../Contact/Contact'

export default function Home() {
    const scroll0 = useRef()
    const scroll1 = useRef()
    const scroll2 = useRef()
    const scroll3 = useRef()
    const scroll4 = useRef()
    const scroll5 = useRef()
    return (
        <div>
            <div>
            <Navbar scroll0={scroll0} scroll1={scroll1} scroll2={scroll2} scroll3={scroll3} scroll4={scroll4} scroll5={scroll5} />
            </div>
            <div className={style.head}>
                <div ref={scroll0} className={style.NameContainer}>
                    <span className={style.commonText}>SOY</span>
                    <div className={style.blueBackground} style={{ marginBottom: "8px" }}>

                        <span className={style.highText}>MARLON GUZMAN</span>

                    </div>
                    <div className={style.blueBackground}>

                        <span className={style.highText}>FULL STACK</span>

                    </div>
                    <span className={style.commonText}>WEB DEVELOPER</span>
                    <div className={style.Social}>
                        <a href="https://github.com/mguz29" target="_blank" rel="noreferrer" className={style.image}><img src={logoGithub} /></a>
                        <a href="https://www.linkedin.com/in/mguz29" target="_blank" rel="noreferrer" className={style.image}><img src={logoIn} /></a>
                        <a href="https://wa.me/573223313796" target="_blank" rel="noreferrer" className={style.image}><img src={logoWP} /></a>
                    </div>
                </div>
            </div>


            <section ref={scroll1} id="about"   style={{margin:"20px"}} className={style.aboutPageContainer}>


                <div className={style.blueBackground} style={{ margin: "4rem" }}>
                    <span className={style.highText}>Sobre Mi</span>
                </div>
                <div className={style.descriptionContainer}>
                    <div className={style.description}>
                        <span className={style.textDescription}>
                            Desarrollador Fullstack JavaScript, apasionado por el Front-end.
                            Realicé un bootcamp de más de 800 hs. de estudio intensivo que me preparó para desempeñarme como desarrollador Fullstack. 
                            Dentro del curso aprendí desde lo básico hasta desarrollar una aplicación en equipo.

                            Me inicie en el mundo del desarrollo hace relativamente poco. 
                            Quede fascinado con lo que podía crear solo escribiendo. 
                            Hoy busco oportunidades que ayuden a mi desarrollo personal. 
                            Soy una persona proactiva, con buena disposición, 
                            siempre dispuesta, respetuosa y por sobre todo con ganas de trabajar en equipo.
                            {/* Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br /><br />
                        when an unknown printer took a galley of type and scrambled it to make
                            {/* <strong><a href="https://certificates.soyhenry.com/cert?id=9a14a737-bb3c-47ca-ac61-7924de3cbdf7"
                                target="_blank"
                                rel="noreferrer"
                                className={style.Link}> (ver certificado)</a></strong> */}
                            {/* donde realicé varios de los proyectos
                                 a type specimen book. It has survived not only five centuries, but also the leap into
                                 electronic typesetting, remaining essentially unchanged. It was popularised
                            y guiarlos en su proceso de aprendizaje. <br /><br />
                            Actualmente estoy buscando trabajar en un lugar que me permita dejar mi marca en la web y con el que
                            pueda crecer profesionalmente. */}
                        </span>
                        <div className={style.TwhiteBackground} style={{ marginTop: "45px", marginBottom: "40px", marginLeft: "-4rem", cursor: "pointer" }}>
                            <a href="https://drive.google.com/file/d/1vkahmbxmi4ly8kmXL7AxEJ3sQNWZNJzD/view?usp=sharing" target="_blank" rel="noreferrer" className={style.Link} ><span className={style.subTitle} style={{ color: "#fff" }}>DESCARGAR CV</span></a>
                        </div>
                    </div>
                </div>

            </section>

            <div className={style.ContainerHabilities}>

                <div className={style.blueBackground} style={{ margin: "4rem" }}>
                    <span ref={scroll2} className={style.highText}>Habilidades</span>
                </div>

                <div className={style.Habilities}>
                    <div>
                        <h2>Front End</h2>
                        <div className={style.CardHability}>

                            {
                                frontEnd.map((hability, i) => {
                                    return (
                                        <CardHability
                                            key={i}
                                            url={hability.url}
                                            name={hability.name}

                                        />
                                    )
                                })
                            }
                        </div>

                    </div>

                    <divisor className={style.cntLine}>
                        <div className={style.line}>
                        </div>
                    </divisor>

                    <div>
                        <h2>Back End</h2>
                        <div className={style.CardHability}>
                            {
                                backEnd.map((hability, i) => {
                                    return (
                                        <CardHability
                                            key={i}
                                            url={hability.url}
                                            name={hability.name}

                                        />
                                    )
                                })
                            }
                        </div>
                    </div>

                    <divisor className={style.cntLine}>
                        <div className={style.line}>
                        </div>
                    </divisor>

                    <div>
                        <h2>Otras</h2>
                        <div className={style.CardHability}>
                            {
                                otras.map((hability, i) => {
                                    return (
                                        <CardHability
                                            key={i}
                                            url={hability.url}
                                            name={hability.name}

                                        />
                                    )
                                })
                            }
                        </div>

                    </div>

                </div>
            </div>

            {/* <div className={style.ContainerProjects}>
         <div style={{background:"red"}}>
            
            <div className={style.projectDesc}>
            <h2 style={{fontWeight:"800",fontSize:"35px", marginBottom:"10px", cursor:"text"}}>Hola</h2>
            <label style={{width:"500px"}}>Proyecto final del bootcamp soy Henry. 
            Consiste en una tienda online de hardware hecha desde cero completamente funcional,
            permite buscar productos, agregarlos al carrito o lista de deseos, comprar y recibirlo.
            En este proyecto se usaron todas las teconologías aprendidas en el bootcamp y
            supabase como base de datos. Se trabajó con un grupo de 10 programadores usando metodología SCRUM.
            </label>
            <img style={{width:"300px", heigth:"200px"}} src='https://www.cinemascomics.com/wp-content/uploads/2020/08/goku-dragon-ball-super-ultra-instinto.jpg'/>
            </div>
         </div>
        </div> */}

            <div className={style.blueBackground} style={{ margin: "4rem" }}>
                <span ref={scroll3} className={style.highText}>PROYECTOS</span>
            </div>
            <div className={style.projectsContainer}>

                <div className={style.projectContainer}>
                    <div className={style.left}>
                        <div className={style.projectDesc}>
                            <label className={style.pjtitle} style={{ fontWeight: "800", fontSize: "35px", marginBottom: "10px", cursor: "text" }}>Ecommerce Beerland</label>
                            <label style={{ fontSize: "19px", cursor: "text", textAlign:"justify" }}>
                                Beerland es un E-commerce realizado para la etapa final de Henry,podemos ver un dashboard
                                para un usuario(consumidor) con funcionalidades de autenticacion, favoritos, comentarios y compras
                                Tambien contamos con el dashboard de un admin (vendedor) podra ver las estadisticas como 
                                sus ventas,ganancias, stock disponible
                                Contamos con un SuperAdmin se encarga de todas las funciones como
                                venta de productos, pago a los vendedores y solucion de problemas  </label>
                        </div>

                        <div className={style.buttons}>
                            <div className={style.projectwhiteBackground}>
                                <a className={style.Link} href="http://henrystechstore.web.app/" target="_blank" rel="noreferrer">
                                    <span className={style.projectsubTitle} style={{ color: "#FE007C" }}>DEMO</span>
                                </a>
                            </div>
                            <a className={style.Link} href="https://github.com/lezcanozarza/TechStoreEcommerce" target="_blank" rel="noreferrer">
                                <div className={style.projectwhiteBackground}>
                                    <span className={style.projectsubTitle} style={{ color: "#FE007C" }}>REPOSITORIO</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={style.projectImg}>
                        <a href='https://beerland.vercel.app/' target="_blank">
                            <img style={{ width: "600px" }} src={beerland} alt="" className={style.imagen} />
                        </a>
                    </div>
                </div>
            </div>



            <div className={style.projectsContainer}>

                <div className={style.projectContainer}>
                    <div className={style.left}>
                        <div className={style.projectDesc}>
                            <label className={style.pjtitle} style={{ fontWeight: "800", fontSize: "35px", marginBottom: "10px", cursor: "text" }}>SPA Pokemon</label>
                            <label style={{ fontSize: "19px", cursor: "text",  textAlign:"justify"  }}>
                            Presento el PI que desarrollé en el bootcamp de Henry, creamos una API (backend) a partir del consumo de otra API de Pokémon,
                            generando consulta de la DataBase propia, y mediante la librearía React , presentando una serie de cartas, describiendo al azar 40 Pokémon de toda la base de datos disponible,
                             en donde podemos interactuar con esta, de forma entretenida: filtrando, organizando y creando nuevos Pokémon.
                            </label>
                        </div>

                        <div className={style.buttons}>
                            <div className={style.projectwhiteBackground}>
                                <a className={style.Link} href="https://pi-pokemons-mguz.vercel.app/" target="_blank" rel="noreferrer">
                                    <span className={style.projectsubTitle} style={{ color: "#FE007C" }}>DEMO</span>
                                </a>
                            </div>
                            <a className={style.Link} href="https://github.com/mguz29/PI_POKEMONS" target="_blank" rel="noreferrer">
                                <div className={style.projectwhiteBackground}>
                                    <span className={style.projectsubTitle} style={{ color: "#FE007C" }}>REPOSITORIO</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={style.projectImg}>
                        <a className={style.Link} href="https://pi-pokemons-mguz.vercel.app/" target="_blank" rel="noreferrer">
                            <img style={{ width: "600px" }} src={Pi} alt="" className={style.imagen} />
                        </a>
                    </div>
                </div>
            </div>
            <section ref={scroll4} className={style.Contact}  style={{margin:"20px"}}>
                    <Contact/>  
            </section>
            <section>
                <Footer scroll0={scroll0} scroll1={scroll1} scroll2={scroll2} scroll3={scroll3} />
            </section>
            
        </div>
    )
}
