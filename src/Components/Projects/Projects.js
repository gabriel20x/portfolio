import Description from "../Elements/Description/Description";
import style from "./Projects.module.css"
import ProjectCard from "../Elements/ProjectCard/ProjectCard";
import videogame from "../../Images/proyects/finalfantasy.jpg";
import beautify from "../../Images/proyects/Beautify.png"

export default function Projects() {
  const title = 'Proyectos'
  const description = 'He trabajado en algunos proyectos en mi transcurso de aprendizaje como FullStack Developer, tengo muchos proyectos a futuro, y seguire agregando.'
  return (<>
    <Description title={title} description={description}/>
    <br/>
    <h1 className={style.text}>Te invito a revisar mis últimos trabajos:</h1>
    <div className={style["cards-container"]}>
      <ProjectCard title={'Beautify'} image={beautify} description={'E-commerce: Empresa que ofrece productos de belleza facial y servicios.'}
                   git={'https://github.com/gabriel20x/PG-2-Beautify/tree/final_deploy'}
                   deploy={'https://beautify-three.vercel.app/'}/>
      <ProjectCard title={'Videogame App'} image={videogame} description={'Aplicación que consume una API de videojuegos y muestra su contenido.'}
                   git={'https://github.com/gabriel20x/PI-Videogames-main'}
                   deploy={'https://www.linkedin.com/posts/gabrielgarcia-full-stack-developer_backend-postgresql-express-activity-6896363863478988800-DpFE?utm_source=linkedin_share&utm_medium=member_desktop_web'}/>
    </div>
  </>)
}