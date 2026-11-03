import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Plus, Minus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const numericPrice = parseFloat(item.cost.replace('$', ''));
      return total + numericPrice * item.quantity;
    }, 0).toFixed(2);
  };

  const calculateSubtotal = (item) => {
    const numericPrice = parseFloat(item.cost.replace('$', ''));
    return (numericPrice * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const handleCheckout = () => {
    alert('Checkout Coming Soon!');
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <h2 className="text-3xl font-extrabold text-emerald-900 border-b pb-4 mb-6">
          Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-xl font-medium text-slate-500 mb-6">Your shopping cart is currently empty.</p>
            <button
              onClick={onContinueShopping}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Continue Shopping</span>
            </button>
          </div>
        ) : (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-center bg-emerald-50 p-4 rounded-xl mb-6">
              <span className="text-lg font-semibold text-emerald-900 mb-2 sm:mb-0">
                Total Plants: <span className="font-bold text-emerald-700">{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
              </span>
              <span className="text-xl font-extrabold text-emerald-900">
                Total Cost: <span className="text-emerald-700">${calculateTotalAmount()}</span>
              </span>
            </div>

            <div className="space-y-4 mb-8">
              {cartItems.map((item) => (
                <div 
                  key={item.name} 
                  className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-xl hover:shadow-md transition bg-slate-50/50"
                >
                  <div className="flex items-center space-x-4 w-full sm:w-auto mb-4 sm:mb-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">{item.name}</h3>
                      <p className="text-slate-500 text-sm">Unit Price: <span className="font-semibold">{item.cost}</span></p>
                      <p className="text-emerald-700 font-bold text-sm sm:hidden mt-1">Subtotal: ${calculateSubtotal(item)}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto sm:space-x-8">
                    <div className="flex items-center space-x-2 border rounded-lg bg-white px-2 py-1 shadow-sm">
                      <button 
                        onClick={() => handleDecrement(item)}
                        className="p-1 text-slate-600 hover:text-emerald-600 hover:bg-slate-100 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-bold text-slate-800">{item.quantity}</span>
                      <button 
                        onClick={() => handleIncrement(item)}
                        className="p-1 text-slate-600 hover:text-emerald-600 hover:bg-slate-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="hidden sm:block text-right min-w-[80px]">
                      <span className="text-xs text-slate-400 block">Subtotal</span>
                      <span className="text-lg font-bold text-emerald-800">${calculateSubtotal(item)}</span>
                    </div>

                    <button
                      onClick={() => handleRemove(item.name)}
                      className="p-2 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition"
                      title="Remove Item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t pt-6">
              <button
                onClick={onContinueShopping}
                className="w-full sm:w-auto px-6 py-3 border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-bold rounded-lg transition text-center"
              >
                Continue Shopping
              </button>
              <button
                onClick={handleCheckout}
                className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-lg hover:shadow-emerald-500/30 transition text-center"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartItem;
