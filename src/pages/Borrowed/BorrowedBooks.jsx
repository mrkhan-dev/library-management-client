import {useEffect, useState} from "react";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [remove, setRemove] = useState(false);
  const {user} = UseAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/borrowedBooks/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBorrowedBooks(data);
      });
  }, [user, remove]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteBooks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Returned!",
                text: "Your book has been returned.",
                icon: "success",
              });
              setRemove(!remove);
            }
          });
      }
    });
  };
  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto">
      {borrowedBooks.map((books) => (
        <div key={books.id}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-56 w-full" src={books.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{books.name}</h2>
              <p>Category : {books.category}</p>
              <p>Borrowed Date : {books.borrowedDate}</p>
              <p>Return Date : {books.returnDate}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleDelete(books._id)}
                  className="btn bg-gradient-to-r from-cyan-500 text-white to-emerald-500"
                >
                  Return
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BorrowedBooks;
