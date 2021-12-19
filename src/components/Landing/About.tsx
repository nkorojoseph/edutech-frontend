import React from 'react'
import about from '../../assets/images/about.jpg'

export const About = () => {
    return (
        <div>
             <section className="about d-flex align-items-center text-light py-5" id="about">
                <div className="container" >
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-7" data-aos="fade-right">
                            <p>ABOUT US</p>
                            <h1>Ever thought of completing  <br/>Research with so much ease? </h1>
                            <p className="py-2 para-light">To help .......</p>
                            <p className="py-2 para-light">We have .....</p>

                            <div className="my-3">
                                <a className="btn" href="#your-link">Learn More</a>
                            </div>
                        </div>
                        <div className="col-lg-5 text-center py-4 py-sm-0" data-aos="fade-down"> 
                            <img className="img-fluid" src={about} alt="about" />
                        </div>
                    </div> 
                </div> 
            </section>
        </div>
    )
}
