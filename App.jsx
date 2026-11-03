import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <div className="max-w-3xl bg-slate-900/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-emerald-500/20 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-400 mb-4 tracking-tight">
              Paradise Nursery
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-8 max-w-xl mx-auto font-light leading-relaxed">
              Where Greenery Meets Serenity. Discover our handpicked selection of premium houseplants to transform your home into a natural sanctuary.
            </p>
            
            <button
              onClick={handleGetStartedClick}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started
            </button>
          </div>

          <div className="mt-12 w-full max-w-3xl">
            <AboutUs />
          </div>
        </div>
      ) : (
        <ProductList onHomeClick={() => setShowProductList(false)} />
      )}
    </div>
  );
}

export default App;
