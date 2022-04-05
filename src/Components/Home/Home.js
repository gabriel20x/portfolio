import style from './home.module.css'
import photo from './Gabriel_perfil.png'
import Button from "../Elements/Button/Button";

export default function Home() {
  return (<>
    <div className={style.container}>
      <div className={style.description}>
        <h3> ¡Hola! te doy la bienvenida soy:</h3>
        <h1> Gabriel García</h1>
        <h2> Ingeniero Electrónico y FullStack Developer</h2>
        <br/> <br/>
        <h3>
          Te invito a que revises mi perfil, desplazate hacia abajo o por las pestañas para conocer un poco mas de mi y darle un vistazo a mis proyectos mas actuales.
        </h3>
        <div className={style.buttons}>
          <Button buttonText={'Sobre mi'} route={'/about'}/>
          <Button buttonText={'Proyectos'} route={'/projects'}/>
        </div>
      </div>
      <div className={style.photo}> {/* Elipsis 650 * 450 px  */}
        <img src={photo} alt={'Imagen de perfil'}/> {/* image 400 * 490 px  */}
      </div>

    </div>
  </>)
}