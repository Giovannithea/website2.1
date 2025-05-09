import React from 'react';
import { Shield, Filter, Bot, Radio, Brain, Newspaper } from 'lucide-react';

function Features() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-24">
        <h1 className="text-6xl font-bold mb-6">Powerful Features Built for Solana Traders</h1>
        <p className="text-2xl text-gray-400">Stop trading blind. Trade with Snipir.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="bg-white/5 p-8 rounded-xl">
          <Shield className="w-12 h-12 text-purple-500 mb-6" />
          <h3 className="text-2xl font-bold mb-4">Wallet-Based Security</h3>
          <p className="text-gray-400">Your crypto stays in your wallet — no custodial risk.</p>
        </div>

        <div className="bg-white/5 p-8 rounded-xl">
          <Filter className="w-12 h-12 text-purple-500 mb-6" />
          <h3 className="text-2xl font-bold mb-4">Advanced Token Filtering</h3>
          <p className="text-gray-400">Avoid scams & rugs with customizable filters.</p>
        </div>

        <div className="bg-white/5 p-8 rounded-xl">
          <Bot className="w-12 h-12 text-purple-500 mb-6" />
          <h3 className="text-2xl font-bold mb-4">Automated Trading Engine</h3>
          <p className="text-gray-400">Auto-buy and sell based on your personal strategy.</p>
        </div>

        <div className="bg-white/5 p-8 rounded-xl">
          <Radio className="w-12 h-12 text-purple-500 mb-6" />
          <h3 className="text-2xl font-bold mb-4">Live Token Scanning</h3>
          <p className="text-gray-400">Catch new tokens instantly. Trade before the crowd.</p>
        </div>

        <div className="bg-white/5 p-8 rounded-xl">
          <Brain className="w-12 h-12 text-purple-500 mb-6" />
          <h3 className="text-2xl font-bold mb-4">AI Portfolio Management</h3>
          <p className="text-gray-400">Dynamic strategy optimization tailored to market conditions.</p>
        </div>

        <div className="bg-white/5 p-8 rounded-xl">
          <Newspaper className="w-12 h-12 text-purple-500 mb-6" />
          <h3 className="text-2xl font-bold mb-4">Narrative Tracker</h3>
          <p className="text-gray-400">Live news tracking to find new narratives before anyone else.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;