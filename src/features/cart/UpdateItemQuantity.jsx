import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQty, increaseItemQty } from './cartSlice';

// eslint-disable-next-line react/prop-types
function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncreaseCartItem() {
    dispatch(increaseItemQty(pizzaId));
  }

  function handleDecreaseCartItem() {
    dispatch(decreaseItemQty(pizzaId));
  }

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleDecreaseCartItem}>
        -
      </Button>
      <span className="border-b border-t border-yellow-500 font-semibold text-slate-900">
        {currentQuantity}
      </span>
      <Button type="round" onClick={handleIncreaseCartItem}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
