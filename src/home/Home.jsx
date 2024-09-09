import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Load from '../loading/Load';
import Error from '../error/Error';
import styles from './home.module.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .catch((error) => setError(error.message))
            .finally(()=> setLoading(false));
  },[]);

  if (loading) return <Load/>;
  if (error) return <Error errorType={error}/>;

  return(
    <div className={styles.homeContainer}>
      <h1>All Products</h1>
      <div className = {styles.productContainer}>
        {products.map((product,index) => (
          <Link key={index} to={`/productPage`} state={{ product }} ><img className = {styles.products} src={product.image} key={index}/></Link>
        ))}
      </div>
    </div>
  )
}

export default Home;