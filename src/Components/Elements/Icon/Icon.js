import style from "./Icon.module.css"

export default function Icon({image,footer,even}) {
  return (<>
    <figure className={`${style.container} ${even ? style.down : style.up}` }>
      <img src={image} alt={footer}/>
      <figcaption><pre>{footer}</pre></figcaption>
    </figure>
  </>)
    ;
}