// CartButton.js
import { useDispatch } from 'react-redux';
import { toggleCartVisibility } from '../Store/index';
import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
 

  const handleCartButtonClick = () => {
    dispatch(toggleCartVisibility()); // Use the imported action creator
  };

  return (
    <button className={classes.button} onClick={handleCartButtonClick}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
