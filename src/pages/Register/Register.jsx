import {useState} from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

const Register = () => {
  const [regError, setRegError] = useState();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    const {name, email, password, photo} = data;

    if (password.length < 6) {
      setRegError("Password must be 6 character or longer");
      return;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+[\]{}\\|;:'",.<>?/]).{6,}$/.test(
        password
      )
    ) {
      setRegError("password must be uppercase, lowercase & special character");
      return;
    }
    setRegError("");
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center max-w-7xl mx-auto ">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden   rounded-lg shadow-lg  lg:max-w-7xl lg:h-[720px]">
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: `url('https://i.ibb.co/NNFnd2D/NC5wbmc.png')`,
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-10 sm:h-10"
              src="https://i.ibb.co/xMkdPYP/business-3d-red-opened-book.png"
              alt=""
            />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 ">
            Welcome back!
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mt-2">
              <label className="label">
                <span className="text-lg text-gray-600">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", {required: true})}
              />
              {errors.name && (
                <span className="text-[#FF900E] text-sm mt-1 ml-1">
                  This field is required!
                </span>
              )}
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="text-lg text-gray-600">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                {...register("email", {required: true})}
              />
              {errors.email && (
                <span className="text-[#FF900E] text-sm mt-1 ml-1">
                  This field is required!
                </span>
              )}
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="text-lg text-gray-600">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                {...register("photo")}
              />
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="text-lg text-gray-600">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                {...register("password", {required: true})}
              />
              {errors.password && (
                <span className="text-[#FF900E] text-sm mt-1 ml-1">
                  This field is required!
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-emerald-500 text-white hover:bg-cyan-500">
                Sign Up
              </button>
            </div>
          </form>
          {regError && (
            <p className="text-center text-sm mt-2 text-[#FF900E] mb-3">
              {regError}
            </p>
          )}
          <div className="text-lg mt-8 text-right  text-gray-500 ">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-cyan-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
