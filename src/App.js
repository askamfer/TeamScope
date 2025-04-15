import "./App.css";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import PageNotFoundView from "./components/PageNotFoundView";
import TeamDetailsView from "./components/TeamDetailsView";
import LeagueSpecificView from "./components/LeagueSpecificView";
import VenueDetailsView from "./components/VenueDetailsView";
import AboutView from "./components/AboutView";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/MLB" element={<LeagueSpecificView league="MLB" />} />
        <Route path="/NFL" element={<LeagueSpecificView league="NFL" />} />
        <Route path="/NBA" element={<LeagueSpecificView league="NBA" />} />
        <Route path="/NHL" element={<LeagueSpecificView league="NHL" />} />
        <Route path="/teams/:id" element={<TeamDetailsView />} />
        <Route path="/venues/:id" element={<VenueDetailsView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="*" element={<PageNotFoundView />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
