import style from "./ProjectCard.module.css"
import Button from "../Button/Button"

export default function ProjectCard({ image, title, description, git, deploy }) {
  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  }
 return (<>
   <div className={style.container} style={divStyle}>
     <div className={style.info}>
       <h1 className={style.title}>{title}</h1>
       <h4 className={style.description}>{description}</h4>
       <div className={style.buttons}>
         {git ? (
           <Button buttonText={'Github Repo'} route={git}/>
         ) : null}
         {deploy ? (
          <Button buttonText={'View Live'} route={deploy}/>
         ) : null}
       </div>
     </div>
   </div>
 </>)
;}