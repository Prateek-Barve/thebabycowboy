import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="site-layout">
      <div className="site-layout__container">
        <Navbar />

        <main className="site-layout__content">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;