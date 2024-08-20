import React, { useContext } from "react";
import "../../styles/home.css";
import { Jbtron } from "../component/Jbtron";
import { FindBusiness } from "../component/FindBusiness";
import { ShopBusiness } from "./ShopBusiness";
import { Shops } from "../component/Shops";
import { Reviews } from "../component/Reviews";
import { Footer } from "../component/Footer";
import { Navbar } from "../component/Navbar";
import {Hero} from "../component/Hero";
import {HeroEdit} from "/workspaces/VeganWorld_edits/src/front/js/component/HeroEdit.js";
import {HeroShop} from "../component/HeroShop.js";
import { HeroUsuario } from "../component/HeroUsuario.js";
import { HeroPremium } from "../component/HeroPremium.js";
import { Dashboard } from "/workspaces/VeganWorld_edits/src/front/js/component/Dashboard.js"


export const Home = () => {

	return (
		<div>
			
			<HeroShop />
			<HeroPremium />


			<Footer />


		</div>
	);
};