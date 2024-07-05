import { Routes, Route } from "react-router-dom";

import Path from "./lib/paths";
import AuthProvider from "./context/authContext";
import AuthGuard from "./guards/AuthGuards";

import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import AboutUs from "./components/about-us/AboutUs";
import SearchClass from "./components/search/SearchClass";

import Register from "./components/users/register/Register";
import Login from "./components/users/login/Login";
import Logout from "./components/users/logout/Logout";

import ClassCreate from "./components/classes/class-create/ClassCreate";
import ClassList from "./components/classes/class-list/ClassList";
import ClassDetails from "./components/classes/class-detail/ClassDetails";
import ClassEdit from "./components/classes/class-edit/ClassEdit";

import Footer from "./components/footer/Footer";
import PageNotFound from "./components/404/404";


function App() {
    return (
        <AuthProvider>
            <Navigation />
            <Routes>
                <Route path={Path.Home} element={<Home />}></Route>
                <Route path={Path.About} element={<AboutUs />}></Route>
                <Route path={Path.SearchClass} element={<SearchClass />}></Route>

                <Route path={Path.Register} element={<Register />}></Route>
                <Route path={Path.Login} element={<Login />}></Route>

                <Route element={<AuthGuard />}>
                    <Route path={Path.Logout} element={<Logout />}></Route>
                    <Route
                        path={Path["Class_Create"]}
                        element={<ClassCreate />}
                    ></Route>
                    <Route
                        path={Path.ClassEdit}
                        element={<ClassEdit />}
                    ></Route>
                </Route>

                <Route path={Path.Classes} element={<ClassList />}></Route>
                <Route
                    path={Path.ClassDetails}
                    element={<ClassDetails />}
                ></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>

            <Footer />
        </AuthProvider>
    );
}

export default App;
