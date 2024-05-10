import {Helmet} from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | ShelfMaster</title>
      </Helmet>
      <h1 className="text-7xl text-center ">HomePage</h1>
    </div>
  );
};

export default Home;
