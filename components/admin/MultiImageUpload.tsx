'use client';

import React, { useState, useRef } from 'react';

interface MultiImageUploadProps {
  values: string[];
  onChange: (urls: string[]) => void;
  label?: string;
  className?: string;
}

export default function MultiImageUpload({ values, onChange, label = 'Gallery Images', className = '' }: MultiImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        onChange([...values, data.url]);
      } else {
        setError(data.message || 'Upload failed');
      }
    } catch (err) {
      setError('An error occurred during upload');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const removeImage = (index: number) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    onChange(newValues);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <label className="block text-sm font-medium text-slate-300">{label}</label>
      
      <div className="flex flex-wrap gap-4">
        {values.map((url, index) => (
          <div key={index} className="relative w-24 h-24 rounded-xl overflow-hidden border border-slate-700 bg-slate-900 group">
            <img src={url} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
            <button 
              type="button"
              onClick={() => removeImage(index)}
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        ))}

        <div className="w-24 h-24 rounded-xl border border-dashed border-slate-700 bg-slate-900/50 flex items-center justify-center cursor-pointer hover:bg-slate-800 transition-colors" onClick={() => fileInputRef.current?.click()}>
          {uploading ? (
            <span className="text-xs text-slate-400">Uploading...</span>
          ) : (
            <svg className="w-8 h-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          )}
        </div>
      </div>

      <input 
        type="file" 
        accept="image/*" 
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden" 
      />
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}
