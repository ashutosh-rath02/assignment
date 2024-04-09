import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CenterScreen from "./CenterScreen";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
const Menus = [
  { title: "Home", src: "Home.svg" },
  { title: "Activities", src: "Timer.svg" },
  { title: "Analytics", src: "Chart.svg" },
  { title: "Transformation", src: "Rocket.svg" },
  { title: "Library", src: "library.svg" },
  { title: "Settings", src: "settingsicon.svg", gap: true },
  { title: "Logout", src: "Logout.svg" },
];

const Home = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar menus={Menus} />
        <Routes>
          <Route path="/" element={<CenterScreen />} />
          <Route path="/build" element={<SearchPage />} />
          <Route path="/activities" element={<div>Activities Page</div>} />
          <Route path="/analytics" element={<div>Analytics Page</div>} />
          <Route
            path="/transformation"
            element={<div>Transformation Page</div>}
          />
          <Route path="/library" element={<div>Library Page</div>} />
          <Route path="/settings" element={<div>Settings Page</div>} />
          <Route path="/logout" element={<div>Logout Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
