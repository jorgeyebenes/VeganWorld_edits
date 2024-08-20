import React from 'react'
import BusinessLogo1 from "/workspaces/VeganWorld_edits/src/front/img/BusinessLogo1.png"

export const Hero = () => {
  return (

        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src={BusinessLogo1} alt="" width="150" height="150"/>
            <h1 className="display-5 fw-bold text-body-emphasis">Business Name</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Description of the Business and Adress</p>

            </div>

                <div className="b-example-divider"></div>
                
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

                <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>

            </div>

        </div>
  )
}


