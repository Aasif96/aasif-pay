import React from 'react'

const Header = () => {
    return (
        <>
         <header>
            <section className="container main-hero-container">
             <div className="row">
              <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-star order-lg-first order-last">
                <h1 className="display-2">
                   Online Payment Made <br/>Easy For You. 
                </h1>
                <p className="main-hero-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci voluptatum corrupti accusamus qui eius, totam dignissimos hic quis veniam expedita fugit quasi incidunt blanditiis repellendus optio facere beatae dolore illo.
                </p>
                <h3>Get Early Access For You</h3>
                <div className="input-group mt-3">
                   <input type="text" className="rounded-pill w-75 w-lg-75 me-3 p-2 form-control-text" placeholder="Enter Your Email"/>
                   <div className="input-group-button">
                       Get it now 
                    </div> 
                </div>
                </div>

                {/* main header right side */}
              <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first">
                  <img src="./images/hero1.jpg" className="img-fluid" alt="" srcset=""/>
                  <img src="./images/hero2.jpg" className="img-fluid main-hero-img2" alt="" srcset=""/>
                  </div>
             </div>
            
            </section>
          </header>   
        </>
    )
}

export default Header
