### `AboutUs.jsx`

```jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container max-w-4xl mx-auto p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl text-slate-800">
      <h2 className="text-3xl font-bold text-emerald-800 mb-4 text-center">About Paradise Nursery</h2>
      <p className="text-lg leading-relaxed mb-4 text-slate-700">
        Welcome to <strong>Paradise Nursery</strong>, your premier destination for high-quality houseplants and botanical care essentials. Founded with a passion for bringing nature into everyday spaces, we curate a wide variety of indoor plants ranging from air-purifying greenery to aromatic herbs and resilient succulents.
      </p>
      <p className="text-lg leading-relaxed text-slate-700">
        Our mission is to make plant parenthood accessible, enjoyable, and rewarding for everyone. Whether you are seeking to enhance your indoor air quality or elevate your home décor, Paradise Nursery provides top-tier specimens tailored to your lifestyle.
      </p>
    </div>
  );
};

export default AboutUs;
