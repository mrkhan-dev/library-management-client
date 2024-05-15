import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

const CategoryItem = () => {
  const {category} = useParams();
  const [cat, setCat] = useState([]);
  // console.log(cat);

  useEffect(() => {
    fetch(`https://shelfmaster-bdserver.vercel.app/booksCategory/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCat(data);
      });
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto">
      {cat.slice(0, 1).map((h1) => (
        <h1
          className="text-center text-2xl font-Poppins font-semibold mt-8 mb-6"
          key={h1._id}
        >
          {h1.category}
        </h1>
      ))}
      <div className="grid grid-cols-3">
        {cat.map((book) => (
          <div key={book._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-48 w-full" src={book.image} alt="Shoes" />
            </figure>
            <div className="mt-4">
              <div className="flex justify-between px-4">
                <h2 className="card-title">{book.name}</h2>
                <p>{book.category}</p>
              </div>
              <div className="flex justify-between px-4  gap-4 mt-4 items-center">
                <p> Author : {book.author}</p>
                <img
                  className="h-10 rounded-full w-10 bg-cover"
                  src={book.photo}
                  alt=""
                />
              </div>
              <div className="card-actions mt-4">
                <Link to={`/details/${book._id}`} className="w-full">
                  <button className="btn bg-gradient-to-r from-cyan-500 to-emerald-500 w-full text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;
