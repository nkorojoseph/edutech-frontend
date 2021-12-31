import React from 'react'
import { About } from './About';
import Home from './Home';
import Information from './Information';
import OurWork from './OurWork';
import Plans from './Plans';
import Services from './Services';
import Testimonial from './Testimonial';
import NewsLetter from './NewsLetter';

 const  index =() =>{
    return (
        <div>
            
            <Home></Home>
            <Information></Information>
            <About></About>
            <Services></Services>
            {/* <Plans></Plans> */}
            <OurWork></OurWork>
            <Testimonial></Testimonial>
           
        </div>
    )
}

export  {index as LandingIndex}