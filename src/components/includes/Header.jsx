// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">Good Evening, Apurbo!</h1>
        <p className="text-gray-500">Here's what's happening with your store today.</p>
      </div>
      <div className="flex space-x-8">
        <div>
          <p className="text-sm text-gray-600">Agent Current Balance</p>
          <p className="text-xl font-bold">BDT 21.87 L</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Partial Payment Due</p>
          <p className="text-xl font-bold">BDT 23.12 L</p>
        </div>
        <div className="relative">
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">4</span>
          <i className="fas fa-bell text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
