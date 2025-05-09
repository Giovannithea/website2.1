import React from 'react';

function Team() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-24">
        <h1 className="text-6xl font-bold mb-6">About Us — The Team Behind Snipir</h1>
        <p className="text-2xl text-gray-400 mb-12">
          We are a collective of traders, developers, and crypto enthusiasts passionate about<br />
          building safe and powerful tools for the next generation of Solana users.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-xl text-gray-400">
          To empower crypto traders with unmatched speed, security, and control — without compromising ownership of their assets.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Meet The Team</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white/5 p-8 rounded-xl text-center">
            <img 
              src="/assets/tchaika-modified.png" 
              alt="Tchaika" 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 className="text-2xl font-bold mb-2">Tchaika</h3>
            <p className="text-purple-500 mb-4">CTO</p>
            <p className="text-gray-400">Blockchain developer and technical lead. Architecting Snipir's secure, lightning-fast systems.</p>
          </div>
 
          <div className="bg-white/5 p-8 rounded-xl text-center">
            <img 
              src="/assets/marco.png" 
              alt="Marco" 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 className="text-2xl font-bold mb-2">Marco B</h3>
            <p className="text-purple-500 mb-4">CEO & Founder</p>
            <p className="text-gray-400">A veteran trader and strategist. Building Snipir to help everyday traders compete like professionals.</p>
          </div>

          <div className="bg-white/5 p-8 rounded-xl text-center">
            <img 
              src="/assets/giovanni.png" 
              alt="Giovanni" 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 className="text-2xl font-bold mb-2">Giovanni</h3>
            <p className="text-purple-500 mb-4">Developer & Concepter</p>
            <p className="text-gray-400">Full-stack developer blending product innovation with a trader-first mindset.</p>
          </div>
        </div>

        <p className="text-2xl text-center mt-24 text-gray-400">
          We trade. We build. We care about doing crypto the right way.
        </p>
      </div>
    </div>
  );
}

export default Team;