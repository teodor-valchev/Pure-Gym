import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import AboutUs from "./components/about-us/AboutUs";
import Classes from "./components/Classes";
import TrainingReview from "./components/TrainingReview";
import ExpertsTeam from "./components/ExpertsTeam";
import Footer from "./components/footer/Footer";
import Register from "./components/users/register/Register";
import Path from "./lib/paths";
import Login from "./components/users/login/Login";
import AuthProvider from "./context/authContext";
import Logout from "./components/users/logout/Logout";
import PageNotFound from "./components/404/404";

function App() {
    return (
        <AuthProvider>
            <Navigation />
            <Routes>
                <Route path={Path.Home} element={<Home />}></Route>
                <Route path={Path.About} element={<AboutUs />}></Route>

                <Route path={Path.Register} element={<Register />}></Route>
                <Route path={Path.Login} element={<Login />}></Route>
                <Route path={Path.Logout} element={<Logout />}></Route>

                <Route path={Path.Classes} element={<Classes />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>

                {/* 
                        
                        <TrainingReview />
                        <ExpertsTeam />
                        */}
            </Routes>

            <Footer />
        </AuthProvider>
    );
}

export default App;
