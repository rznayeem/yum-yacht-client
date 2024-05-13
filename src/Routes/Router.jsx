import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import AllFoods from '../Pages/AllFoods/AllFoods';
import FoodDetails from '../Pages/FoodDetails/FoodDetails';
import Register from '../Pages/Register/Register';
import Purchase from '../Pages/Purchase/Purchase';
import Gallery from '../Pages/Gallery/Gallery';
import MyList from '../Pages/MyList/MyList';
import AddFood from '../Pages/AddFood/AddFood';
import MyOrder from '../Pages/MyOrder/MyOrder';
import UpdateDetails from '../Pages/UpdateDetails/UpdateDetails';
import PrivateRoute from './PrivateRoute';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/allFoods',
        element: <AllFoods></AllFoods>,
      },
      {
        path: '/foodDetails/:id',
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-yum-yacht-server.vercel.app/foodDetails/${params.id}`
          ),
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/purchase/:id',
        element: (
          <PrivateRoute>
            <Purchase></Purchase>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-yum-yacht-server.vercel.app/foodDetails/${params.id}`,
            {
              credentials: 'include',
            }
          ),
      },
      {
        path: '/myList',
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: '/addFood',
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: '/myOrder',
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
      },
      {
        path: '/updateDetails/:id',
        element: <UpdateDetails></UpdateDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-yum-yacht-server.vercel.app/foodDetails/${params.id}`
          ),
      },
    ],
  },
]);

export default Router;
