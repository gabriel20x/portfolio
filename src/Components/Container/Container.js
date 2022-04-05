import Sidebar from './Sidebar/Sidebar'
import {Outlet} from "react-router";
import style from './container.module.css'

export default function Projects() {
  return (<>
    <div className={style.container}>
      <div className={style.sidebar}>
        <Sidebar/>
      </div>
      <div className={style.outlet}>
        <Outlet/>
      </div>
      <footer className={style.footer}>

      </footer>
    </div>
  </>)
}