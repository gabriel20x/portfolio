import style from "./Softskills.module.css"
import * as softIcons from "../../../Images/soft/soft"
import Icon from "../../Elements/Icon/Icon";
export default function Skills() {
  return (<>
    <div className={style.container}>
      <Icon image={softIcons.leader} footer={'Liderazgo\nCooperativo'} even={1} />
      <div className={style.center}>
        <span>
          <Icon image={softIcons.learning} footer={'Aprendizaje\nAdaptabilidad'} even={0}/>
          <Icon image={softIcons.task} footer={'Multitarea\nResponsabilidad'} even={0}/>
        </span>
        <h3>
          {"A lo largo de mis estudios/carrera he podido desarrollar y aplicar varias habilidades, las cuales me han permitido" +
            " mejorar mi rendimiento y la comunicación con mi equipo de trabajo.\nLogrando así un excelente entorno profesional."}
        </h3>
      </div>
      <Icon image={softIcons.order} footer={'Ordenado\nObservador'} even={1}/>
    </div>
  </>)
}