import {CiBoxList, CiGrid41} from "react-icons/ci";

// import {useLoaderData} from "react-router-dom";
import GridBooks from "./GridBooks";
import ListBooks from "./ListBooks";
import {useEffect, useState} from "react";
import axios from "axios";

const AllBooks = () => {
  // const allBooks = useLoaderData();
  const [view, setView] = useState(false);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    // fetch("https://shelfmaster-bdserver.vercel.app/allBooks", {credentials: "include"})
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setAllBooks(data);
    //   });
    axios
      .get("https://shelfmaster-bdserver.vercel.app/allBooks", {
        withCredentials: true,
      })
      .then((result) => {
        setAllBooks(result.data);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-end mt-8 gap-4 text-3xl">
        <p className="text-xl font-Poppins text-gray-700">View by</p>
        {view === true ? (
          <button onClick={() => setView(false)}>
            <CiBoxList />
          </button>
        ) : (
          <button onClick={() => setView(true)}>
            <CiGrid41 />
          </button>
        )}
      </div>
      {view === true ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8">
          {allBooks.map((books) => (
            <GridBooks key={books._id} books={books}></GridBooks>
          ))}
        </div>
      ) : (
        <>
          <ListBooks />
        </>
      )}
    </div>
  );
};

export default AllBooks;
