import './App.css';
import { Routes,Route, } from 'react-router-dom'
import Home from "./Components/Home/Home";
import Container from "./Components/Container/Container"
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import SkillTable from "./Components/About/SkillTable/SkillTable";
import Academies from "./Components/About/Academies/Academies";
import Skills from "./Components/About/Skills/Skills";
import Softskills from "./Components/About/Softskills/Softskills";
import Hobbies from "./Components/About/Hobbies/Hobbies";

function App() {
  return (
      <div className="App">
    <Routes>
      <Route path={'/'} element={<Container/>}>
        <Route index element={<Home/>}/>
        <Route path={'projects'} element={<Projects/>}/>
        <Route path={'about'} element={<About/>}/>
        <Route path={'contact'} element={<Contact/>}/>
        <Route path={'skills'} element={<SkillTable/>}>
          <Route path={'academy'} element={<Academies/>}/>
          <Route path={'technical'} element={<Skills/>}/>
          <Route path={'soft'} element={<Softskills/>}/>
          <Route path={'hobbies'} element={<Hobbies/>}/>
        </Route>
      </Route>
    </Routes>
      </div>
  );
}

export default App;
