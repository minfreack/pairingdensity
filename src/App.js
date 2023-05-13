import Dashboard from "./components/dashboard";
import Details from "./components/Details";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "./system/redux/store";

const store = configureStore();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
    },
    {
        path: "/details/:id",
        element: <Details/>,
    },
]);

function App() {
  return (
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  );
}

export default App;
