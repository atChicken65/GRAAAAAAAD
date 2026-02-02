
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import AdminAudit from './components/AdminAudit';
import VerifyFile from './components/VerifyFile';
import { UserRole } from './types';

const Navbar: React.FC<{ role: UserRole; setRole: (r: UserRole) => void }> = ({ role, setRole }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <i className="fas fa-shield-halved text-xl"></i>
            </div>
            <span className="font-bold text-xl tracking-tight">SecureBlock</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/') ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}>Home</Link>
              <Link to="/dashboard" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/dashboard') ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}>My Files</Link>
              <Link to="/verify" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/verify') ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}>Verify & Download</Link>
              <Link to="/audit" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/audit') ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}>Audit Logs</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value as UserRole)}
              className="bg-slate-800 text-xs border border-slate-700 rounded px-2 py-1 outline-none cursor-pointer"
            >
              <option value={UserRole.OWNER}>Role: File Owner</option>
              <option value={UserRole.ADMIN}>Role: Admin</option>
              <option value={UserRole.GUEST}>Role: Guest</option>
            </select>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold ring-2 ring-slate-700">
              {role[0]}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.OWNER);

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar role={role} setRole={setRole} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard role={role} />} />
            <Route path="/audit" element={<AdminAudit role={role} />} />
            <Route path="/verify" element={<VerifyFile />} />
          </Routes>
        </main>
        <footer className="bg-slate-100 border-t border-slate-200 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
            <p>&copy; 2026 SecureBlock Graduation Project. Built for Secure File Sharing using Blockchain & IPFS.</p>
            <p className="mt-2 text-xs">Confidentiality | Integrity | Availability</p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
