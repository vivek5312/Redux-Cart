import Cart from "./components/Cart/Cart";
import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";
import { uiAction } from "./components/Store/index";

let isIntial=true;
function App() {
  const isCartVisible = useSelector((state) => state.cart.isCartVisible);
  const cart = useSelector((state) => state.AddCart);
  const dispatch = useDispatch();
  const notification=useSelector(state=>state.cart.notification);


  useEffect(() => {
    const cartdata = async () => {
      dispatch(
        uiAction.notification({
          status: "Pending",
          title: "Sending",
          message: "Send Cart data",
        })
      );
      const response = await fetch(
        "https://project-01-6659a-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data is failed");
      }
      dispatch(
        uiAction.notification({
          status: "success",
          title: "Success",
          message: "Send Cart data succesfully",
        }))
    };
   if(isIntial){
    isIntial=false;
   }
    cartdata().catch((error)=>{
      dispatch(
        uiAction.notification({
          status: "error",
          title: "Error",
          message: "Send Cart data failed",
        }))
    })
     
  }, [cart,dispatch]);

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
