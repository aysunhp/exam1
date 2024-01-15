import UserRoot from "../pages/UserRoot";
import Home from "../pages/Home";
import Add from "../pages/Add";
import Products from "../pages/Products";
import AboutUs from "../pages/AboutUs";
import Special from "../pages/Special";
import Testimonials from "../pages/Testimonials";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Basket from "../pages/Basket";
import Wishlist from "../pages/Wishlist";

const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/special",
        element: <Special />,
      },
      {
        path: "/testimonial",
        element: <Testimonials />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
];

export default routes;
