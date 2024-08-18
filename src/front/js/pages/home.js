import React, { useContext } from "react";
import "../../styles/home.css";
import { Jbtron } from "../component/Jbtron";
import { FindBusiness } from "../component/FindBusiness";
import { Shops } from "../component/Shops";
import { Reviews } from "../component/Reviews";
import { Footer } from "../component/Footer";

export const Home = () => {

	return (
		<div>
			<Jbtron />
			<Shops />
			<FindBusiness />
			<Reviews />
			<Footer />
		</div>
	);
};