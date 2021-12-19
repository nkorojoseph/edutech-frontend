import React from 'react'
import testimonial from '../../assets/images/testimonial-1.jpg'
import testimonial2 from '../../assets/images/testimonial-2.jpg'
import testimonial3 from '../../assets/images/testimonial-3.jpg'
import testimonial4 from '../../assets/images/testimonial-4.jpg'

const Testimonial = () => {
    return (
        <div>
            <div className="slider-1 testimonial text-light d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="text-center w-lg-75 m-auto pb-4">
                            <p>TESTIMONIALS</p>
                            <h2 className="py-2">What Our Clients Says</h2>
                            <p className="para-light">Long writup</p>
                        </div>
                    </div> 
                    <div className="row p-2" data-aos="zoom-in">
                        <div className="col-lg-12">

                            
                            <div className="slider-container">
                                <div className="swiper-container card-slider">
                                    <div className="swiper-wrapper">
                                        
                                        
                                        <div className="swiper-slide">
                                            <div className="testimonial-card p-4">
                                                <p>Short Writeup</p>
                                            
                                                <div className="d-flex pt-4">
                                                    <div>
                                                        <img className="avatar" src={testimonial} alt="testimonial" />
                                                    </div>
                                                    <div className="ms-3 pt-2">
                                                        <h6>Marlene Visconte</h6>
                                                        <p>General Manager - Scouter</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        
                                        
                                        <div className="swiper-slide">
                                            <div className="testimonial-card p-4">
                                                <p>Short Writeup</p>
                                                <div className="d-flex pt-4">
                                                    <div>
                                                        <img className="avatar" src={testimonial2} alt="testimonial" />
                                                    </div>
                                                    <div className="ms-3 pt-2">
                                                        <h6>John Spiker</h6>
                                                        <p>Team Leader - Vanquish</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                
                                        
                                        <div className="swiper-slide">
                                            <div className="testimonial-card p-4">
                                                <p>Short Writeup</p>
                                                <div className="d-flex pt-4">
                                                    <div>
                                                        <img className="avatar" src={testimonial3} alt="testimonial" />
                                                    </div>
                                                    <div className="ms-3 pt-2">
                                                        <h6>Stella Virtuoso</h6>
                                                        <p>Design Chief - Upscale</p>
                                                    </div>
                                                </div>
                                            </div>      
                                        </div> 
                                    
                                        <div className="swiper-slide">
                                            <div className="testimonial-card p-4">
                                                <p>Short Writeup</p>
                                                <div className="d-flex pt-4">
                                                    <div>
                                                        <img className="avatar" src={testimonial4} alt="testimonial"/>
                                                    </div>
                                                    <div className="ms-3 pt-2">
                                                        <p>Mike tim</p>
                                                        <p>Investor - TechGroww</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                       
                                    </div> 
                
                                    <div className="swiper-button-next"></div>
                                    <div className="swiper-button-prev"></div>
                                   
                                </div> 
                            </div> 
                            

                        </div> 
                    </div> 
                </div> 
            </div>
        </div>
    )
}

export default Testimonial
