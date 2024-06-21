import React,{useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from './skills'
// import { Dimensions } from 'react-native'

export default function About() {
    useEffect(() => {
        AOS.init({
          duration: 2000,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        });
      }, []);
    const about=`Welcome to my profile, this is shivam avid product and tech enthu.`
    
    


return(
    <>
        <section id='about' className='about'>
            <div className='container'>
                <div className='section-title'>
                    <h2 >About</h2>
                </div>
                
                
                    <img  src="https://tripur3121.github.io/Tripur/assets/img/giphy.webp" className='img-fluid ' data-aos='fade-right'></img>
                
                    <div class="about-text">

                    <p class="fst-italic " data-aos='fade-left'>
                       {about}
                    </p>
                    </div>
                    
             <Skills/> 
                
                </div>
            
        </section>
    
    </>
)

}