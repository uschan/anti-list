import React from 'react';
import { Rule, Category } from '../types';
import { TrendingUp, Briefcase, GraduationCap, User } from 'lucide-react';

interface Props {
  rule: Rule;
}

const CategoryIcon = ({ category }: { category: Category }) => {
  switch (category) {
    case Category.Investment: return <TrendingUp size={12} />;
    case Category.Business: return <Briefcase size={12} />;
    case Category.Education: return <GraduationCap size={12} />;
    case Category.Personal: return <User size={12} />;
  }
};

const CategoryStyle = (category: Category) => {
  switch (category) {
    case Category.Investment: return 'text-neon-green border-neon-green/30 bg-neon-green/10';
    case Category.Business: return 'text-neon-blue border-neon-blue/30 bg-neon-blue/10';
    case Category.Education: return 'text-neon-purple border-neon-purple/30 bg-neon-purple/10';
    case Category.Personal: return 'text-pink-500 border-pink-500/30 bg-pink-500/10';
  }
};

export const RuleCard: React.FC<Props> = ({ rule }) => {
  return (
    <div className="group relative h-full">
      {/* Glow Effect behind */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-sm opacity-0 group-hover:opacity-30 blur transition duration-500" />
      
      <div className="relative h-full bg-cyber-dark/80 backdrop-blur-md border border-white/10 p-5 rounded-sm hover:border-neon-blue/50 transition-all duration-300 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-none text-[10px] uppercase tracking-wider font-mono border ${CategoryStyle(rule.category)}`}>
            <CategoryIcon category={rule.category} />
            {rule.category}
          </span>
          <span className="text-xs font-mono text-white/30 group-hover:text-neon-blue transition-colors">
            NO.{rule.id.toString().padStart(3, '0')}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-white mb-3 leading-tight font-sans group-hover:text-neon-blue transition-colors">
          {rule.title}
        </h3>
        
        <p className="text-sm text-gray-400 leading-relaxed font-light mt-auto">
          {rule.description}
        </p>
        
        {/* Decorative corner accent */}
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-neon-blue transition-colors rounded-br-sm" />
      </div>
    </div>
  );
};
