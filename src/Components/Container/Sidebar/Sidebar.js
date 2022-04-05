import {NavLink, useLocation} from "react-router-dom";
import style from "./sidebar.module.css"

export default function Home() {
  let location = useLocation().pathname
  return (<>
      <div className={style.container}>
        <h1 className={style.name}>Gabriel Garcia</h1>
        <nav className={style.nav}>
          <NavLink to={'/'}> <p className={location === '/' ? style.active : null}>H</p></NavLink>
          <NavLink to={'/about'}><p className={(location.includes('/about') || location.includes('skills'))  ? style.active : null}>A</p></NavLink>
          <NavLink to={'/projects'}><p className={location.includes('/projects') ? style.active : null}>P</p></NavLink>
          <NavLink to={'/contact'}><p className={location.includes('/contact') ? style.active : null}>C</p></NavLink>
        </nav>
      </div>
  </>)
}