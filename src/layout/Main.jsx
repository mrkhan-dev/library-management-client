import {Outlet, useNavigation} from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer/Footer";
import {FallingLines} from "react-loader-spinner";

const Main = () => {
  const navigation = useNavigation();
  return (
    <div>
      <div className="h-24">
        <Nav />
      </div>
      {navigation.state === "loading" ? (
        <p className="flex justify-center items-center mt-48">
          <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel="falling-circles-loading"
          />
        </p>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

export default Main;
