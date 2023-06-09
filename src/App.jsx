import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Deco from "./pages/deco";
import HomeStaging from "./pages/homeStaging";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
import About from "./pages/about";
import ScrollTopButton from "./components/Button/ScrollTopButton";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/décoration-d'intérieur" element={<Deco />} />
                <Route path="/home-staging" element={<HomeStaging />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ScrollTopButton />
        </BrowserRouter>
    );
};

export default App;
