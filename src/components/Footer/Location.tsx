import React from 'react'

const Location = () => {
    return (
        <div>
            <section className="location text-light py-5">
                <div className="container" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-lg-3 d-flex align-items-center">
                            <div className="p-2"><i className="far fa-map fa-3x"></i></div>
                            <div className="ms-2">
                                <h6>ADDRESS</h6>
                                <p>Teuku Umar ST. 1919</p>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex align-items-center" >
                            <div className="p-2"><i className="fas fa-mobile-alt fa-3x"></i></div>
                            <div className="ms-2">
                                <h6>CALL FOR QUERY</h6>
                                <p>(800) 265  216 2020</p>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex align-items-center" >
                            <div className="p-2"><i className="far fa-envelope fa-3x"></i></div>
                            <div className="ms-2">
                                <h6>SEND US MESSAGE</h6>
                                <p>infodemofile@example.com</p>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex align-items-center" >
                            <div className="p-2"><i className="far fa-clock fa-3x"></i></div>
                            <div className="ms-2">
                                <h6>OPENING HOURS</h6>
                                <p>09:00 AM - 18:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </section> 
        </div>
    )
}

export default Location
