import React from 'react';
import { Principle } from '../types';
import { Icon } from './Icon';

interface Props {
  principle: Principle;
}

export const PrincipleCard: React.FC<Props> = ({ principle }) => {
  return (
    <div className="relative group h-full">
      <div className="h-full bg-cyber-gray/40 backdrop-blur-xl border border-white/10 rounded-sm p-6 hover:bg-cyber-gray/60 hover:border-neon-blue/40 transition-all duration-300 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-neon-blue group-hover:text-white group-hover:bg-neon-blue group-hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300">
             <Icon name={principle.iconName} size={24} />
          </div>
          <span className="font-mono text-xs text-white/20">SYS_0{principle.id}</span>
        </div>
        
        <h3 className="font-bold text-xl text-white mb-2 leading-tight tracking-wide group-hover:text-neon-blue transition-colors">
          {principle.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-light border-l-2 border-white/10 pl-3">
          {principle.description}
        </p>
        
        <div className="pt-4 border-t border-dashed border-white/10 mt-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-neon-purple rounded-full animate-pulse"></span>
            <span className="text-[10px] font-mono font-semibold text-white/40 uppercase tracking-widest">
              Linked Protocols
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {principle.relatedRules.slice(0, 8).map(id => (
              <span key={id} className="inline-flex items-center justify-center w-6 h-6 rounded-none border border-white/10 bg-black/20 text-white/60 hover:text-neon-blue hover:border-neon-blue/50 text-[10px] font-mono transition-colors">
                {id}
              </span>
            ))}
            {principle.relatedRules.length > 8 && (
              <span className="inline-flex items-center justify-center px-1.5 h-6 rounded-none border border-white/10 bg-white/5 text-white/40 text-[10px] font-mono">
                +{principle.relatedRules.length - 8}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
