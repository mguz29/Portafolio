import {React, useState} from 'react';
import style from './contact.module.css'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

export default function Contact(){
    // const [input, setInput] = useState({
    //     name: "",


    // })

    // function handleChange(e) {
    //         setInput({
    //             ...input,
    //             [e.target.name]:e.target.value,
    //         });


    // };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    Swal.fire(
      '¡Mail Enviado!',
      '¡Muchas gracias!',
      'success'
    )
    emailjs.sendForm('service_h1oadk9','template_vt534av',e.target,'QrrgfR3JmZDRfpDPB')
    .then(response => console.log(response))
    .catch(error => console.log(error))
    e.target.reset()
  }
  return(

      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.TwhiteBackground} style={{padding:"4px",textAlign:"center"}}>
        <label className={style.titlesubTitle} style={{ color: "antiquewhite"}} >CONTÁCTAME</label>
        </div>
  				<div className={style.inputs}>
  					<label className={style.inputs}>
  						<input className={style.iwhiteBackground} type="text" name="user_name" placeholder="Tu nombre" required />
  					</label>
  					<label>
  						<input className={style.iwhiteBackground} type="email" name="user_email" placeholder="Correo Electrónico" required />
  					</label>
  				</div>
  				<div>
  					<label>
  						<textarea className={style.textwhiteBackground} name="user_message" placeholder="mensaje" required></textarea>
  					</label>
  				</div>
          <div className={style.whiteBackground} style={{textAlign:"center",padding:"2px", cursor:"pointer"}}>
  				<button className={style.subTitle} style={{cursor:"pointer", color:"#65727c",justifyContent:"center", height:"inherit"}} type="submit">
  					ENVIAR MENSAJE
  				</button>
          </div>
  			</form>
  )
}


