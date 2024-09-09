import {useLocation,Link} from 'react-router-dom';

const ProductPage = () => {
 const location = useLocation();
 const { product } = location.state || {}; // Access the product from the state
 
 return(
  <div>
   <img src={product.image}></img>
   <div>{product.price}</div>
   <Link to="shopPage" state={{ product }}><button>BUY</button></Link>
  </div>
 )
}

export default ProductPage;