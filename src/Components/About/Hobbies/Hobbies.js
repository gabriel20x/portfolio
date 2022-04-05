import style from "./Hobbies.module.css"
import * as hobbiesIcons from "../../../Images/hobbies/hobbies"
import Icon from "../../Elements/Icon/Icon";
export default function Skills() {
  return (<>
    <div className={style.container}>
      <Icon image={hobbiesIcons.games} footer={'Videojuegos'} even={1} />
      <div className={style.center}>
        <span>
          <Icon image={hobbiesIcons.tech} footer={'Tecnología\nElectrónica'} even={0}/>
          <Icon image={hobbiesIcons.webdesing} footer={'Web Design'} even={0}/>
        </span>
        <h3>
          {"Como millones de persona disfruto cada instante de mi vida realizando lo que me gusta.\n" +
            "Tengo un amor muy grande a mi carrera, al punto de que me encanta aprender siempre cosas nuevas y ver lo" +
            "rápido que avanza nuestra sociedad.\n" +
            "Trabaja en lo que amas, y nunca mas tendras que trabajar."}
        </h3>
      </div>
      <Icon image={hobbiesIcons.reposteria} footer={'Repostería'} even={1}/>
    </div>
  </>)
}