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
                                <p>4 Abebe Arito Lane Ajah, Lagos</p>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex align-items-center" >
                            <div className="p-2"><i className="fas fa-mobile-alt fa-3x"></i></div>
                            <div className="ms-2">
                                <h6>CALL FOR QUERY</h6>
                                <p>(070) 3847  2288</p>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex align-items-center" >
                            <div className="p-2"><i className="far fa-envelope fa-3x"></i></div>
                            <div className="ms-2">
                                <h6>SEND US MESSAGE</h6>
                                <p>nkorojoseph@yahoo.com</p>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex align-items-center" >
                            <div className="p-2"><i className="far fa-clock fa-3x"></i></div>
                            <div className="ms-2">
                                <h6>OPENING HOURS</h6>
                                <p>24hours/day</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </section> 
        </div>
    )
}

export default Location
