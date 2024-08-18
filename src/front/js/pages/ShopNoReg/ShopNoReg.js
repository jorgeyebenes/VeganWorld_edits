import React from 'react';
import { Navbar } from '../../component/NavBar/NavBar.js';
import './shopnoreg.css';
import { Footer } from '../../component/Footer/Footer.js';

const ShopNoReg = () => {
  return (
    <div className="shop_noreg_vistappal">
        
        <div className="shop_noreg_body">
            <div className="shop_noreg_body_cards">
                <Card1 /> <Card2 /> <Card3 /> <Card4 />

                <button>GET 20% DISCOUNT -ONLY PREMIUM-</button>
            </div>

            <div className="shop_noreg_body_feedbacks">
                <Feedback1 /> <Feedback2 /> <Feedback3 /> <Feedback4 />
                <button>WRITE FEEDBACK -ONLY PREMIUM-</button>
            </div>

            <div className="shop_noreg_body_callus">
                <modal>CALL US!</modal>
            </div>

            <div className="shop_nored_body_buttons">
                <button>GET 20% DISCOUNT</button>
                <button>GO PREMIUM</button>
            </div>
        </div>

        <div className="shop_noreg_footer">
            <Footer />
        </div>



    </div>
  )
}

export default ShopNoReg
