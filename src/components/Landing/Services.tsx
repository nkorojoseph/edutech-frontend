import React from 'react'

const Services = () => {
    return (
        <div>
            <section className="services d-flex align-items-center py-5" id="services">
                <div className="container text-light">
                    <div className="text-center pb-4" >
                        <p>OUR SERVICES</p> 
                        <h2 className="py-2">Explore unlimited possibilities</h2>
                        <p className="para-light">Long Write up</p>
                    </div>
                    <div className="row gy-4 py-2" data-aos="zoom-in">
                        <div className="col-lg-4">
                            <div className="card bg-transparent">
                                <i className="fas fa-home fa-2x"></i>
                                <h4 className="py-2">Paper Review</h4>
                                <p className="para-light">Short Writeup</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card bg-transparent">
                                <i className="fas fa-wifi fa-2x"></i>
                                <h4 className="py-2"> Paper publication</h4>
                                <p className="para-light">Short Writeup</p>
                            </div>                    
                        </div>
                        <div className="col-lg-4">
                            <div className="card bg-transparent">
                                <i className="fas fa-phone fa-2x"></i>
                                <h4 className="py-2">Virtual labs</h4>
                                <p className="para-light">Short Writeup</p>
                            </div>                    
                        </div>
                        <div className="col-lg-4">
                            <div className="card bg-transparent">
                                <i className="fas fa-mobile fa-2x"></i>
                                <h4 className="py-2">Editorial Services</h4>
                                <p className="para-light">Short Writeup</p>
                            </div>                    
                        </div>
                        <div className="col-lg-4">
                            <div className="card bg-transparent">
                                <i className="fas fa-home fa-2x"></i>
                                <h4 className="py-2">Fund a research</h4>
                                <p className="para-light">Short Writeup</p>
                            </div>                    
                        </div>
                        <div className="col-lg-4">
                            <div className="card bg-transparent">
                                <i className="fas fa-tv fa-2x"></i>
                                <h4 className="py-2">Cross institutional plagiarism</h4>
                                <p className="para-light">Short Writeup</p>
                            </div>                    
                        </div>
                    </div> 
                </div> 
            </section>
        </div>
    )
}

export default Services
