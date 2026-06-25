'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import ImageUpload from '@/components/admin/ImageUpload';

export default function EditPortfolioPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [formData, setFormData] = useState({
  "slug": "",
  "title": "",
  "category": "",
  "desc": "",
  "image": "",
  "liveLink": ""
});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`/api/admin/portfolio/${id}`)
        .then(res => res.json())
        .then(json => {
          if (json.success) setFormData(json.data);
        });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/portfolio/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        router.push('/admin/portfolio');
      } else {
        alert('Failed to update');
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
        <h1 className="text-2xl font-bold text-white">Edit Portfolio</h1>
        <Link href="/admin/portfolio" className="text-slate-400 hover:text-white">Back</Link>
      </div>
      <form onSubmit={handleSubmit} className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">
        
  <div>
    <label className="block text-sm font-medium text-slate-300">Title</label>
    <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white" />
  </div>
  <div>
    <label className="block text-sm font-medium text-slate-300">Slug</label>
    <input required value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white" />
  </div>
  <div>
    <label className="block text-sm font-medium text-slate-300">Category</label>
    <input required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white" />
  </div>
  <div>
    <label className="block text-sm font-medium text-slate-300">Description</label>
    <textarea required value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white" />
  </div>
  <ImageUpload label="Portfolio Image" value={formData.image || ''} onChange={(url) => setFormData({...formData, image: url})} />

        <button type="submit" disabled={loading} className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg mt-4">
          {loading ? 'Saving...' : 'Update'}
        </button>
      </form>
    </div>
  );
}