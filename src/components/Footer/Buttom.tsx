import React from 'react'

const Buttom = () => {
    return (
        <div>
            
            <div className="bottom py-2 text-light" >
                <div className="container d-flex justify-content-between">
                    <div>
                        <p>Relight  © Nkoro Joseph Ahamefula</p>
                    </div>
                    <div>
                        <i className="fab fa-cc-visa fa-lg p-1"></i>
                        <i className="fab fa-cc-mastercard fa-lg p-1"></i>
                        <i className="fab fa-cc-paypal fa-lg p-1"></i>
                        <i className="fab fa-cc-amazon-pay fa-lg p-1"></i>
                    </div>
                </div> 
            </div> 

            <button onClick= {()=>"topFunction()"} id="myBtn">
                <img src="assets/images/up-arrow.png" alt="alternative" />
            </button>
            
        </div>
    )
}

export default Buttom
