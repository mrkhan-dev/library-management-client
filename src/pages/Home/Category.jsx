import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Category = () => {
  const [booksCategory, setBooksCategory] = useState([]);

  useEffect(() => {
    // fetch("https://shelfmaster-bdserver.vercel.app/allBooks")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setBooksCategory(data);
    //   });
    axios
      .get("https://shelfmaster-bdserver.vercel.app/categoryBooks")
      .then((result) => {
        setBooksCategory(result.data);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-center text-xl mt-20 font-Poppins">Category</p>
      <p className="text-center text-4xl mt-2 font-Poppins">
        Choose Your Category
      </p>
      <div className="grid grid-cols-4 gap-8 mt-8">
        {booksCategory.slice(0, 4).map((book) => (
          <div key={book._id}>
            <Link to={`/categoryItem/${book.category}`}>
              <div className="card card-compact  bg-base-100 shadow-xl ">
                <figure>
                  <img
                    className="h-44 w-full relative"
                    src={book.image}
                    alt="Shoes"
                  />
                </figure>
                <p className="absolute bg-gradient-to-r from-cyan-500 to-emerald-500  text-white  mt-36 w-full text-center text-3xl font-Poppins">
                  {book.category}
                </p>
                <div className="card-body">
                  <h2 className="card-title">{book.name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
