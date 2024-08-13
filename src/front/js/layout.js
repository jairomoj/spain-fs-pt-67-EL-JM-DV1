import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Registro } from "./pages/registro";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import { User } from "./pages/user";
import { Product } from "./pages/product";
import Cart from "./pages/cart";
import Pay from "./pages/pay";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Details } from "./pages/details";
import DogCard from "./pages/DogCard";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Registro />} path="/registro" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<User />} path="/user" />
                        <Route element={<Product />} path="/products" />
                        <Route elementt={DogCard} path="/perros" />
                        <Route element={<Cart />} path="/cart" />
                        <Route element={<Pay />} path="/pay" />
                        <Route element={<Details />} path="/detail/:id_product" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
