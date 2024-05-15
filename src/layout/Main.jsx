import {Outlet} from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="h-24">
        <Nav />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
