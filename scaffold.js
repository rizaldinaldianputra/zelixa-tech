const fs = require('fs');
const path = require('path');

function createPages(entityName, entityPath, columns, defaultFormData, formFields) {
  const baseDir = path.join(process.cwd(), 'app', 'admin', entityPath);
  fs.mkdirSync(baseDir, { recursive: true });
  fs.mkdirSync(path.join(baseDir, 'create'), { recursive: true });
  fs.mkdirSync(path.join(baseDir, '[id]', 'edit'), { recursive: true });

  const capitalized = entityName.charAt(0).toUpperCase() + entityName.slice(1);

  // 1. List Page
  const listPage = `'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ${capitalized}Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    try {
      const res = await fetch('/api/admin/${entityPath}');
      const json = await res.json();
      if (json.success) setData(json.data || json.data?.items || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchItems(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    try {
      await fetch(\`/api/admin/${entityPath}/\${id}\`, { method: 'DELETE' });
      fetchItems();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">${capitalized}</h1>
        <Link href="/admin/${entityPath}/create" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Create New</Link>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-800 text-slate-400">
            <tr>
              ${columns.map(c => `<th className="px-6 py-4">${c}</th>`).join('\n              ')}
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {data.map((item: any) => (
              <tr key={item.id} className="hover:bg-slate-800/50">
                ${columns.map(c => `<td className="px-6 py-4">{item.${c.toLowerCase()}}</td>`).join('\n                ')}
                <td className="px-6 py-4 flex gap-3">
                  <Link href={\`/admin/${entityPath}/\${item.id}/edit\`} className="text-blue-400 hover:text-blue-300">Edit</Link>
                  <button onClick={() => handleDelete(item.id)} className="text-red-400 hover:text-red-300">Delete</button>
                </td>
              </tr>
            ))}
            {data.length === 0 && !loading && (
              <tr><td colSpan={10} className="px-6 py-8 text-center text-slate-500">No records found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}`;
  fs.writeFileSync(path.join(baseDir, 'page.tsx'), listPage);

  // 2. Create Page
  const createPage = `'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ImageUpload from '@/components/admin/ImageUpload';

export default function Create${capitalized}Page() {
  const router = useRouter();
  const [formData, setFormData] = useState(${JSON.stringify(defaultFormData, null, 2)});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/admin/${entityPath}', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        router.push('/admin/${entityPath}');
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
        <h1 className="text-2xl font-bold text-white">Create ${capitalized}</h1>
        <Link href="/admin/${entityPath}" className="text-slate-400 hover:text-white">Back</Link>
      </div>
      <form onSubmit={handleSubmit} className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">
        ${formFields}
        <button type="submit" disabled={loading} className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg mt-4">
          {loading ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
}`;
  fs.writeFileSync(path.join(baseDir, 'create', 'page.tsx'), createPage);

  // 3. Edit Page
  const editPage = `'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import ImageUpload from '@/components/admin/ImageUpload';

export default function Edit${capitalized}Page() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [formData, setFormData] = useState(${JSON.stringify(defaultFormData, null, 2)});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(\`/api/admin/${entityPath}/\${id}\`)
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
      const res = await fetch(\`/api/admin/${entityPath}/\${id}\`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        router.push('/admin/${entityPath}');
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
        <h1 className="text-2xl font-bold text-white">Edit ${capitalized}</h1>
        <Link href="/admin/${entityPath}" className="text-slate-400 hover:text-white">Back</Link>
      </div>
      <form onSubmit={handleSubmit} className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">
        ${formFields}
        <button type="submit" disabled={loading} className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg mt-4">
          {loading ? 'Saving...' : 'Update'}
        </button>
      </form>
    </div>
  );
}`;
  fs.writeFileSync(path.join(baseDir, '[id]', 'edit', 'page.tsx'), editPage);
}

// Portfolio
createPages('portfolio', 'portfolio', ['Title', 'Category'], { slug: '', title: '', category: '', desc: '', image: '', liveLink: '' }, `
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
`);

// Services
createPages('services', 'services', ['Title'], { title: '', desc: '', icon: '' }, `
  <div>
    <label className="block text-sm font-medium text-slate-300">Title</label>
    <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white" />
  </div>
  <div>
    <label className="block text-sm font-medium text-slate-300">Description</label>
    <textarea required value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white" />
  </div>
  <ImageUpload label="Service Icon/Image" value={formData.icon || ''} onChange={(url) => setFormData({...formData, icon: url})} />
`);

// Testimonials
createPages('testimonials', 'testimonials', ['Name', 'Role'], { name: '', role: '', text: '', avatar: '' }, `
  <div>
    <label className="block text-sm font-medium text-slate-300">Name</label>
    <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white" />
  </div>
  <div>
    <label className="block text-sm font-medium text-slate-300">Role</label>
    <input required value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white" />
  </div>
  <div>
    <label className="block text-sm font-medium text-slate-300">Testimonial Text</label>
    <textarea required value={formData.text} onChange={e => setFormData({...formData, text: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white" />
  </div>
  <ImageUpload label="Avatar" value={formData.avatar || ''} onChange={(url) => setFormData({...formData, avatar: url})} />
`);

// Users
createPages('users', 'users', ['Email', 'Role'], { email: '', name: '', role: 'USER', password: '', avatar: '' }, `
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
`);

console.log('Successfully generated all pages!');
