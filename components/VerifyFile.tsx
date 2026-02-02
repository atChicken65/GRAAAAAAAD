
import React, { useState } from 'react';

const VerifyFile: React.FC = () => {
  const [cid, setCid] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<'idle' | 'success' | 'error'>('idle');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cid) return;

    setIsVerifying(true);
    setResult('idle');

    // Simulate Blockchain Lookup
    setTimeout(() => {
      setIsVerifying(false);
      if (cid.startsWith('Qm')) {
        setResult('success');
      } else {
        setResult('error');
      }
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Verify File Authenticity</h1>
        <p className="text-slate-600">Enter an IPFS Content Identifier (CID) to verify its integrity on the blockchain and download the decrypted content.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-2xl mx-auto">
        <form onSubmit={handleVerify} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">IPFS CID</label>
            <div className="relative">
              <input 
                type="text" 
                value={cid}
                onChange={(e) => setCid(e.target.value)}
                placeholder="e.g. QmXoyp...3819"
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-mono text-sm"
              />
              <div className="absolute right-3 top-3.5">
                <i className="fas fa-search text-slate-300"></i>
              </div>
            </div>
          </div>
          
          <button 
            type="submit"
            disabled={isVerifying || !cid}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 disabled:opacity-50"
          >
            {isVerifying ? (
              <span className="flex items-center justify-center gap-2">
                <i className="fas fa-spinner fa-spin"></i> Checking Blockchain...
              </span>
            ) : 'Verify & Decrypt'}
          </button>
        </form>

        {result === 'success' && (
          <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                <i className="fas fa-check text-emerald-600 text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-emerald-900">Integrity Verified</h3>
                <p className="text-emerald-700 text-sm mb-4">This file matches the hash recorded on the Hyperledger Private Blockchain. It is authentic and untampered.</p>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono mb-4 text-emerald-800">
                  <div className="bg-white/50 p-2 rounded">
                    <p className="font-bold uppercase opacity-50 mb-1">On-Chain Hash</p>
                    <p className="truncate">sha256:7f83...a12c</p>
                  </div>
                  <div className="bg-white/50 p-2 rounded">
                    <p className="font-bold uppercase opacity-50 mb-1">Verified Date</p>
                    <p>{new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <i className="fas fa-download"></i> Download Decrypted File
                </button>
              </div>
            </div>
          </div>
        )}

        {result === 'error' && (
          <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-2xl animate-in fade-in duration-300">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                <i className="fas fa-times text-red-600 text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-900">Verification Failed</h3>
                <p className="text-red-700 text-sm">No record of this CID was found on the blockchain, or your user ID does not have the required access privileges.</p>
              </div>
            </div>
          </div>
        )}
      </div>
{ /*
      <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-slate-500 text-sm">
        <h4 className="font-bold text-slate-700 mb-2 uppercase tracking-wide text-xs">Security Note:</h4>
        <p>Verification involves cross-referencing the IPFS Content Identifier (CID) with the Smart Contract state on the blockchain. If the hashes don't match, decryption is blocked server-side on the Apache Tomcat node to ensure zero unauthorized access.</p>
      </div>
      */ }
    </div>
  );
};

export default VerifyFile;
