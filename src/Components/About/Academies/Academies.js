import style from "./Academies.module.css"
import unexpo from "../../../Images/unexpo.png"
import henry from "../../../Images/HenryLogo.webp"

export default function Academies() {
  return (<>
    <div className={style.container}>
      <figure className={style.academy}>
        <img src={unexpo} alt="Unexpo"/>
        <figcaption>
          <h2>2011 - 2018, Ingeniero Electrónico</h2>
          <hr/>
          <h3>En esta carrera desarrollé aún más mi cariño por la tecnología y lógica computacional. <br/>
          Mi mejor experiencia fue la realización de mi tesis, el cual fue un sistema multiplexor para la comunicación simultanea entre equipos de navegación marítima.
          </h3>
        </figcaption>
      </figure>
      <figure className={style.academy}>
        <img src={henry} alt="Henry academy"/>
        <figcaption>
          <h2>2021/11 - 2022/03, FullStack Developer</h2>
          <hr/>
          <h3>Una academia donde me forme y mejores mis habilidades como desarrollador web. Además de poder experimentar de primera mano
          la realización de un proyecto junto con un equipo de trabajo.</h3>
        </figcaption>
      </figure>
    </div>
  </>)
    ;
}