import Cart from "./components/Cart/Cart";
import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";
import { sendCartData,fetchCartData} from "./components/Store/cartAction";
let isIntial=true;
function App() {
  const isCartVisible = useSelector((state) => state.cart.isCartVisible);
  const cart = useSelector((state) => state.AddCart);
  const dispatch = useDispatch();
  const notification=useSelector(state=>state.cart.notification);
  
  
 
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isIntial) {
      isIntial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);


  return (
    <>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
     <Layout>
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
    </>
  );
    
   
}

export default App;
