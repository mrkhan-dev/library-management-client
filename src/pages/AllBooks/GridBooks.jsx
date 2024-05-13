import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const GridBooks = ({books}) => {
  const {name, category, image, description, author} = books;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 py-8 bg-[#f3f3f3]">
        <img src={image} alt="Shoes" className=" h-64 bg-cover " />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center font-Poppins">
          <h2 className="card-title">{name}</h2>
          <p className="bg-emerald-50 rounded-xl ml-32  text-emerald-500 font-semibold">
            {category}
          </p>
        </div>
        <p>{description}</p>
        <div className="card-actions flex justify-between items-center">
          <Link to={`/updateBook/${books._id}`}>
            <button className="btn bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-Poppins ">
              Update
            </button>
          </Link>
          <p className="ml-12 font-Poppins">{author}</p>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GridBooks.propTypes = {
  books: PropTypes.node,
};

export default GridBooks;
