import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const [book, setBook] = useState({});
  const {id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/singleBook/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  }, [id]);

  const quantity = book.quantity;
  const quantityInt = parseInt(quantity);

  const handleSubmit = (e) => {
    e.preventDefault();

    quantityInt - 1;

    const form = e.target;
    const name = book.name;
    const category = book.category;
    const rating = parseInt(book.rating);
    const description = book.description;
    const author = book.author;
    const image = book.image;
    const email = book.email;
    const returnDate = form.date.value;

    const formData = {
      name,
      category,
      rating,
      author,
      description,
      image,
      email,
      returnDate,
    };

    fetch("http://localhost:5000/borrowedBooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Successfully Borrowed",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto lg:flex gap-10 items-center">
      <div className="lg:w-1/2">
        <img src={book.image} alt="" />
      </div>
      <div>
        <h1 className="text-4xl font-Poppins font-semibold">{book.name}</h1>
        <p className="mt-2 text-xl font-semibold font-Poppins">
          Category : {book.category}
        </p>
        <p> Rating : {book.rating}</p>
        <p> Description {book.description}</p>
        <p> Quantity : {book.quantity}</p>
        <p> Author : {book.author}</p>
        {/* modal */}
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn bg-gradient-to-r from-cyan-500 to-emerald-500 text-white"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Borrow
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={book.author}
                  disabled
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={book.email}
                  disabled
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Return date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-Poppins">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Details;
