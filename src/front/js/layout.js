import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop.js";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { AddProduct } from "./pages/AddProduct";
import { ShopBusiness } from "./pages/ShopBusiness";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar.js";
import { ShopClient } from "./pages/ShopClient";
import { DetailView } from "./pages/DetailView";
import { Footer } from "./component/Footer.js"

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<AddProduct />} path="/add_product" />
                        <Route element={<ShopBusiness />} path="/shop_business" />
                        <Route element={<ShopClient />} path="/shop_client" />
                        <Route element={<DetailView />} path="/detail_view" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
