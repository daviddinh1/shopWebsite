import { Link,useOutletContext } from "react-router-dom";
const Jordan = () =>{
 const [count, setCount] = useOutletContext();
 const increment = () => setCount((c) => c + 1);


 return(
  <>
   <h1>Jordans will be displayed here</h1>
   <Link to="/">This Link is to go back</Link>
   <button onClick={increment}>{count}</button>  </>
 )
}

export default Jordan;