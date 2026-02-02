
import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
            Secure File Sharing Using <br/> Blockchain Technology
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            A decentralized architecture combining AES-256 encryption, IPFS for off-chain storage, and Hyperledger Fabric for immutable integrity verification.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/25">
              Get Started
            </Link>
            <Link to="/verify" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold transition-all border border-slate-700">
              Verify a File
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800">Core Cybersecurity Principles</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Confidentiality",
              desc: "Files are encrypted using AES-256 via Java Cryptography Extension before leaving the user interface.",
              icon: "fa-lock",
              color: "blue"
            },
            {
              title: "Integrity",
              desc: "SHA-256 hashes are recorded on the blockchain ledger, ensuring any modification is immediately detectable.",
              icon: "fa-check-double",
              color: "indigo"
            },
            {
              title: "Availability",
              desc: "By utilizing the InterPlanetary File System (IPFS), files are distributed across nodes, preventing single points of failure.",
              icon: "fa-globe",
              color: "emerald"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`fas ${item.icon} text-${item.color}-600 text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Detail */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">System Architecture</span>
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <div className="space-y-6">
                {[
                  { step: "01", text: "User uploads a document, image, or video (No .exe/.vbs allowed)." },
                  { step: "02", text: "The web server (Apache Tomcat) encrypts the file using AES-256." },
                  { step: "03", text: "Encrypted file is stored on IPFS, generating a unique CID." },
                  { step: "04", text: "The CID and file hash are recorded on the Hyperledger Private Blockchain." },
                  { step: "05", text: "Metadata is tracked for ownership and immutable audit logging." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-blue-600 font-mono font-bold">{item.step}</span>
                    <p className="text-slate-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-inner border border-slate-200">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center h-48 bg-slate-100 rounded-lg border-2 border-dashed border-slate-300">
                  <div className="text-center">
                    <i className="fas fa-network-wired text-4xl text-slate-400 mb-2"></i>
                    <p className="text-sm font-medium text-slate-500 italic">Decentralized Mesh (Blockchain + IPFS)</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <p className="text-xs font-bold text-blue-600 mb-1">On-Chain</p>
                    <p className="text-xs text-blue-800">CIDs, Hashes, Roles, Logs</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                    <p className="text-xs font-bold text-indigo-600 mb-1">Off-Chain</p>
                    <p className="text-xs text-indigo-800">Encrypted Raw Data (IPFS)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
