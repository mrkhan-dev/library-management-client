import {useEffect, useState} from "react";

const ListBooks = () => {
  const [tableBook, setTableBook] = useState([]);
  console.log(tableBook);

  useEffect(() => {
    fetch("http://localhost:5000/allBooks")
      .then((res) => res.json())
      .then((data) => {
        setTableBook(data);
      });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Author</th>
            <th>Book</th>
            <th>Category</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tableBook.map((book) => (
            <tr key={book._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={book?.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold"> {book.author} </div>
                  </div>
                </div>
              </td>
              <td>
                {book.name}
                <br />
              </td>
              <td>{book.category}</td>
              <th>
                <button className="btn bg-gradient-to-r from-emerald-500 to-cyan-500 text-white btn-xs">
                  Update
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListBooks;
