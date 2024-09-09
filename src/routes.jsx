import { createBrowserRouter } from "react-router-dom";
import Home from './home/Home';
import Jordan from './Jordan';
import Nike from './Nike';
import New from './New';
import ProductPage from './productPage/ProductPage';
import ShopPage from './shopping/ShopPage';

const routes = createBrowserRouter([
 {path: "/",
  element: <Home/>,
 },
 {path:"jordan",
  element: <Jordan/>
 },
 {path:"nike",
  element: <Nike/>
 },
 {path:'new',
  element: <New/>
 },
 {path:'productPage',
  element: <ProductPage/>
 },
 {path:'productPage/shopPage',
  element: <ShopPage/>
 },
])


export default routes;