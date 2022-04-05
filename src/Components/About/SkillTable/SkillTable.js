import style from "./SkillTable.module.css"
import cap from "../../../Images/graduation-cap-solid.svg";
import laptop from "../../../Images/laptop-code-solid.svg";
import chalkboard from "../../../Images/person-chalkboard-solid.svg";
import gamepad from "../../../Images/gamepad-solid.svg";
import {useState} from "react";
import {Outlet, useNavigate} from "react-router"
import {useLocation} from "react-router-dom";

export default function SkillTable() {
  const navigate = useNavigate()
  const location = useLocation().pathname
  const [icon,selectIcon] = useState(location)
  const selectTab = (tab) => {
    selectIcon(tab)
    navigate(tab)
  }

  return (<>
    <div className={style.container}>
      <div className={style.tabs}>
        <div onClick={()=> selectTab('academy')} className={icon.includes('academy') ? `${style.selected} ${style.academy}` : null}>
          <img src={cap} alt="cap"/>
        </div>
        <div onClick={()=>selectTab('technical')} className={icon.includes('technical') ? `${style.selected} ${style.technical}` : null}>
          <img src={laptop} alt="skills" />
        </div>
        <div  onClick={()=>selectTab('soft')} className={icon.includes('soft') ? `${style.selected} ${style.soft}` : null}>
          <img src={chalkboard} alt="soft-skills"/>
        </div>
        <div onClick={()=>selectTab('hobbies')} className={icon.includes('hobbies') ? `${style.selected} ${style.hobbies}` : null}>
          <img src={gamepad} alt="hobbies" />
        </div>
      </div>
      <div className={style.info}>
        <Outlet/>
      </div>
    </div>
  </>)
    ;
}