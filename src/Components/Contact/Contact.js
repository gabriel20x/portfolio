import style from "./Contact.module.css"
import Description from "../Elements/Description/Description";
import email from "../../Images/email.svg"
import github from "../../Images/github-brands.svg"
import linkedin from "../../Images/linkedin-brands.svg"
import Button from "../Elements/Button/Button";
import emailjs from "@emailjs/browser";
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function Contact() {
  const title = 'Contactame'
  const description = '¿Te gustó lo que puedo hacer?, ¿Quieres saber lo que podría llegar a hacer?, ¿Encajo con tu perfil de búsqueda?' +
    '\n \nAsi sea por mera curiosidad, me encantaría recibir nuevas ofertas y retos, todo es parte del proceso de ' +
    'aprendizaje y crecimiento profesional. Contactame, hagamos magia juntos.'

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_1rid24v', 'template_rxq3jqh', e.target, 'Lhv8ruZuxqHl7Gf75')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (<>
    <Description title={title} description={description}/>
    <div className={style.container}>
      <div className={style["social-container"]}>
        <h3>Mis sitios sociales:</h3>
        <div className={style.social}>
          <div className={style.icon}>
            <CopyToClipboard text={'gabrielgarciatorresm3@gmail.com'}
              onCopy={() => alert("Correo copiado al portapapeles")}>
              <img src={email} alt={"email"}/>
            </CopyToClipboard>
          </div>
          <div className={style.icon}>
            <a href="https://github.com/gabriel20x" target={"_blank"} rel={"noreferrer"}>
              <img src={github} alt={"github"}/>
            </a>
          </div>
          <div className={style.icon}>
            <a href="https://www.linkedin.com/in/gabrielgarcia-full-stack-developer/" target={"_blank"} rel={"noreferrer"}>
              <img src={linkedin} alt="linkedin"/>
            </a>
          </div>
        </div>
      </div>
      <form className={style["form-container"]} onSubmit={handleSubmit}>
        <div className={style.input}>
          <label>Nombre:</label>
          <input type="text" name={"name"} autoComplete={'off'}/>
        </div>
        <div className={style.input}>
          <label>Email:</label>
          <input type="email" name={"email"} autoComplete={'off'}/>
        </div>
        <div className={style.input}>
          <label>Mensaje:</label>
          <textarea name={"message"} autoComplete={'off'}/>
        </div>
        <Button buttonText={"Send"} handle={handleSubmit}/>
      </form>
    </div>
  </>)
}