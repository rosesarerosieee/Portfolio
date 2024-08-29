import Hero from './components/hero';
import Header from './components/header';
import Intro from './components/introduction';
import Socials from './components/socials';
import { Element } from 'react-scroll';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
    <>
    <Header/>

    <div className='mt-[12vh]'>

      <Element name='intro'>
        <Intro/>
      </Element>
  
      <Element name="hero">
        <Hero/> 
      </Element>

      <Element name='socials'>
        <Socials />
      </Element>
      
    </div>
   
    </>
    </Router>
  );
}

export default App;
