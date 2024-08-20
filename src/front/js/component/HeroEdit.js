import React from 'react'
import BusinessLogo1 from "/workspaces/VeganWorld_edits/src/front/img/BusinessLogo1.png"

export const HeroEdit = () => {
  return (
            
        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold lh-1 text-body-emphasis">BUSINESS NAME</h1>
                <p className="lead">Business description and Adress</p>
                </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img className="rounded-lg-3" src={BusinessLogo1} alt="" width="720"/>
            </div>
            </div>

            <div className="b-example-divider">
                <br />
            </div>

                    <div className="d-grid d-md-flex justify-content-center mb-4 mb-lg-3">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Pictures</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4 me-md-2 fw-bold">Menu</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4 me-md-2 fw-bold">Location</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4 me-md-2 fw-bold">Feedbacks</button>
                    </div>
        </div>
        
  )
};

