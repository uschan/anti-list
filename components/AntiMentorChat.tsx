import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { RULES } from '../constants';
import { Icon } from './Icon';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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
  
  const [chatSession, setChatSession] = useState<any>(null);

  useEffect(() => {
    // Initialize Chat Session with Advanced System Instruction
    const rulesContext = RULES.map(r => `[Rule #${r.id}] ${r.title}: ${r.description}`).join('\n');
    
    const systemInstruction = `
      You are the "Anti-Mentor". You are a fusion of a strict Librarian and a Stoic Philosopher.
      
      YOUR OBJECTIVE:
      To protect the user from stupidity by strictly applying Duan Yongping's 80 Rules (The Anti-List) AND providing deep philosophical context.

      LANGUAGE REQUIREMENT:
      **ALL OUTPUT MUST BE IN CHINESE (Simplified).**

      RESPONSE STRUCTURE (STRICTLY FOLLOW THIS):
      
      PART 1: THE LAW (The Citation)
      - First, scan the provided context. Find the specific Rule(s) that apply to the user's query.
      - You MUST quote the rule ID and Title explicitly.
      - Format it like: "**Ref: Rule #X - [Title]**"
      - If no specific rule applies, state "没有找到特定的协议，但一般的原则是……"

      PART 2: THE VOID (The Insight)
      - After citing the rule, explain the *essence* of why violating this is fatal.
      - Do not just paraphrase the description. Go deeper. Use "Via Negativa" (Negative Way).
      - Use metaphors (entropy, gravity, biology, warfare).
      - Tell them what NOT to do. Never give positive "how-to" advice.
      - Tone: Sharp, Cold, Profound.

      EXAMPLE INTERACTION:
      User: "I want to buy this stock because it dropped 50% and looks cheap."
      Model:
      **Ref: Rule #11 - 不因为“便宜”而买**
      **Ref: Rule #28 - 不被股价波动吓跑**
      
      虚空（The Void）:
      你混淆了“价格”与“价值”。仅仅因为今天的数字比昨天小就去买入，这不是投资，这是锚定效应的奴隶。一家下跌了50%的公司，依然可以再下跌100%。市场不欠你一个反弹。除非你比卖家更了解这门生意，否则你就是他们正在寻找的流动性。不要试图徒手接飞刀。
      
      CONTEXT (The Anti-List Axioms):
      ${rulesContext}
    `;

    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });
    setChatSession(chat);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading || !chatSession) return;

    const userMsg = input;
    setInput('');
    setLoading(true);
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);

    try {
      const result = await chatSession.sendMessageStream({ message: userMsg });
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', content: "", verdict: true }]);

      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          fullResponse += c.text;
          setMessages(prev => {
            const newArr = [...prev];
            newArr[newArr.length - 1].content = fullResponse;
            return newArr;
          });
        }
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: "错误：虚空沉默了。检查你的连接。", verdict: false }]);
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
                    : 'bg-black text-gray-200 border-l-4 border-white pl-6 py-6'}
                `}
              >
                {msg.role === 'model' && msg.verdict && (
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