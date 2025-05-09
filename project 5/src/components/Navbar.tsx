import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/assets/robot-icon.png"
            alt="Snipir Icon" 
            className="h-16 w-auto" 
          />
          <span className="text-3xl font-bold text-white hidden sm:inline ml-3">Snipir</span>
        </Link>
        
        <div className="flex gap-8 text-lg font-medium">
          <Link to="/features" className="hover:text-purple-500 transition-colors">Features</Link>
          <Link to="/team" className="hover:text-purple-500 transition-colors">Team</Link>
          <Link to="/pricing" className="hover:text-purple-500 transition-colors">Pricing</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;