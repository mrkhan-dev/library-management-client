import {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import toast from "react-hot-toast";
import {LuUserCircle} from "react-icons/lu";

const Nav = () => {
  const [theme, setTheme] = useState("light");

  const {user, logOut} = UseAuth();

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("sunset");
    } else {
      setTheme("light");
    }
  };

  const handleLogout = () => {
    logOut().then(() => {
      toast.success("Log Out Successful");
    });
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const navLink = (
    <>
      <li>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-lg font-semibold px-5 py-3  text-emerald-500 border border-emerald-500"
              : "text-lg font-semibold "
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({isActive}) =>
              isActive
                ? "text-lg font-semibold px-5 py-3  text-emerald-500 border border-emerald-500"
                : "text-lg font-semibold "
            }
            to="addBooks"
          >
            Add Book
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            className={({isActive}) =>
              isActive
                ? "text-lg font-semibold px-5 py-3  text-emerald-500 border border-emerald-500"
                : "text-lg font-semibold "
            }
            to="borrowedBooks"
          >
            Borrowed Books
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            className={({isActive}) =>
              isActive
                ? "text-lg font-semibold px-5 py-3  text-emerald-500 border border-emerald-500"
                : "text-lg font-semibold "
            }
            to="allBooks"
          >
            All Books
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-xl fixed z-10 lg:px-52">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-Poppins gap-0 font-medium text-emerald-500">
          Shelf<span className="text-cyan-500">Master</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end gap-4">
        {user?.displayName}
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user.photoURL ? (
                  <img
                    className="h-12 w-12 rounded-full flex justify-center items-center"
                    src={user.photoURL}
                  />
                ) : (
                  <LuUserCircle className="h-full w-full" />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <p>{user.displayName}</p>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="login">
            <button className="btn text-lg font-semibold px-5 bg-cyan-500 text-white font-Poppins hover:bg-emerald-500">
              Login
            </button>
          </Link>
        )}
        {/* theme */}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            onChange={handleTheme}
            type="checkbox"
            className="theme-controller"
            value="synthwave"
          />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Nav;
