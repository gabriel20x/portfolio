import style from "./Skills.module.css"
import * as skillsIcons from "../../../Images/skills/skills"
import Icon from "../../Elements/Icon/Icon";
export default function Skills() {
  return (<>
    <div className={style.container}>
      {
        Object.entries(skillsIcons).map(([key, value],index) => {
         return <Icon image={value} footer={key} even={index % 2}/>
        })
      }
    </div>
  </>)
}