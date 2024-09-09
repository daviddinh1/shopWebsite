import {useLocation} from 'react-router-dom';

const ProductPage = () => {
 const location = useLocation();
 const { product } = location.state || {}; // Access the product from the state
 console.log('product:', product);

 return(
  <div>
   <img src={product.image}></img>
  </div>
 )
}

export default ProductPage;