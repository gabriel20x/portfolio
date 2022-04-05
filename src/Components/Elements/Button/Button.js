import style from './button.module.css'
import {Link} from "react-router-dom";

export default function Button({buttonText, route, handle}) {

  const isUrl = (link) => {
    try {
      let url = new URL(link)
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (_){
      return false
    }
  }

 return (<>
   {isUrl(route) ? (
     <a href={route} target={'_blank'} rel={"noreferrer"}><button className={style['button-two']}> {buttonText}  </button></a>
   ) : (
     handle ? (
        <button className={style['button-one']} type={'submit'}> {buttonText} </button>
       ) : (
        <Link to={route ? route : '/'}><button className={style['button-one']}> {buttonText} </button></Link>
       )
   )}
 </>)
;}