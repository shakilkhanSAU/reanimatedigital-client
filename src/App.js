import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home/Home";
import Contact from "./Components/Contact/Contact";
import Shop from "./Components/Shop/Shop/Shop";
import About from "./Components/About/About";
import AllCourse from "./Components/Courses/AllCourse/AllCourse";
import CourseDetails from "./Components/Courses/CourseDetails/CourseDetails";
import ShopDetails from "./Components/Shop/ShopDetails/ShopDetails";
import SignIn from "./Components/Authentication/SignIn/SignIn";
import Cart from "./Components/Cart/Cart";
import Main from "./Components/layout/Main";


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
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "courses",
        element: <AllCourse />,
      },
      {
        path: "course-details",
        element: <CourseDetails />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shop/details",
        element: <ShopDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider className="overscroll-none" router={router} />
  );
}

export default App;
