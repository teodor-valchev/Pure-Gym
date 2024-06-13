import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import AboutUs from "./components/about-us/AboutUs";
import Classes from "./components/Classes";
import TrainingReview from "./components/TrainingReview";
import ExpertsTeam from "./components/ExpertsTeam";
import Footer from "./components/footer/Footer";
import Register from "./components/users/register/Register";
import Path from "./paths";

function App() {
    return (
        <>
            <Navigation />

            <Routes>
                <Route path={Path.Home} element={<Home />}></Route>
                <Route path={Path.About} element={<AboutUs />}></Route>
                <Route path={Path.Register} element={<Register />}></Route>

                {/* 
                        <Classes />
                        <TrainingReview />
                        <ExpertsTeam />
                        */}
            </Routes>

            <Footer />
        </>
    );
}

export default App;
