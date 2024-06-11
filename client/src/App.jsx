import Header from "./components/Header";
import HeaderCoursel from "./components/HeaderCarouser";
import AboutUs from "./components/AboutUs";
import Classes from "./components/Classes";
import TrainingReview from "./components/TrainingReview";
import ExpertsTeam from "./components/ExpertsTeam";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div>
                <Header />
                <HeaderCoursel />
                <AboutUs />
                <Classes />
                <TrainingReview />
                <ExpertsTeam />
                <Footer />
            </div>
        </>
    );
}

export default App;
