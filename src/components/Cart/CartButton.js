
import { useDispatch,useSelector} from 'react-redux';
import { toggleCartVisibility } from '../Store/index';


import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.AddCart.totalQuantity);

 

  const handleCartButtonClick = () => {
    dispatch(toggleCartVisibility()); 
  };

  return (
    <button className={classes.button} onClick={handleCartButtonClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
