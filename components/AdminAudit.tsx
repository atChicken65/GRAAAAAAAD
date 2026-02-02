
import React from 'react';
import { UserRole, AuditLog } from '../types';

const AdminAudit: React.FC<{ role: UserRole }> = ({ role }) => {
  const logs: AuditLog[] = [
    {
      id: 'L1',
      timestamp: '2024-03-16 10:45:12',
      user: 'admin_sys',
      action: 'PERMISSION_GRANTED',
      details: 'Guest 44492#### granted access to graduation_project_v1.pdf',
      txHash: '0x88f2...e3d4'
    },
    {
      id: 'L2',
      timestamp: '2024-03-16 09:15:33',
      user: 'athkar_a',
      action: 'FILE_UPLOAD',
      details: 'New file uploaded: network_architecture.png to IPFS',
      txHash: '0x33a1...b92e'
    },
    {
      id: 'L3',
      timestamp: '2024-03-15 14:30:05',
      user: 'athkar_a',
      action: 'FILE_UPLOAD',
      details: 'New file uploaded: graduation_project_v1.pdf to IPFS',
      txHash: '0x11c4...f281'
    }
  ];

  if (role !== UserRole.ADMIN) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <i className="fas fa-exclamation-triangle text-6xl text-amber-500 mb-6"></i>
        <h2 className="text-2xl font-bold mb-4">Unauthorized Access</h2>
        <p className="text-slate-600 mb-8">Access to the immutable audit ledger is restricted to system administrators.</p>
        <div className="text-xs text-slate-400 bg-slate-100 p-4 rounded-lg font-mono">
          Error: Insufficient Smart Contract Privileges
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
          <i className="fas fa-list-check text-blue-600"></i>
          Immutable Audit Ledger
        </h1>
        <p className="text-slate-500">Every action is cryptographically signed and recorded on the Hyperledger blockchain.</p>
      </div>

      <div className="bg-slate-900 text-blue-400 p-4 rounded-t-2xl flex items-center justify-between border-b border-slate-800">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-mono">Blockchain Node Sync: 100%</span>
          </div>
          <span className="text-xs font-mono text-slate-500">Channel: cyb-496-filesharing</span>
        </div>
        <button className="text-xs font-bold hover:text-white transition-colors">
          <i className="fas fa-download mr-1"></i> Export Chain
        </button>
      </div>

      <div className="bg-white rounded-b-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-semibold">Timestamp</th>
              <th className="px-6 py-4 font-semibold">User / Actor</th>
              <th className="px-6 py-4 font-semibold">Action</th>
              <th className="px-6 py-4 font-semibold">Tx Hash</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-xs font-mono text-slate-500">
                  {log.timestamp}
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-slate-700">{log.user}</span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-bold text-blue-600 text-xs mb-1 uppercase tracking-tighter">{log.action}</p>
                  <p className="text-sm text-slate-600 line-clamp-1">{log.details}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="font-mono text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-400">
                    {log.txHash}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAudit;
