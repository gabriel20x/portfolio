import style from './Description.module.css'

export default function Description({title, description}) {
 return (<>
   <div className={style.container}>
     <h1 className={style.title}> {title}</h1>
     <h3 className={style.description}>{description}</h3>
   </div>
 </>)
;}