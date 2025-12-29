import React from 'react';
import { Icon } from './Icon';

export const Guide: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in pb-12">
      
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 bg-white/5 rounded-none mb-4">
           <Icon name="FileText" size={14} className="text-white" />
           <span className="text-white/60 font-mono text-xs tracking-widest">DOCUMENTATION</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-sans uppercase tracking-tight">
          系统操作手册 <span className="text-gray-500">// MANUAL</span>
        </h2>
        <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
          本系统集成三个基于“逆向思维”的 AI 模块。以下是每个模块的功能定义与使用协议。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        
        {/* Tool 1: Decision Oracle */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-neon-green/20 blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-cyber-black border border-white/10 p-8 flex flex-col md:flex-row gap-8">
             <div className="w-16 h-16 bg-neon-green/10 border border-neon-green/30 flex items-center justify-center shrink-0">
               <Icon name="Search" className="text-neon-green" size={32} />
             </div>
             <div className="flex-grow">
               <div className="flex items-center gap-4 mb-4">
                 <h3 className="text-2xl font-bold text-white font-sans">决策神谕 (Decision Oracle)</h3>
                 <span className="px-2 py-0.5 bg-neon-green/10 text-neon-green border border-neon-green/20 text-[10px] font-mono">RISK SCANNER</span>
               </div>
               <p className="text-gray-300 mb-6 leading-relaxed">
                 这是一个基于“过滤器”逻辑的工具。它不关心你的想法有多天才，只关心你是否犯了 80 条清单中的错误。
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono bg-white/5 p-4 border border-white/10">
                 <div>
                   <span className="text-white/40 block mb-1 uppercase tracking-widest text-[10px]">输入建议 (Input)</span>
                   <p className="text-neon-blue">具体的决策或困境。</p>
                   <p className="text-gray-500 text-xs mt-1">例：“我想抄底这只跌了50%的股票。”</p>
                 </div>
                 <div>
                   <span className="text-white/40 block mb-1 uppercase tracking-widest text-[10px]">输出逻辑 (Output)</span>
                   <p className="text-white">APPROVED / REJECTED / WARNING</p>
                   <p className="text-gray-500 text-xs mt-1">系统会扫描决策是否违反具体规则。</p>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Tool 2: Pre-Mortem */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-red-500/20 blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-cyber-black border border-white/10 p-8 flex flex-col md:flex-row gap-8">
             <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0">
               <Icon name="Skull" className="text-red-500" size={32} />
             </div>
             <div className="flex-grow">
               <div className="flex items-center gap-4 mb-4">
                 <h3 className="text-2xl font-bold text-white font-sans">事前验尸 (Pre-Mortem Simulator)</h3>
                 <span className="px-2 py-0.5 bg-red-500/10 text-red-500 border border-red-500/20 text-[10px] font-mono">FAILURE SIMULATION</span>
               </div>
               <p className="text-gray-300 mb-6 leading-relaxed">
                 逆向思维的极致应用。假设项目已经失败（死亡），AI 扮演来自未来的法医，倒推死因。这能帮助你发现“盲区”。
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono bg-white/5 p-4 border border-white/10">
                 <div>
                   <span className="text-white/40 block mb-1 uppercase tracking-widest text-[10px]">输入建议 (Input)</span>
                   <p className="text-red-400">一个准备启动的项目或计划。</p>
                   <p className="text-gray-500 text-xs mt-1">例：“我想辞职全职做独立开发。”</p>
                 </div>
                 <div>
                   <span className="text-white/40 block mb-1 uppercase tracking-widest text-[10px]">输出逻辑 (Output)</span>
                   <p className="text-white">尸检报告 (Autopsy Report)</p>
                   <p className="text-gray-500 text-xs mt-1">包含具体的死亡时间、死因和导致的违规操作。</p>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Tool 3: Anti-Mentor */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-white/20 blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-cyber-black border border-white/10 p-8 flex flex-col md:flex-row gap-8">
             <div className="w-16 h-16 bg-white/5 border border-white/20 flex items-center justify-center shrink-0">
               <Icon name="MessageSquareX" className="text-white" size={32} />
             </div>
             <div className="flex-grow">
               <div className="flex items-center gap-4 mb-4">
                 <h3 className="text-2xl font-bold text-white font-sans">反向导师 (Anti-Mentor)</h3>
                 <span className="px-2 py-0.5 bg-white/10 text-white border border-white/20 text-[10px] font-mono">PHILOSOPHICAL CHAT</span>
               </div>
               <p className="text-gray-300 mb-6 leading-relaxed">
                 一个拒绝提供“成功捷径”的对话伙伴。它结合了段永平的务实与斯多葛学派的冷峻。它只告诉你什么是不该做的。
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono bg-white/5 p-4 border border-white/10">
                 <div>
                   <span className="text-white/40 block mb-1 uppercase tracking-widest text-[10px]">输入建议 (Input)</span>
                   <p className="text-white">开放式的困惑或对话。</p>
                   <p className="text-gray-500 text-xs mt-1">例：“为什么我总是拿不住好股票？”</p>
                 </div>
                 <div>
                   <span className="text-white/40 block mb-1 uppercase tracking-widest text-[10px]">输出逻辑 (Output)</span>
                   <p className="text-white">哲学批判 (Critical Insight)</p>
                   <p className="text-gray-500 text-xs mt-1">引用具体的“不为清单”条款，并进行哲学层面的降维打击。</p>
                 </div>
               </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};