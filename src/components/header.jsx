import React from 'react';

export default function Header() {
  return (
   <header>
      {/* Top green fading bar */}
      <div className="bg-gradient-to-r from-green-900 to-green-600 text-white px-6 py-4">
        
      </div>

      {/* Bottom white bar with logo and icons */}
      <div className="flex items-center justify-between bg-white px-6 py-3 shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-4">
    <img
      src="/images/logo.png"
      alt="Logo"
      className="h-12 w-auto cursor-pointer"
    />
    <p className="text-green-800 text-lg font-semibold italic tracking-wide">
      Embrace Organic Living
    </p>
  </div>

        {/* Icons */}
        <div className="flex space-x-6 items-center">
          <img
            src="/images/search.png"
            alt="Search"
            className="w-10 h-10 cursor-pointer"
          />
          <img
            src="/images/cart.png"
            alt="Cart"
            className="w-10 h-10 cursor-pointer"
          />
          <img
            src="/images/user.jpg"
            alt="Login"
            className="w-10 h-10 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
