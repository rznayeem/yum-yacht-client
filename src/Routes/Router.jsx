import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import AllFoods from '../Pages/AllFoods/AllFoods';
import FoodDetails from '../Pages/FoodDetails/FoodDetails';
import Register from '../Pages/Register/Register';
import Purchase from '../Pages/Purchase/Purchase';

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
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/allFoods',
        element: <AllFoods></AllFoods>,
      },
      {
        path: '/foodDetails/:id',
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foodDetails/${params.id}`),
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/purchase/:id',
        element: <Purchase></Purchase>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foodDetails/${params.id}`),
      },
    ],
  },
]);

export default Router;
