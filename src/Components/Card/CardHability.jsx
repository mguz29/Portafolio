import React from 'react'
import style from "../Card/CardHability.module.css"

export default function CardHability(props) {
    return(
        <div className={style.container}>
        <div className={style.cntimg}>
        <img src={props.url} alt="" className={style.CardImage}/>
        </div>
        <span className={style.CardName}>{props.name}</span>
        </div>
      )
    
}
