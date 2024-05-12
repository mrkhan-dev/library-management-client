import UseAuth from "../../hooks/UseAuth";

const AddBook = () => {
  const {user} = UseAuth();

  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const image = form.image.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const author = user.displayName;
    const email = user.email;

    const formData = {name, category, image, quantity, rating, author, email};
    console.log(formData);
  };

  return (
    <div className="max-w-7xl mx-auto border mt-12 rounded-lg pb-10 px-10">
      <h2 className="text-center text-3xl font-Poppins mt-8">Add New Book</h2>
      <form onSubmit={handleAddBook}>
        <div className="lg:flex justify-between gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Book Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              type="text"
              name="category"
              className="select select-bordered w-full "
            >
              <option disabled selected>
                Books Category
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Photo URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="lg:flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              min={1}
              max={5}
              name="rating"
              placeholder="rating"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <textarea
            type="text"
            placeholder="Short description"
            name="description"
            className="input input-bordered h-28"
          />
        </div>
        <div className="form-control">
          <input
            className="bg-cyan-500 text-white input mt-4 text-lg cursor-pointer"
            type="submit"
            value="Add"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
