import React from 'react';

import Typewriter from './Typewriter.js';

import Toggle from './toggle.js'
//import HomePhoto from '../image/home.jpg'







export default function Home() {
   


    const text1="Associate Product Manager"
    const text2="National Swimmer" 
    const text3="Trader"
    const text4="Designer"
    
    
    
    return(
        
        <section id="home"className="d-flex flex-column justify-content-center
             allign-items-center">
             
                
                <Toggle/>
                 <div className="home animated fadeIn">
                         <h1 ><strong>Shivam</strong></h1>
                         <h5>
                           <strong> <Typewriter class="typewriter" Text1={text1} Text2={text2} Text3={text3} Text4={text4}></Typewriter>  </strong>
                         </h5>

                </div> 
                 </section>
        
        
        
        
        )
    }

