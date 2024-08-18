import React from "react";
import { Link } from "react-router-dom";
import ImgBusiness from './/../../img/businesspic.png'
import AvatarImg from './/../../img/avatarImg.png'
import {Reviews} from '/workspaces/VeganWorld_edits/src/front/js/component/Reviews.js'
import {BotonDescuento} from '/workspaces/VeganWorld_edits/src/front/js/component/BotonDescuento.js'
import { WriteFeedback } from "../component/WriteFeedback";

export const ShopBusiness = () => {

  
    return (


        <div className="jumbo_business_noreg">
            <div className="container d-flex-column">    
                <img className="business_noreg_logo" href="#" src={ImgBusiness} />
                <h1 className="business_noreg_nombre">Nombre Negocio</h1>
                <h2 className="business_noreg_adress">Av. Adress of business nº1 </h2>
            </div>



            <div className="business_noreg_cards">
            

                <ul className="nav nav-pills mb-3 justify-content-center mt-5" id="pills-tab" role="tablist">
                     <li className="nav-item" role="presentation">
                        <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true">
                        <i className="fa-regular fa-calendar-days"></i>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false">
                        <i className="fa-solid fa-square"></i>
                        </button>
                    </li>
                </ul>



                <div className="tab-content" id="pills-tabContent">
				<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                
                <div className="baseCard mx-3 mb-4">
                        <div className="cards_business_noreg">
                            <div className="card-body">
                                <img className="card-img" src="https://http2.mlstatic.com/D_NQ_NP_908007-MLB53544575392_012023-O.webp" alt=""></img>
                                <h5 className="card-title">FOTO DE MENU</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btnCards">Go somewhere</a>
                            </div>
                        </div>
                </div>
                
                <div className="baseCard mx-3 mb-4">
                        <div className="cards_business_noreg">
                            <div className="card-body">
                                <img className="card-img" src="https://http2.mlstatic.com/D_NQ_NP_908007-MLB53544575392_012023-O.webp" alt=""></img>
                                <h5 className="card-title">FOTO DE MENU</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btnCards">Go somewhere</a>
                            </div>
                        </div>
                </div>

                <div className="baseCard mx-3 mb-4">
                        <div className="cards_business_noreg">
                            <div className="card-body">
                                <img className="card-img" src="https://http2.mlstatic.com/D_NQ_NP_908007-MLB53544575392_012023-O.webp" alt=""></img>
                                <h5 className="card-title">FOTO DE MENU</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btnCards">Go somewhere</a>
                            </div>
                        </div>
                </div>

                <div className="baseCard mx-3 mb-4">
                        <div className="cards_business_noreg">
                            <div className="card-body">
                                <img className="card-img" src="https://http2.mlstatic.com/D_NQ_NP_908007-MLB53544575392_012023-O.webp" alt=""></img>
                                <h5 className="card-title">FOTO DE MENU</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btnCards">Go somewhere</a>
                            </div>
                        </div>
                </div>

                <div className="boton_descuento_business_noreg">
                <BotonDescuento />
                </div>

			</div>

			<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
					<Reviews />
                    <WriteFeedback />
                    <br/>
				</div>
            </div>
        </div>
</div>


    )
};