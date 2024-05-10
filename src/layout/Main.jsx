import {Outlet} from "react-router-dom";
import Nav from "../components/Nav";

const Main = () => {
  return (
    <div>
      <div className="h-20">
        <Nav />
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
