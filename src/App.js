import './App.css';
import Navbar from './layouts/Navbar';
import { useState } from 'react';
import Drawer from './layouts/Drawer';
import Home from './pages/home/Home';
import Skills from './pages/skills/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {

  const [state, setState] = useState(false);


  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  return (
    <div className="App">
      <Navbar toggleDrawer={toggleDrawer}/>
      <Drawer drawer={state} toggleDrawer={toggleDrawer}/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
