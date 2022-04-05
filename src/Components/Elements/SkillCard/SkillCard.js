import style from "./SkillCard.module.css"
import {useNavigate} from "react-router";

export default function SkillCard({ icon, title, route}) {
  const navigate = useNavigate()

  return (<>
   <div className={style.container} onClick={()=>navigate(route)}>
     <img className={style.image} src={icon} alt={'icono'}/>
     <h2 className={style.title}>{title}</h2>
   </div>
  </>)
;}