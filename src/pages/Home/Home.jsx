import {Helmet} from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category";
import MustRead from "./MustRead/MustRead";
import About from "./About/About";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Home | ShelfMaster</title>
      </Helmet>
      <Banner />
      <About />
      <Category />
      <MustRead />
    </div>
  );
};

export default Home;
