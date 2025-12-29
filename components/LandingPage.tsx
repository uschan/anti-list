import React from 'react';
import { Icon } from './Icon';

interface Props {
  onEnter: () => void;
}

export const LandingPage: React.FC<Props> = ({ onEnter }) => {
  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-hidden relative selection:bg-neon-blue selection:text-black font-sans">
      
      {/* Background Elements */}
      <div className="fixed inset-0 bg-grid opacity-30 z-0"></div>
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] bg-neon-blue/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-neon-purple/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      {/* --- Navbar --- */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 h-20 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <Icon name="CircleOff" className="text-neon-blue" size={24} />
          <span className="font-bold tracking-tight text-lg">ANTI-LIST <span className="font-mono text-xs text-gray-500 ml-1">SYSTEM_OS</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-mono text-gray-400">
          <span>v1.0.4</span>
          <span className="text-neon-green flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse"></span>
            OPERATIONAL
          </span>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-20 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 animate-fade-in">
          <Icon name="ShieldCheck" size={12} className="text-neon-blue" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-gray-300">The Architecture of Survival</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple">不为</span><br/>
          的艺术。
        </h1>
        
        <p className="max-w-2xl text-sm md:text-xl text-gray-400 mb-12 font-light leading-relaxed">
          成功不在于变得更聪明，而在于始终“不犯蠢”。<br/>
          基于段永平 80 条商业与人生公理构建的 AI 决策辅助系统。
        </p>

        <button 
          onClick={onEnter}
          className="group relative px-8 py-4 bg-neon-blue text-black font-bold font-mono tracking-wider hover:bg-white transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            INITIALIZE_SYSTEM <Icon name="ChevronRight" size={16} />
          </span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
        </button>

        <div className="mt-16 flex items-center gap-8 text-gray-600 font-mono text-xs uppercase tracking-widest">
          <span>Trusted Methodology</span>
          <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
          <span>AI-Enhanced Logic</span>
          <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
          <span>Via Negativa</span>
        </div>
      </section>

      {/* --- Features Grid --- */}
      <section className="relative z-10 border-t border-white/10 bg-cyber-dark/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { 
                icon: "BookOpen", 
                title: "80条不为清单", 
                desc: "关于投资、商业与生活的完整“不为”协议数据库。" 
              },
              { 
                icon: "Cpu", 
                title: "系统性分析", 
                desc: "从原始数据中提炼出的思维模型与底层逻辑。" 
              },
              { 
                icon: "Skull", 
                title: "事前验尸", 
                desc: "在项目启动前，利用 AI 模拟其死亡过程，以此逆推风险。" 
              },
              { 
                icon: "MessageSquareX", 
                title: "反向导师", 
                desc: "一个只会给你警告、拒绝提供捷径的 AI 导师。" 
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-cyber-black p-8 group hover:bg-white/5 transition-colors duration-300">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-neon-blue group-hover:text-white group-hover:border-neon-blue transition-all">
                  <Icon name={feature.icon} size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-sans text-white">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-mono">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Trust & Philosophy --- */}
      <section className="relative z-10 py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 border border-neon-purple/30 bg-neon-purple/10 rounded-full mb-6">
              <span className="text-neon-purple font-mono text-xs tracking-widest">CORE PHILOSOPHY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans">基于“逆向思维”模型。</h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              大多数系统试图教你“如何赢”，而这个系统教你“如何不输”。
              剔除错误、偏见和致命风险，成功将是唯一的剩余选项。
            </p>
            
            <ul className="space-y-4 font-mono text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <Icon name="CheckCircle2" size={16} className="text-neon-green" />
                <span>商业致命错误的模式识别</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="CheckCircle2" size={16} className="text-neon-green" />
                <span>斯多葛式的情绪调节协议</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="CheckCircle2" size={16} className="text-neon-green" />
                <span>长期价值的过滤算法</span>
              </li>
            </ul>
          </div>

          <div className="relative">
             {/* Decorative UI Card */}
             <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 blur-lg"></div>
             <div className="relative bg-black border border-white/10 p-8 rounded-sm">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                  <div className="w-12 h-12 bg-gray-800 rounded-full overflow-hidden flex items-center justify-center">
                    <span className="font-bold text-gray-500">CM</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">Charlie Munger</div>
                    <div className="text-xs font-mono text-gray-500">Vice Chairman, Berkshire Hathaway</div>
                  </div>
                  <Icon name="Quote" className="ml-auto text-white/20" size={32} />
                </div>
                <p className="text-sm font-light italic text-gray-300 leading-relaxed">
                  "All I want to know is where I'm going to die, so I'll never go there."
                  (我只想知道我将来会死在哪里，这样我就永远不去那里。)
                </p>
             </div>
             
             <div className="relative bg-black border border-white/10 p-8 rounded-sm mt-4 ml-8 border-l-4 border-l-neon-blue">
                <div className="flex items-center gap-4 mb-4">
                  <div className="font-mono text-xs text-neon-blue">SYSTEM_ORIGIN</div>
                </div>
                <p className="text-sm font-light text-gray-300 leading-relaxed">
                  "Stop doing the wrong things, and the right things happen naturally."
                  (停止做错误的事情，正确的事情就会自然发生。)
                </p>
                <div className="mt-4 text-sm font-bold text-white">— Duan Yongping (段永平)</div>
             </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="relative z-10 border-t border-white/10 bg-black py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex flex-col">
             <span className="font-bold text-white tracking-tight">ANTI-LIST SYSTEM</span>
             <span className="text-xs text-gray-600 font-mono mt-1">© 2024 CYBER_OS // ALL RIGHTS RESERVED</span>
           </div>
           
           {/* Social Capsule */}
           <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
             <a href="https://x.com/uschan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-1" title="X (Twitter)">
                <Icon name="Twitter" size={16} />
             </a>
             <a href="https://github.com/uschan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-1" title="GitHub">
                <Icon name="Github" size={16} />
             </a>
             <a href="https://www.instagram.com/bujjun" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-1" title="Instagram">
                <Icon name="Instagram" size={16} />
             </a>
             <a href="https://bsky.app/profile/wildsalt.bsky.social" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-1" title="Bluesky">
                <Icon name="Cloud" size={16} />
             </a>
             <a href="https://paypal.me/wildsaltme?utm_source=wildsalt.me" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-1" title="PayPal">
                <Icon name="CreditCard" size={16} />
             </a>
             <a href="https://discord.gg/26nJEhq6Yj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-1" title="Discord">
                <Icon name="Gamepad2" size={16} />
             </a>
             <div className="w-px h-4 bg-white/20 mx-1"></div>
             <a href="https://wildsalt.me/" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:text-white transition-colors p-1" title="WildSalt">
                <Icon name="Tent" size={16} />
             </a>
           </div>
        </div>
      </footer>

    </div>
  );
};