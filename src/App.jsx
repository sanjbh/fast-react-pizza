import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./fetaures/cart/Cart";
import Menu, { loader as menuLoader } from "./fetaures/menu/Menu";
import CreateOrder, {
  action as createOrderAction,
} from "./fetaures/order/CreateOrder";
import { loader as orderLoader } from "./fetaures/order/Order";
import Order from "./fetaures/order/Order";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
