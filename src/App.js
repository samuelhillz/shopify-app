
import { productsData } from './api/Api';
import Header from './components/Banner/header/Header';
import Footer from './components/footer/Footer';
import SingleProduct from './components/singleProduct/SingleProduct';
import Login from './pages/Login/Login';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';

import {createBrowserRouter,Outlet,RouterProvider,ScrollRestoration} from 'react-router-dom';


const Layout =() =>{
  return (
    <div>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children: [
      {
        path: '/',
        element:<Home />,
        loader: productsData,
      },
      {
        path:'/singleproduct/:id',
        element:<SingleProduct/>,

      },
      {
        path: '/cart',
        element: <Cart/>,
      },
      {
        path: '/login',
        element: <Login/>,
      },
      
      {
        path: '/contact',
        element: <Contact/>,
      },
    ],
  },

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
     
    </div>
  );
}

export default App;
