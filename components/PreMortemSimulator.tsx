import React, { useState, useEffect } from 'react';
import { RULES } from '../constants';
import { Icon } from './Icon';

interface FatalMistake {
  ruleId: number;
  contribution: string;
}

interface AutopsyReport {
  dateOfDeath: string;
  causeOfDeath: string;
  fatalMistakes: FatalMistake[];
  autopsyLog: string;
}

export const PreMortemSimulator: React.FC = () => {
  const [project, setProject] = useState('');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<AutopsyReport | null>(null);
  const [typedLog, setTypedLog] = useState('');

  // Typewriter effect for the log
  useEffect(() => {
    if (report?.autopsyLog) {
      setTypedLog('');
      let i = 0;
      const speed = 20; 
      const interval = setInterval(() => {
        if (i < report.autopsyLog.length) {
          setTypedLog((prev) => prev + report.autopsyLog.charAt(i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }
  }, [report]);

  const runSimulation = async () => {
    if (!project.trim()) return;
    
    setLoading(true);
    setReport(null);
    setTypedLog('');

    try {
      const response = await fetch('/api/pre-mortem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ project })
      });

      if (!response.ok) {
        throw new Error('Simulation Failed');
      }

      const data = await response.json();
      setReport(data);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto min-h-[600px] animate-fade-in pb-12">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-red-500/30 bg-red-500/5 rounded-none mb-4">
           <Icon name="Skull" size={14} className="text-red-500" />
           <span className="text-red-500 font-mono text-xs tracking-widest">SIMULATION: PRE-MORTEM</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 font-sans uppercase tracking-tight">
          项目 <span className="text-red-500">验尸报告</span>
        </h2>
        <p className="text-gray-500 font-mono text-sm max-w-lg mx-auto">
          "想要活下来，首先要明白自己会怎么死。" <br/>
          输入你的计划。我们将模拟其灾难性的失败。
        </p>
      </div>

      {/* Input Section */}
      <div className="relative max-w-2xl mx-auto mb-16 group z-10">
        <div className="absolute -inset-1 bg-red-500/20 rounded-sm blur-md opacity-50 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative bg-black border border-red-500/30 p-1 flex">
          <input 
            type="text" 
            value={project}
            onChange={(e) => setProject(e.target.value)}
            placeholder="输入项目/想法名称 (例如：'杠杆收购一家科技初创公司')"
            className="flex-grow bg-transparent text-white font-mono px-4 py-3 focus:outline-none placeholder-red-900/50 text-sm"
          />
          <button 
            onClick={runSimulation}
            disabled={loading || !project.trim()}
            className="bg-red-500/10 text-red-500 border-l border-red-500/30 px-6 py-2 font-mono text-xs font-bold hover:bg-red-500 hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? '正在模拟死亡...' : '启动验尸'}
          </button>
        </div>
      </div>

      {/* Report Container */}
      {(loading || report) && (
        <div className="relative border border-red-500/20 bg-black/80 backdrop-blur-sm rounded-sm overflow-hidden min-h-[400px]">
           {/* Top Bar decoration */}
           <div className="h-1 bg-gradient-to-r from-red-900 via-red-500 to-red-900"></div>
           <div className="flex justify-between items-center p-2 border-b border-red-500/10 bg-red-500/5">
             <span className="text-[10px] font-mono text-red-500 tracking-widest">FILE_ID: DEATH_SIM_2030</span>
             <span className="text-[10px] font-mono text-red-500/50">CLASSIFIED</span>
           </div>

           {loading ? (
             <div className="absolute inset-0 flex flex-col items-center justify-center">
               <Icon name="Activity" size={48} className="text-red-500 animate-pulse mb-4" />
               <span className="font-mono text-red-500 text-xs tracking-widest animate-pulse">CALCULATING FAILURE VECTORS...</span>
             </div>
           ) : report && (
             <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
               
               {/* Column 1: Vital Stats */}
               <div className="md:col-span-1 border-r border-red-500/10 pr-6 space-y-6">
                 <div>
                   <label className="block text-[10px] font-mono text-gray-500 uppercase mb-1">Status (状态)</label>
                   <div className="text-3xl font-bold text-red-600 font-sans tracking-tight">TERMINATED</div>
                 </div>
                 
                 <div>
                   <label className="block text-[10px] font-mono text-gray-500 uppercase mb-1">Time of Death (死亡时间)</label>
                   <div className="font-mono text-white text-lg">{report.dateOfDeath}</div>
                 </div>

                 <div>
                   <label className="block text-[10px] font-mono text-gray-500 uppercase mb-1">Primary Cause (死因)</label>
                   <div className="text-red-400 font-bold leading-tight">{report.causeOfDeath}</div>
                 </div>

                 <div className="pt-8 mt-8 border-t border-red-500/10">
                    <Icon name="FileWarning" className="text-red-900/50 w-24 h-24 mx-auto" strokeWidth={1} />
                 </div>
               </div>

               {/* Column 2 & 3: Narrative & Evidence */}
               <div className="md:col-span-2 space-y-8">
                 
                 {/* Narrative Log */}
                 <div>
                   <h3 className="text-red-500 text-xs font-mono font-bold uppercase mb-3 flex items-center gap-2">
                     <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                     法医陈述 (Forensic Narrative)
                   </h3>
                   <div className="bg-red-950/10 border border-red-500/10 p-4 rounded-sm min-h-[120px]">
                     <p className="font-mono text-sm text-red-100/80 leading-relaxed whitespace-pre-wrap">
                       {typedLog}
                       <span className="animate-pulse inline-block w-2 h-4 bg-red-500 ml-1 align-middle"></span>
                     </p>
                   </div>
                 </div>

                 {/* Fatal Mistakes */}
                 <div>
                   <h3 className="text-red-500 text-xs font-mono font-bold uppercase mb-3 flex items-center gap-2">
                     <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                     过失证据 (Protocol Violations)
                   </h3>
                   <div className="space-y-3">
                     {report.fatalMistakes.map((mistake, idx) => {
                       const rule = RULES.find(r => r.id === mistake.ruleId);
                       return (
                         <div key={idx} className="group flex items-start gap-4 p-3 border border-red-500/10 hover:border-red-500/40 hover:bg-red-500/5 transition-all">
                           <div className="shrink-0 flex flex-col items-center">
                              <span className="text-[10px] text-red-500/50 font-mono">违规</span>
                              <span className="text-lg font-bold text-red-500 font-mono">#{mistake.ruleId}</span>
                           </div>
                           <div>
                             <h4 className="text-white font-bold text-sm mb-1">{rule?.title}</h4>
                             <p className="text-xs text-gray-400 mb-2">{rule?.description}</p>
                             <p className="text-xs text-red-300 italic border-l-2 border-red-500/30 pl-2">
                               "{mistake.contribution}"
                             </p>
                           </div>
                         </div>
                       );
                     })}
                   </div>
                 </div>

               </div>
             </div>
           )}
        </div>
      )}
    </div>
  );
};