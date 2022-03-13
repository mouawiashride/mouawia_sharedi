import loadable from '@loadable/component'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from './components/Slider';
const About = loadable(() => import('./components/About'));
const Card = loadable(() => import('./components/Card'));
const Contact = loadable(() => import('./components/Contact'));
const Footer = loadable(() => import('./components/Footer'));
const Skills = loadable(() => import('./components/Skills'));
const Rate = loadable(() => import('./components/Rate'));

function App() {

  useEffect(()=>{
    AOS.init({
      once:false
    });
  })

  return (
    <div className='min-h-screen py-10   bg-gray-100'>
        <div data-aos="fade-down" data-aos-duration='800'>
          <Card/>
        </div>
        <div data-aos="fade-down" data-aos-duration='800'>
          <Slider/>
        </div>
        <div data-aos="fade-up" data-aos-duration='800' data-aos-dalay='400'>
          <About/>
        </div>
        <div data-aos="fade-up" data-aos-duration='800' data-aos-dalay='400'>
        <Skills/>
        </div>
        <div data-aos="fade-up" data-aos-duration='800' data-aos-dalay='400'>
        <Contact/>
        </div>
        <div data-aos="fade-up" data-aos-duration='800' data-aos-dalay='400'>
        <Rate/>
        </div>
        <div data-aos="fade-up" data-aos-duration='800' data-aos-dalay='400'>
        <Footer/>
        </div>
    </div>
  );
}

export default App;
