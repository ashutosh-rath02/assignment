import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CenterScreen from "./CenterScreen";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
const Menus = [
  {
    title: "Home",
    src: "https://res.cloudinary.com/dhnkuonev/image/upload/v1712681882/Home_jfbmca.svg",
    link: "/",
  },
  {
    title: "Activities",
    src: "https://res.cloudinary.com/dhnkuonev/image/upload/v1712681881/Timer_q59uuv.svg",
    link: "/build",
  },
  {
    title: "Analytics",
    src: "https://res.cloudinary.com/dhnkuonev/image/upload/v1712681880/Chart_ngc5gc.svg",
    link: "/build",
  },
  {
    title: "Transformation",
    src: "https://res.cloudinary.com/dhnkuonev/image/upload/v1712681884/Rocket_lkhcsr.svg",
    link: "/build",
  },
  {
    title: "Library",
    src: "https://res.cloudinary.com/dhnkuonev/image/upload/v1712681882/library_wmstys.svg",
    link: "/build",
  },
  { title: "Settings", src: "settingsicon.svg", gap: true, link: "/build" },
  {
    title: "Logout",
    src: "https://res.cloudinary.com/dhnkuonev/image/upload/v1712681884/Logout_b9q3dq.svg",
    link: "/build",
  },
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
