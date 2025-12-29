import React, { useState, useRef } from 'react';
import { RULES } from '../constants';
import { Icon } from './Icon';

interface OracleResult {
  verdict: 'APPROVED' | 'REJECTED' | 'WARNING';
  violatedRuleIds: number[];
  analysis: string;
}

export const DecisionOracle: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<OracleResult | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Simulated terminal logs
  const addLog = (msg: string) => {
    setLogs(prev => [...prev.slice(-4), `> ${msg}`]);
  };

  const analyzeDecision = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setResult(null);
    setLogs(['> INITIALIZING_SCAN...', '> CONNECTING_TO_CORE_DB...']);

    try {
      addLog('> UPLOADING_PAYLOAD...');
      
      const response = await fetch('/api/oracle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input })
      });

      if (!response.ok) {
        throw new Error(`Server Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      addLog('> PROCESSING_NEURAL_RESPONSE...');
      setResult(data);
      addLog(`> SCAN_COMPLETE: ${data.verdict}`);

    } catch (error: any) {
      console.error(error);
      const errorMsg = error instanceof Error ? error.message : "Network Error";
      addLog(`> ERROR: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto min-h-[600px] flex flex-col animate-fade-in">
      {/* Header */}
      <div className="mb-8 text-center">
         <div className="inline-flex items-center gap-2 px-3 py-1 border border-neon-green/30 bg-neon-green/5 rounded-none mb-4">
            <span className="w-2 h-2 bg-neon-green animate-pulse rounded-full"></span>
            <span className="text-neon-green font-mono text-xs tracking-widest">PROTOCOL: ORACLE</span>
         </div>
         <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-sans">决策验证器</h2>
         <p className="text-gray-500 font-mono text-sm">输入你的策略。系统将扫描致命错误。</p>
      </div>

      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left: Input Terminal */}
        <div className="flex flex-col bg-cyber-black border border-white/20 rounded-sm p-1 relative overflow-hidden group focus-within:border-neon-blue transition-colors">
          <div className="absolute top-0 left-0 w-full h-6 bg-white/5 flex items-center px-2 gap-2 border-b border-white/10">
            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
            <span className="ml-auto text-[10px] text-white/30 font-mono">USER_INPUT.sh</span>
          </div>
          <textarea 
            ref={textareaRef}
            className="flex-grow bg-transparent text-neon-blue font-mono p-4 mt-6 focus:outline-none resize-none placeholder-white/10 text-sm leading-relaxed"
            placeholder="// 在此描述你的困境或计划...&#10;// 例如: '这只股票跌了50%，看起来很便宜，我想抄底。'"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="p-4 border-t border-white/10 flex justify-between items-center bg-white/5">
            <span className="text-[10px] text-gray-500 font-mono">CHARS: {input.length}</span>
            <button 
              onClick={analyzeDecision}
              disabled={loading || !input.trim()}
              className={`
                px-6 py-2 text-xs font-bold font-mono tracking-wider transition-all
                ${loading 
                  ? 'bg-white/10 text-white/50 cursor-not-allowed' 
                  : 'bg-neon-blue text-black hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]'}
              `}
            >
              {loading ? 'SCANNING...' : '执行扫描 / EXECUTE'}
            </button>
          </div>
        </div>

        {/* Right: Output / Logs */}
        <div className="flex flex-col gap-4">
          
          {/* Status Monitor */}
          <div className="h-32 bg-black border border-white/10 p-4 font-mono text-xs text-neon-green overflow-hidden relative">
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
            <div className="absolute top-2 right-2 text-[10px] text-white/20">SYS_LOGS</div>
            <div className="flex flex-col justify-end h-full gap-1">
              {logs.map((log, i) => (
                <div key={i} className={`opacity-80 break-all ${log.includes('ERROR') ? 'text-red-500' : ''}`}>{log}</div>
              ))}
              {loading && <div className="animate-pulse">_</div>}
            </div>
          </div>

          {/* Result Display */}
          <div className={`flex-grow border border-white/10 rounded-sm relative overflow-hidden transition-all duration-500 ${result ? 'bg-white/5' : 'bg-black'}`}>
            {!result ? (
              <div className="absolute inset-0 flex items-center justify-center flex-col opacity-30">
                <Icon name="ShieldCheck" size={48} className="text-white mb-4" />
                <span className="font-mono text-xs text-white tracking-widest">等待数据输入 / WAITING_FOR_DATA</span>
              </div>
            ) : (
              <div className="p-6 h-full flex flex-col animate-fade-in">
                
                {/* Verdict Header */}
                <div className={`
                  text-center py-4 mb-6 border-b border-dashed border-white/20
                  ${result.verdict === 'REJECTED' ? 'text-red-500' : result.verdict === 'WARNING' ? 'text-yellow-400' : 'text-neon-green'}
                `}>
                  <div className="text-4xl font-bold font-sans tracking-tighter mb-1">{result.verdict}</div>
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-80">
                    {result.verdict === 'APPROVED' ? '未检测到违规' : '协议冲突 / PROTOCOL VIOLATION'}
                  </div>
                </div>

                {/* Analysis Body */}
                <div className="flex-grow">
                   <h4 className="text-white text-xs font-bold font-mono mb-2 uppercase text-neon-blue">// 深度分析报告</h4>
                   <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-white/10 pl-3 mb-6">
                     {result.analysis}
                   </p>

                   {/* Violated Rules List */}
                   {result.violatedRuleIds.length > 0 && (
                     <div>
                       <h4 className="text-red-500 text-xs font-bold font-mono mb-2 uppercase">// 违反的规则</h4>
                       <div className="space-y-2">
                         {result.violatedRuleIds.map(id => {
                            const rule = RULES.find(r => r.id === id);
                            return rule ? (
                              <div key={id} className="bg-red-500/10 border border-red-500/30 p-2 text-xs text-red-200">
                                <span className="font-bold mr-2">[{id}]</span> {rule.title}
                              </div>
                            ) : null;
                         })}
                       </div>
                     </div>
                   )}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};