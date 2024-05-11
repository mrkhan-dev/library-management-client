import {Outlet} from "react-router-dom";
import Nav from "../components/Nav";

const Main = () => {
  return (
    <div>
      <div className="h-24">
        <Nav />
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
