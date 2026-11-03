import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart, Leaf, Home } from 'lucide-react';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

const plantCategories = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bac?w=400', cost: '$18' },
      { name: 'Spider Plant', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400', cost: '$12' },
      { name: 'Peace Lily', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?w=400', cost: '$22' },
      { name: 'Boston Fern', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400', cost: '$15' },
      { name: 'Rubber Plant', image: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=400', cost: '$25' },
      { name: 'Aloe Vera', image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400', cost: '$14' }
    ]
  },
  {
    category: 'Aromatic & Herbal',
    plants: [
      { name: 'Lavender', image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=400', cost: '$16' },
      { name: 'Rosemary', image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400', cost: '$10' },
      { name: 'Mint', image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400', cost: '$8' },
      { name: 'Eucalyptus', image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400', cost: '$24' },
      { name: 'Sweet Basil', image: 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=400', cost: '$9' },
      { name: 'Thyme', image: 'https://images.unsplash.com/photo-1584485585094-1a224a1b02b6?w=400', cost: '$11' }
    ]
  },
  {
    category: 'Low Maintenance & Succulents',
    plants: [
      { name: 'ZZ Plant', image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400', cost: '$20' },
      { name: 'Jade Plant', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400', cost: '$15' },
      { name: 'Echeveria Succulent', image: 'https://images.unsplash.com/photo-1520302638595-32a32d657834?w=400', cost: '$10' },
      { name: 'Pothos Golden', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400', cost: '$14' },
      { name: 'Haworthia Zebra', image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400', cost: '$12' },
      { name: 'Cast Iron Plant', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400', cost: '$28' }
    ]
  }
];

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isPlantInCart = (plantName) => {
    return cartItems.some(item => item.name === plantName);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Sticky Header Navbar */}
      <header className="sticky top-0 z-50 bg-emerald-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={onHomeClick}>
            <div className="bg-white/10 p-2 rounded-full">
              <Leaf className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Paradise Nursery</h1>
              <p className="text-xs text-emerald-200">Where Greenery Meets Serenity</p>
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            <button 
              onClick={onHomeClick}
              className="flex items-center space-x-1 hover:text-emerald-300 font-medium transition"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
            <button 
              onClick={() => setShowCart(false)}
              className={`flex items-center space-x-1 font-medium transition ${!showCart ? 'text-emerald-300 underline underline-offset-4' : 'hover:text-emerald-300'}`}
            >
              <span>Plants</span>
            </button>
            <button 
              onClick={() => setShowCart(true)}
              className="relative bg-emerald-700 hover:bg-emerald-600 px-4 py-2 rounded-full transition flex items-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="bg-emerald-300 text-emerald-950 text-xs font-bold px-2 py-0.5 rounded-full">
                {totalCartCount}
              </span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content View */}
      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <main className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-extrabold text-emerald-900 text-center mb-10">
            Our Plant Collection
          </h2>

          {plantCategories.map((cat, idx) => (
            <section key={idx} className="mb-12">
              <h3 className="text-2xl font-bold text-slate-700 border-b-2 border-emerald-500 pb-2 mb-6">
                {cat.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cat.plants.map((plant) => {
                  const added = isPlantInCart(plant.name);
                  return (
                    <div key={plant.name} className="plant-card bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 flex flex-col justify-between">
                      <img 
                        src={plant.image} 
                        alt={plant.name} 
                        className="w-full h-48 object-cover" 
                      />
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xl font-bold text-slate-800 mb-1">{plant.name}</h4>
                          <p className="text-emerald-700 font-semibold text-lg mb-4">{plant.cost}</p>
                        </div>
                        <button
                          onClick={() => handleAddToCart(plant)}
                          disabled={added}
                          className={`w-full py-2.5 rounded-lg font-bold transition duration-200 ${
                            added 
                              ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                              : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md'
                          }`}
                        >
                          {added ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      )}
    </div>
  );
}

export default ProductList;
