import React from 'react'
import work from '../../assets/images/work.jpg'

const OurWork = () => {
    return (
        <div>
            <section className="work d-flex align-items-center py-5" >
                <div className="container-fluid text-light">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right">
                            <img className="img-fluid" src={work} alt="work"/>        
                        </div>
                        <div className="col-lg-5 d-flex align-items-center px-4 py-3" data-aos="">
                            <div className="row">
                                <div className="text-center text-lg-start py-4 pt-lg-0">
                                    <p>OUR WORK</p>
                                    <h2 className="py-2">What we have achieved so far</h2>
                                    <p className="para-light">Short Writeup.</p>
                                </div>
                                <div className="container" data-aos="fade-up">
                                    <div className="row g-5">
                                        <div className="col-6 text-start" >
                                            <i className="fas fa-briefcase fa-2x text-start"></i>
                                            <h2 className="purecounter" data-purecounter-start="0" data-purecounter-end="1258" data-purecounter-duration="3">1</h2>
                                            <p>Publications</p>
                                        </div>
                                        <div className="col-6" >
                                            <i className="fas fa-award fa-2x"></i>
                                            <h2 className="purecounter" data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="3">1</h2>
                                            <p>AWARDS</p>
                                        </div>
                                        <div className="col-6">
                                            <i className="fas fa-users fa-2x"></i>
                                            <h2 className="purecounter" data-purecounter-start="0" data-purecounter-end="1255" data-purecounter-duration="3">1</h2>
                                            <p>CUSTOMER ACTIVE</p>
                                        </div>
                                        <div className="col-6">
                                            <i className="fas fa-clock fa-2x"></i>
                                            <h2 className="purecounter" data-purecounter-start="0" data-purecounter-end="1157" data-purecounter-duration="3">1</h2>
                                            <p>Records</p>
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div>
            </section>
        </div>
    )
}

export default OurWork
