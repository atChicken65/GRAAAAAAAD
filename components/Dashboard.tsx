
import React, { useState } from 'react';
import { UserRole, FileRecord } from '../types';

const Dashboard: React.FC<{ role: UserRole }> = ({ role }) => {
  const [files, setFiles] = useState<FileRecord[]>([
    {
      id: '1',
      name: 'graduation_project_v1.pdf',
      size: '2.4 MB',
      type: 'application/pdf',
      cid: 'QmXoyp...3819',
      hash: 'sha256:7f83...a12c',
      owner: 'Athkar Abdullah',
      timestamp: '2024-03-15 14:30',
      status: 'Blockchain Recorded'
    },
    {
      id: '2',
      name: 'network_architecture.png',
      size: '850 KB',
      type: 'image/png',
      cid: 'QmYuz...9212',
      hash: 'sha256:4d2e...f831',
      owner: 'Athkar Abdullah',
      timestamp: '2024-03-16 09:15',
      status: 'Blockchain Recorded'
    }
  ]);

  const [isUploading, setIsUploading] = useState(false);
  const [uploadStep, setUploadStep] = useState(0);

  const simulateUpload = () => {
    setIsUploading(true);
    setUploadStep(1); // Encrypting
    
    setTimeout(() => {
      setUploadStep(2); // IPFS
      setTimeout(() => {
        setUploadStep(3); // Blockchain
        setTimeout(() => {
          setIsUploading(false);
          setUploadStep(0);
          const newFile: FileRecord = {
            id: Date.now().toString(),
            name: 'research_data.xlsx',
            size: '1.2 MB',
            type: 'application/vnd.ms-excel',
            cid: 'QmPqr...4421',
            hash: 'sha256:1a2b...3c4d',
            owner: 'Athkar Abdullah',
            timestamp: new Date().toLocaleString(),
            status: 'Blockchain Recorded'
          };
          setFiles(prev => [newFile, ...prev]);
        }, 1500);
      }, 1500);
    }, 1500);
  };

  if (role === UserRole.GUEST) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <i className="fas fa-user-lock text-6xl text-slate-300 mb-6"></i>
        <h2 className="text-2xl font-bold mb-4">Registration Required</h2>
        <p className="text-slate-600 mb-8">Guests must sign in or register to access the private file dashboard.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold">Sign In to Continue</button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">My Decentralized Storage</h1>
          <p className="text-slate-500">Securely managing files on IPFS & Hyperledger</p>
        </div>
        <button 
          onClick={simulateUpload}
          disabled={isUploading}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all disabled:opacity-50"
        >
          <i className="fas fa-cloud-upload-alt"></i>
          {isUploading ? 'Uploading...' : 'Upload New File'}
        </button>
      </div>

      {isUploading && (
        <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl animate-pulse">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-bold text-blue-700">
                  {uploadStep === 1 ? 'Encrypting with AES-256...' : 
                   uploadStep === 2 ? 'Broadcasting to IPFS network...' : 
                   'Recording transaction to Blockchain ledger...'}
                </span>
                <span className="text-xs font-mono text-blue-600">{uploadStep * 33}%</span>
              </div>
              <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-500" 
                  style={{ width: `${uploadStep * 33}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-slate-500 text-sm mb-1">Total Files</p>
          <p className="text-3xl font-bold text-slate-900">{files.length}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-slate-500 text-sm mb-1">Storage Network</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <p className="text-lg font-bold text-slate-800">IPFS (Kubo) Active</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-slate-500 text-sm mb-1">Ledger Identity</p>
          <p className="text-lg font-bold text-slate-800 font-mono text-sm truncate">did:hyperledger:7f83...a12c</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-semibold">File Details</th>
              <th className="px-6 py-4 font-semibold">IPFS CID</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {files.map((file) => (
              <tr key={file.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-slate-400">
                      <i className={`fas ${file.type.includes('image') ? 'fa-file-image' : 'fa-file-alt'} text-xl`}></i>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{file.name}</p>
                      <p className="text-xs text-slate-500">{file.size} • {file.timestamp}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-mono text-xs bg-slate-100 px-2 py-1 rounded text-slate-600 select-all cursor-pointer">
                    {file.cid}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    {file.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="Download">
                      <i className="fas fa-download"></i>
                    </button>
                    <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors" title="Manage Permissions">
                      <i className="fas fa-users-cog"></i>
                    </button>
                    <button className="p-2 text-slate-400 hover:text-red-600 transition-colors" title="Delete">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
