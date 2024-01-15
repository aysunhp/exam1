import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./../src/router/router";
import "./../src/assets/styles/style.scss";
const router = createBrowserRouter(routes);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
