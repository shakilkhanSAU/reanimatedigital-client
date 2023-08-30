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


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
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
    path: "/shop/details",
    element: <ShopDetails />,
  },
]);

function App() {
  return (
    <RouterProvider className="overscroll-none" router={router} />
  );
}

export default App;
