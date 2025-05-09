import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Disc as Discord } from 'lucide-react';

function Footer() {
  return (
    <footer className="mt-auto py-12 bg-[#0A061D]/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <p className="text-gray-400">Snipir © 2025 — Built for Solana Traders</p>
          </div>
          <div className="flex gap-8">
            <Link to="/features" className="text-gray-400 hover:text-white">Features</Link>
            <Link to="/team" className="text-gray-400 hover:text-white">Team</Link>
            <Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link>
          </div>
          <div className="flex items-center gap-6">
            <a href="giovanni.4.abzz2@gmail.com" className="text-gray-400 hover:text-white">
              Contact us: team@snipir.com
            </a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Discord className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;