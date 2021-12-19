import React from 'react'

function Home() {
    return (
        <div>
              <section className="home py-5 d-flex align-items-center" id="header">
                <div className="container text-light py-5"  data-aos="fade-right"> 
                    <h1 className="headline">Best <span className="home_text">Academic </span><br/>Research Platform For Academics</h1>
                    <p className="para para-light py-3">
                        We are reimagining how research is done in Africa and bringing home scientic standards from every part of the world in one platform. 
                        We are introducing virtual labs and agressive data driven research in Africa and hope you benefit.
                    </p>
                    <div className="d-flex align-items-center">
                        <p className="p-2"><i className="fas fa-laptop-house fa-lg"></i></p>
                        <p>Locate our centers</p>  
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="p-2"><i className="fas fa-wifi fa-lg"></i></p>
                        <p>Connect with us to setup R&D</p>  
                    </div>
                    <div className="my-3">
                        <a className="btn" href="#plans">Our Products</a>
                    </div>
                </div> 
             </section> 

        </div>
    )
}

export default Home
