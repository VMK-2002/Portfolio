import React from "react";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ScrollThrough from "./components/ScrollThrough";
import Qualification from "./components/Qualifucation";
import Project from "./components/Project";


function App() {

  return (
    <div >
      <div>
        <Navigation />
      </div>
    
      <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
        <div style={{width:"100%"}} className="align-items-center">  
         
          <div>
            <Home />
          </div>
        
          <ScrollThrough />

          <div style={{background: 'rgb(238, 217, 251) '}}>
            <About/>
          </div>
        
          <div style={{background: 'white'}}>
            <Project />
          </div>
          
          <div style={{background: 'rgb(238, 217, 251)'}}>
            <Skills />
          </div>
      
          <div style={{background: 'rgb(247, 237, 248)'}}>
            <Qualification />
          </div>

          <div style={{background: 'rgb(238, 217, 251)'}}>
            <Contact />
          </div>
     
        </div >
      </ThemeProvider>
          
      <div >
        <Footer />
      </div>
    </div>
  )
}

export default App
