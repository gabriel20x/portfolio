import Description from "../Elements/Description/Description";
import style from "./About.module.css"
import SkillCard from "../Elements/SkillCard/SkillCard";
import cap from "../../Images/graduation-cap-solid.svg";
import laptop from "../../Images/laptop-code-solid.svg";
import chalkboard from "../../Images/person-chalkboard-solid.svg";
import gamepad from "../../Images/gamepad-solid.svg";

export default function About() {
  const title = 'Sobre mi'
  const description = 'Al graduarme como Ing. Electrónico trabajé como ingeniero inspector en una contratista petrolera. Al finalizar mi jornada y al analizar mis opciones dentro de mi país, decidí que mi mejor oportunidad como Ing. era enfocar mis estudios en la programación web y ser un desarrollador Full-Stack. \n \nMe forme de manera individual, hasta que conocí Henry, donde mis conocimientos y habilidades se multiplicaron. Ahora estoy graduado como FullStack Developer y gracias al bootcamp he podido desarrollar algunos proyectos interesantes, te invito a verlos en la pestaña de proyectos.'
  return (<>
    <Description title={title} description={description}/>
    <br/>
    <h1 className={style.text}>Conoce mis habilidades y experiencias:</h1>
    <div className={style["cards-container"]}>
      <SkillCard title={'Estudios'} icon={cap} route={'/skills/academy'}/>
      <SkillCard title={'Habilidades Técnicas'} icon={laptop} route={'/skills/technical'}/>
      <SkillCard title={'Habilidades Blandas'} icon={chalkboard} route={'/skills/soft'}/>
      <SkillCard title={'Intereses'} icon={gamepad} route={'/skills/hobbies'}/>
    </div>
  </>)
}