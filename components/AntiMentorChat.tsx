import React, { useState, useRef, useEffect } from 'react';
import { Icon } from './Icon';

interface Message {
  role: 'user' | 'model';
  content: string;
  verdict?: boolean;
}

export const AntiMentorChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      content: "我是“不为清单”的守护者。说出你的意图，我将告诉你你正准备打破哪条规则，以及为什么那是一条通往毁灭的道路。",
      verdict: false
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setLoading(true);
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);

    try {
      // We send the current history (filtering out UI state) plus new message
      // Note: In a real app, you might want to limit history length
      const historyPayload = messages.map(m => ({ role: m.role, content: m.content }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, history: historyPayload })
      });

      if (!response.ok) {
        throw new Error("Connection failed");
      }
      
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullResponse = "";
      
      setMessages(prev => [...prev, { role: 'model', content: "", verdict: true }]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          fullResponse += chunk;
          
          setMessages(prev => {
            const newArr = [...prev];
            newArr[newArr.length - 1].content = fullResponse;
            return newArr;
          });
        }
      }
    } catch (error: any) {
      console.error(error);
      const errorMsg = error instanceof Error ? error.message : "未知连接错误";
      setMessages(prev => [...prev, { 
        role: 'model', 
        content: `⚠️ 系统错误: ${errorMsg}\n\n(服务器连接失败)`, 
        verdict: false 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="max-w-3xl mx-auto h-[700px] flex flex-col animate-fade-in relative">
      
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          <Icon name="MessageSquareX" size={24} className="text-black" />
        </div>
        <h2 className="text-2xl font-bold text-white font-sans tracking-tight">反向导师</h2>
        <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mt-1">
          协议匹配 & 逻辑倒置
        </p>
      </div>

      {/* Chat Window */}
      <div className="flex-grow bg-cyber-dark border border-white/10 rounded-sm overflow-hidden flex flex-col relative group">
        {/* CRT Scanline effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none z-10 opacity-20"></div>
        
        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent z-0">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`
                  max-w-[85%] p-5 rounded-sm font-mono text-sm leading-7 relative shadow-lg whitespace-pre-line
                  ${msg.role === 'user' 
                    ? 'bg-white/10 text-white border border-white/20' 
                    : msg.content.includes('⚠️') ? 'bg-red-900/20 text-red-300 border-l-4 border-red-500 pl-6 py-6' : 'bg-black text-gray-200 border-l-4 border-white pl-6 py-6'}
                `}
              >
                {msg.role === 'model' && msg.verdict && !msg.content.includes('⚠️') && (
                   <div className="absolute -left-[24px] top-0 text-[10px] text-white/40 rotate-90 origin-top-left mt-4 select-none tracking-widest uppercase">
                     Verdict
                   </div>
                )}
                {/* Markdown-like emphasis for the bot */}
                <span className={msg.role === 'model' ? 'font-light tracking-wide text-[15px]' : ''}>
                  {msg.content}
                </span>
              </div>
            </div>
          ))}
          {loading && (
             <div className="flex justify-start animate-pulse">
               <div className="bg-black text-gray-500 border-l-2 border-gray-500 pl-5 p-2 font-mono text-xs">
                 正在检索协议...
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-black border-t border-white/10 z-20">
          <div className="relative flex items-center gap-2">
            <span className="text-white/50 font-mono text-lg">{'>'}</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="查询数据库..."
              className="flex-grow bg-transparent text-white font-mono focus:outline-none placeholder-white/20 h-10"
              autoFocus
            />
            <button 
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="p-2 text-white/50 hover:text-white transition-colors disabled:opacity-30"
            >
              <Icon name="TrendingUp" size={16} className="rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};