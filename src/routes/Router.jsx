import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddBook from "../pages/AddBook/AddBook";
import AllBooks from "../pages/AllBooks/AllBooks";
import Update from "../pages/Update/Update";
import CategoryItem from "../pages/Home/CategoryItem";
import Details from "../pages/Details/Details";
import BorrowedBooks from "../pages/Borrowed/BorrowedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "addBooks",
        element: <AddBook />,
      },
      {
        path: "allBooks",
        element: <AllBooks />,
        // loader: () => fetch("http://localhost:5000/allBooks"),
      },
      {
        path: "/updateBook/:id",
        element: <Update />,
      },
      {
        path: "categoryItem/:category",
        element: <CategoryItem />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
      {
        path: "borrowedBooks",
        element: <BorrowedBooks />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
