import React, { useState } from 'react';
import { Check } from 'lucide-react';
import WaitlistModal from '../components/WaitlistModal';

function Pricing() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const openModal = (plan: string) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-24">
        <h1 className="text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
        <p className="text-2xl text-gray-400">Choose the plan that fits your trading strategy.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Free Plan */}
        <div className="bg-white/5 p-8 rounded-xl border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold">Free</span>
            <span className="text-gray-400"> to use</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <Check className="text-purple-500" />
              <span>Basic bot access</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-purple-500" />
              <span>0.5% of profits</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-purple-500" />
              <span>Connect your own wallet</span>
            </li>
          </ul>
          <button 
            onClick={() => openModal('Free')}
            className="w-full bg-[#6366F1] hover:bg-[#4F46E5] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Essential Plan */}
        <div className="bg-white/5 p-8 rounded-xl border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4">Essential Plan</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold">$19</span>
            <span className="text-gray-400">/month</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <Check className="text-purple-500" />
              <span>Advanced filters</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-purple-500" />
              <span>Auto Buy/Sell</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-purple-500" />
              <span>Profit Share</span>
            </li>
          </ul>
          <button 
            onClick={() => openModal('Essential')}
            className="w-full bg-[#6366F1] hover:bg-[#4F46E5] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Choose Essential
          </button>
        </div>

        {/* Plus Plan */}
        <div className="bg-white/5 p-8 rounded-xl border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4">Plus Plan</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold">$49</span>
            <span className="text-gray-400">/month</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <Check className="text-purple-500" />
              <span>Full feature access</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-purple-500" />
              <span>AI Portfolio</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-purple-500" />
              <span>Profit Share</span>
            </li>
          </ul>
          <button 
            onClick={() => openModal('Plus')}
            className="w-full bg-[#6366F1] hover:bg-[#4F46E5] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Choose Plus
          </button>
        </div>
      </div>

      <p className="text-center mt-12 text-gray-400">
        No hidden fees. No custodial risk. Just powerful tools.
      </p>

      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        planName={selectedPlan}
      />
    </div>
  );
}

export default Pricing;