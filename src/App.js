import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState, useRef } from 'react';
import Projects from './components/Projects'
import Contact from './components/Contact'
import Header from './components/Header';
import Home from './components/Home';
import ProjectContent from './components/ProjectContent';
import { ContactForm } from './components/ContactForm';



function App() {

  const emailRef = useRef();

  const handleScroll = () => {
    emailRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const [component, setComponent] = useState(<Home />);
  const [componentToInsert, setComponentToInsert] = useState('Home');

  const handleContentClick = (project) => {
    setComponent(project)
  }

  const insert = (c) => {
    let toInsert;
    console.log(c.type)
    switch(c.type){
      case 'Project':
        toInsert = <ProjectContent name={c.name} description={c.description} movie={c.movie} comingSoon={c.comingSoon}/>
        break;
      default:
        toInsert = <Home />
        break;
    }
    setComponentToInsert(toInsert)
  }

  useEffect(()=>{
    insert(component)
  }, [component])


  return (
    <>
    <div className="App">
      
      <div className='Header-wrapper'>
          {componentToInsert}
        </div>

        <Bar />
        <div className='right-wrapper'>
          <Projects onChangeContent={handleContentClick}/>
          <Contact onScroll={handleScroll}/>
        </div> 
    </div>
    <div ref={emailRef} className='email-container'>
        <ContactForm />
    </div>
  </>

  );
}

export default App;


const Bar = () =>{
  return(<div className='bar hr'></div>)
}



