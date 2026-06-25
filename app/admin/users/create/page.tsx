'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ImageUpload from '@/components/admin/ImageUpload';

export default function CreateUsersPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
  "email": "",
  "name": "",
  "role": "USER",
  "password": "",
  "avatar": ""
});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        router.push('/admin/users');
      } else {
        alert('Failed to create');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Create Users</h1>
        <Link href="/admin/users" className="text-slate-400 hover:text-white">Back</Link>
      </div>
      <form onSubmit={handleSubmit} className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">
        
  <div>
    <label className="block text-sm font-medium text-slate-300">Name</label>
    <input value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white" />
  </div>
  <div>
    <label className="block text-sm font-medium text-slate-300">Email</label>
    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white" />
  </div>
  <div>
    <label className="block text-sm font-medium text-slate-300">Password (Leave blank to keep same)</label>
    <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white" />
  </div>
  <div>
    <label className="block text-sm font-medium text-slate-300">Role</label>
    <select value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white">
      <option value="USER">User</option>
      <option value="ADMIN">Admin</option>
    </select>
  </div>
  <ImageUpload label="User Avatar" value={formData.avatar || ''} onChange={(url) => setFormData({...formData, avatar: url})} />

        <button type="submit" disabled={loading} className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg mt-4">
          {loading ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
}