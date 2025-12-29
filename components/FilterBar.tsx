import React from 'react';
import { Category } from '../types';

interface Props {
  selectedCategory: Category | 'All';
  onSelect: (category: Category | 'All') => void;
  counts: Record<string, number>;
}

export const FilterBar: React.FC<Props> = ({ selectedCategory, onSelect, counts }) => {
  const categories = ['All', ...Object.values(Category)];

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat as Category | 'All')}
          className={`
            relative px-5 py-2 text-sm font-mono tracking-wide transition-all duration-200 border rounded-sm group overflow-hidden
            ${selectedCategory === cat 
              ? 'bg-neon-blue/10 border-neon-blue text-neon-blue shadow-[0_0_10px_rgba(0,240,255,0.2)]' 
              : 'bg-transparent border-white/20 text-gray-400 hover:border-white/50 hover:text-white'}
          `}
        >
          {selectedCategory === cat && (
             <span className="absolute inset-0 bg-neon-blue/5 animate-pulse"></span>
          )}
          <span className="relative flex items-center gap-2">
            {selectedCategory === cat && <span className="text-[10px] mr-1">►</span>}
            {cat === 'All' ? '全部' : cat} 
            <span className={`text-[10px] ${selectedCategory === cat ? 'text-neon-blue' : 'text-gray-600 group-hover:text-gray-400'}`}>
              [{counts[cat] || 0}]
            </span>
          </span>
        </button>
      ))}
    </div>
  );
};