import React from 'react';
import { Sprout, Users, Boxes, Network, Code, Terminal, Database, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <main className="container mx-auto px-4 text-center mt-24">
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
          The Fastest Non-Custodial<br />
          Crypto Trading Bot on Solana
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-4">
          Trade safer. Trade smarter. Full control—no compromises.
        </p>
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Wallet-based security, automated trading, and advanced<br className="hidden sm:block" />
          token filters built for real traders.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/pricing')}
            className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Started
          </button>
          <button 
            onClick={() => navigate('/features')}
            className="border border-[#6366F1] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#6366F1]/10 transition-colors"
          >
            View Features
          </button>
        </div>
      </main>

      {/* Roadmap Section */}
      <section className="container mx-auto px-4 mt-48 mb-24">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
          Our Roadmap to the Future
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 text-center mb-24">
          Building the most secure and powerful trading<br className="hidden sm:block" />
          tool for Solana.
        </p>

        <div className="max-w-6xl mx-auto relative">
          <div className="wave-bg"></div>
          
          <h3 className="text-4xl sm:text-6xl font-bold text-purple-500 text-center mb-20">ROADMAP</h3>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
              <div className="neon-line h-full before:content-[''] before:absolute before:w-4 before:h-4 before:bg-purple-500/20 before:-left-2 before:rounded-full before:shadow-[0_0_15px_rgba(168,85,247,0.5)] after:content-[''] after:absolute after:w-4 after:h-4 after:bg-purple-500/20 after:-left-2 after:bottom-0 after:rounded-full after:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
            </div>

            <div className="space-y-32">
              {/* Phase I */}
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2">
                  <div className="neon-dot flex items-center justify-center">
                    <Terminal className="w-4 h-4 text-purple-200" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-center sm:text-right order-2 sm:order-1">
                    <div className="bg-purple-500/10 p-6 rounded-xl border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)] sm:ml-auto">
                      <Code className="roadmap-icon mx-auto sm:ml-auto mb-4" />
                      <h4 className="text-4xl font-bold text-purple-500 mb-4">Genesis</h4>
                      <div className="text-sm text-purple-400 mb-2">Project initialization</div>
                    </div>
                  </div>
                  <div className="pt-24 order-1 sm:order-2">
                    <div className="bg-purple-500/10 p-6 rounded-xl border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                      <h4 className="text-4xl font-bold text-purple-500 mb-4">Phase I</h4>
                      <h5 className="text-3xl font-bold text-purple-400 mb-4">2025 Q3</h5>
                      <div className="text-purple-300">
                        <div className="mb-2">{'>'} Smart Contracts Deployment</div>
                        <div>{'>'} Early Testing For Watchlist Users</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase II */}
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2">
                  <div className="neon-dot flex items-center justify-center">
                    <Database className="w-4 h-4 text-purple-200" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-center sm:text-right order-2 sm:order-1">
                    <div className="bg-purple-500/10 p-6 rounded-xl border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)] sm:ml-auto">
                      <Users className="roadmap-icon mx-auto sm:ml-auto mb-4" />
                      <h4 className="text-4xl font-bold text-purple-500 mb-4">Synergy</h4>
                      <div className="text-sm text-purple-400 mb-2">Features deployment</div>
                    </div>
                  </div>
                  <div className="pt-24 order-1 sm:order-2">
                    <div className="bg-purple-500/10 p-6 rounded-xl border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                      <h4 className="text-4xl font-bold text-purple-500 mb-4">Phase II</h4>
                      <h5 className="text-3xl font-bold text-purple-400 mb-4">2025 Q4</h5>
                      <div className="text-purple-300">
                        <div className="mb-2">{'>'} Phase II Testing</div>
                        <div>{'>'} Tools & Features Public Testing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase III */}
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2">
                  <div className="neon-dot flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-purple-200" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-center sm:text-right order-2 sm:order-1">
                    <div className="bg-purple-500/10 p-6 rounded-xl border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)] sm:ml-auto">
                      <Network className="roadmap-icon mx-auto sm:ml-auto mb-4" />
                      <h4 className="text-4xl font-bold text-purple-500 mb-4">Orbit</h4>
                      <div className="text-sm text-purple-400 mb-2">Final Version</div>
                    </div>
                  </div>
                  <div className="pt-24 order-1 sm:order-2">
                    <div className="bg-purple-500/10 p-6 rounded-xl border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                      <h4 className="text-4xl font-bold text-purple-500 mb-4">Phase III</h4>
                      <h5 className="text-3xl font-bold text-purple-400 mb-4">2026 Late Q1</h5>
                      <div className="text-purple-300">
                        <div className="mb-2">{'>'} Full Launch</div>
                        <div>{'>'} Features Launch</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;