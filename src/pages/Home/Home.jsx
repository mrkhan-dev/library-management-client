import {Helmet} from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Home | ShelfMaster</title>
      </Helmet>
      <Banner />
      <Category />
    </div>
  );
};

export default Home;
