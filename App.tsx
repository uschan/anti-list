import React, { useState, useMemo } from 'react';
import { RULES, PRINCIPLES } from './constants';
import { Category, ViewMode } from './types';
import { RuleCard } from './components/RuleCard';
import { PrincipleCard } from './components/PrincipleCard';
import { FilterBar } from './components/FilterBar';
import { DecisionOracle } from './components/DecisionOracle';
import { PreMortemSimulator } from './components/PreMortemSimulator';
import { AntiMentorChat } from './components/AntiMentorChat';
import { LandingPage } from './components/LandingPage';
import { Guide } from './components/Guide';
import { Icon } from './components/Icon';

const App: React.FC = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Derived state
  const filteredRules = useMemo(() => {
    return RULES.filter(rule => {
      const matchesCategory = selectedCategory === 'All' || rule.category === selectedCategory;
      const matchesSearch = 
        rule.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        rule.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rule.id.toString() === searchQuery;
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Count distribution
  const counts = useMemo(() => {
    const c: Record<string, number> = { All: RULES.length };
    Object.values(Category).forEach(cat => {
      c[cat] = RULES.filter(r => r.category === cat).length;
    });
    return c;
  }, []);

  // Determine ambient glow color based on view mode
  const getGlowColor = () => {
    switch (viewMode) {
      case 'pre_mortem': return 'bg-red-500/20';
      case 'oracle': return 'bg-neon-green/10';
      case 'anti_mentor': return 'bg-white/10';
      case 'guide': return 'bg-blue-500/10';
      case 'system': return 'bg-neon-purple/20';
      default: return 'bg-neon-blue/10';
    }
  };

  // Helper to close menu and set view
  const handleNavClick = (mode: ViewMode) => {
    setViewMode(mode);
    setIsMobileMenuOpen(false);
  };

  // --- Render Landing Page ---
  if (showLanding) {
    return <LandingPage onEnter={() => setShowLanding(false)} />;
  }

  // --- Render Main App ---
  return (
    <div className="min-h-screen text-white relative selection:bg-neon-blue selection:text-black animate-fade-in">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-grid z-[-1] opacity-40"></div>
      
      {/* Decorative Top Glow - Dynamic color */}
      <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[100px] blur-[100px] rounded-full z-[-1] transition-colors duration-700 ${getGlowColor()}`}></div>

      {/* --- Header --- */}
      <header className="sticky top-0 z-40 bg-cyber-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row justify-between items-center h-16 md:h-20">
            
            {/* Logo Area */}
            <div className="flex items-center space-x-4 cursor-pointer group" onClick={() => setShowLanding(true)}>
              <div className={`relative w-10 h-10 flex items-center justify-center border border-white/20 bg-white/5 rounded-sm transition-all
                ${viewMode === 'pre_mortem' ? 'group-hover:border-red-500' : viewMode === 'anti_mentor' ? 'group-hover:border-white' : 'group-hover:border-neon-blue'}
                group-hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]
              `}>
                <Icon name="CircleOff" size={20} className={`text-white transition-colors
                  ${viewMode === 'pre_mortem' ? 'group-hover:text-red-500' : 'group-hover:text-neon-blue'}
                `} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold tracking-tight text-white font-sans">
                  ANTI-LIST <span className={`${viewMode === 'pre_mortem' ? 'text-red-500' : viewMode === 'anti_mentor' ? 'text-white' : 'text-neon-blue'}`}>SYSTEM</span>
                </h1>
                <span className="text-[10px] font-mono text-white/40 tracking-widest group-hover:text-white transition-colors">BACK TO HOME</span>
              </div>
            </div>

            {/* Desktop Navigation (Hidden on Mobile) */}
            <nav className="hidden md:flex items-center space-x-1 bg-white/5 p-1 rounded-sm border border-white/10">
              <button
                onClick={() => handleNavClick('list')}
                className={`whitespace-nowrap px-4 py-1.5 text-xs font-mono font-medium rounded-sm transition-all ${viewMode === 'list' ? 'bg-neon-blue text-black shadow-[0_0_10px_rgba(0,240,255,0.5)]' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
              >
                ./清单数据库
              </button>
              <button
                onClick={() => handleNavClick('system')}
                className={`whitespace-nowrap px-4 py-1.5 text-xs font-mono font-medium rounded-sm transition-all ${viewMode === 'system' ? 'bg-neon-purple text-white shadow-[0_0_10px_rgba(112,0,255,0.5)]' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
              >
                ./系统分析
              </button>
              
              <div className="w-px h-4 bg-white/10 mx-1"></div>

              <button
                onClick={() => handleNavClick('oracle')}
                className={`whitespace-nowrap flex items-center gap-2 px-4 py-1.5 text-xs font-mono font-medium rounded-sm transition-all ${viewMode === 'oracle' ? 'bg-neon-green text-black shadow-[0_0_10px_rgba(10,255,10,0.5)]' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
              >
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75 ${viewMode === 'oracle' ? 'hidden' : 'block'}`}></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                </span>
                决策神谕
              </button>
              <button
                onClick={() => handleNavClick('pre_mortem')}
                className={`whitespace-nowrap flex items-center gap-2 px-4 py-1.5 text-xs font-mono font-medium rounded-sm transition-all ${viewMode === 'pre_mortem' ? 'bg-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.5)]' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
              >
                <Icon name="Skull" size={12} />
                事前验尸
              </button>
              <button
                onClick={() => handleNavClick('anti_mentor')}
                className={`whitespace-nowrap flex items-center gap-2 px-4 py-1.5 text-xs font-mono font-medium rounded-sm transition-all ${viewMode === 'anti_mentor' ? 'bg-white text-black shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
              >
                <Icon name="MessageSquareX" size={12} />
                反向导师
              </button>

              <div className="w-px h-4 bg-white/10 mx-1"></div>

              <button
                onClick={() => handleNavClick('guide')}
                className={`whitespace-nowrap flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium rounded-sm transition-all ${viewMode === 'guide' ? 'bg-gray-700 text-white' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
                title="使用指南"
              >
                <Icon name="HelpCircle" size={14} />
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* --- Mobile Floating Navigation Widget --- */}
      <div className="md:hidden fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        
        {/* Expanded Menu Items */}
        {isMobileMenuOpen && (
          <div className="flex flex-col gap-2 items-end animate-fade-in-up origin-bottom">
            <button
              onClick={() => handleNavClick('guide')}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-full backdrop-blur-md border shadow-lg transition-all ${viewMode === 'guide' ? 'bg-gray-700 border-gray-500 text-white' : 'bg-cyber-black/90 border-white/10 text-gray-300'}`}
            >
              <span className="text-xs font-mono">使用指南</span>
              <Icon name="HelpCircle" size={16} />
            </button>

            <button
              onClick={() => handleNavClick('anti_mentor')}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-full backdrop-blur-md border shadow-lg transition-all ${viewMode === 'anti_mentor' ? 'bg-white text-black border-white' : 'bg-cyber-black/90 border-white/10 text-gray-300'}`}
            >
              <span className="text-xs font-mono">反向导师</span>
              <Icon name="MessageSquareX" size={16} />
            </button>

            <button
              onClick={() => handleNavClick('pre_mortem')}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-full backdrop-blur-md border shadow-lg transition-all ${viewMode === 'pre_mortem' ? 'bg-red-600 text-white border-red-500' : 'bg-cyber-black/90 border-white/10 text-gray-300'}`}
            >
              <span className="text-xs font-mono">事前验尸</span>
              <Icon name="Skull" size={16} />
            </button>

            <button
              onClick={() => handleNavClick('oracle')}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-full backdrop-blur-md border shadow-lg transition-all ${viewMode === 'oracle' ? 'bg-neon-green text-black border-neon-green' : 'bg-cyber-black/90 border-white/10 text-gray-300'}`}
            >
              <span className="text-xs font-mono">决策神谕</span>
               <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75 ${viewMode === 'oracle' ? 'hidden' : 'block'}`}></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                </span>
            </button>

            <button
              onClick={() => handleNavClick('system')}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-full backdrop-blur-md border shadow-lg transition-all ${viewMode === 'system' ? 'bg-neon-purple text-white border-neon-purple' : 'bg-cyber-black/90 border-white/10 text-gray-300'}`}
            >
              <span className="text-xs font-mono">系统分析</span>
              <Icon name="Cpu" size={16} />
            </button>

            <button
              onClick={() => handleNavClick('list')}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-full backdrop-blur-md border shadow-lg transition-all ${viewMode === 'list' ? 'bg-neon-blue text-black border-neon-blue' : 'bg-cyber-black/90 border-white/10 text-gray-300'}`}
            >
              <span className="text-xs font-mono">清单数据库</span>
              <Icon name="LayoutGrid" size={16} />
            </button>
          </div>
        )}

        {/* Toggle Button (FAB) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`
            w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.3)] border transition-all duration-300
            ${isMobileMenuOpen 
              ? 'bg-white text-black border-white rotate-90' 
              : 'bg-cyber-black/80 backdrop-blur-md border-neon-blue text-neon-blue'}
          `}
        >
          <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>


      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* --- View: Guide (Manual) --- */}
        {viewMode === 'guide' && <Guide />}

        {/* --- View: Anti-Mentor (AI) --- */}
        {viewMode === 'anti_mentor' && <AntiMentorChat />}

        {/* --- View: Pre-Mortem (AI) --- */}
        {viewMode === 'pre_mortem' && <PreMortemSimulator />}

        {/* --- View: Oracle (AI) --- */}
        {viewMode === 'oracle' && <DecisionOracle />}

        {/* --- View: System Analysis --- */}
        {viewMode === 'system' && (
          <div className="animate-fade-in space-y-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-4 px-3 py-1 border border-neon-purple/30 bg-neon-purple/10 rounded-full">
                <span className="text-neon-purple font-mono text-xs tracking-widest">SYSTEM_ARCHITECTURE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">“不为”的底层逻辑</h2>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                一个 <strong className="text-neon-blue font-normal">反脆弱框架</strong>，旨在最小化灾难性错误向量。
                <br/>优化目标：通过负向选择实现生存。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRINCIPLES.map(principle => (
                <PrincipleCard key={principle.id} principle={principle} />
              ))}
            </div>

            <div className="relative overflow-hidden rounded-sm border border-neon-blue/30 bg-gradient-to-b from-cyber-gray to-black p-12 text-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>
              <h3 className="text-2xl font-bold mb-6 font-mono text-neon-blue">&lt;CORE_PHILOSOPHY /&gt;</h3>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-xl font-light italic">
                "It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent."
                （令人惊讶的是，像我们这样的人通过试图保持“不犯蠢”，而不是试图变得非常聪明，获得了多少长期优势。）
              </p>
              <cite className="not-italic font-mono text-sm text-neon-purple tracking-widest uppercase">— Charlie Munger</cite>
            </div>
          </div>
        )}

        {/* --- View: Inventory List --- */}
        {viewMode === 'list' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4 opacity-70">
                 <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></span>
                 <span className="font-mono text-xs text-neon-blue tracking-widest">SYSTEM_ONLINE</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight font-sans">
                VIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">NEGATIVA</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto font-mono text-sm border-l-2 border-neon-blue/50 pl-4 text-left md:text-center md:border-l-0 md:pl-0">
                80 Protocols for Investment, Business, & Life.<br/>
                执行命令: <span className="text-neon-blue">AVOID_FAILURE()</span>
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col items-center gap-8 mb-16">
              <div className="relative w-full max-w-lg group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-sm opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                <div className="relative flex items-center bg-cyber-black border border-white/20 rounded-sm overflow-hidden focus-within:border-neon-blue transition-colors">
                  <div className="pl-4 text-white/40">
                    <span className="font-mono text-neon-blue mr-2">$</span>
                    <span className="font-mono">grep</span>
                  </div>
                  <input
                    type="text"
                    placeholder="输入关键词搜索..."
                    className="w-full bg-transparent border-none text-white px-3 py-4 font-mono text-sm focus:ring-0 placeholder-white/20 caret-neon-blue"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="pr-4 text-white/20">
                    <Icon name="Search" size={16} />
                  </div>
                </div>
              </div>

              <FilterBar 
                selectedCategory={selectedCategory} 
                onSelect={setSelectedCategory} 
                counts={counts} 
              />
            </div>

            {/* Results Grid */}
            {filteredRules.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredRules.map((rule) => (
                  <RuleCard key={rule.id} rule={rule} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 border border-dashed border-white/10 rounded-sm bg-white/5">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4 text-white/20">
                  <Icon name="BookOpen" size={32} />
                </div>
                <h3 className="text-xl font-mono text-white mb-2">ERROR_404: NO_DATA</h3>
                <p className="text-gray-500 font-mono text-sm">请调整搜索关键词重试。</p>
                <button 
                  onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                  className="mt-6 px-6 py-2 border border-neon-blue text-neon-blue font-mono text-xs hover:bg-neon-blue hover:text-black transition-colors"
                >
                  重置筛选
                </button>
              </div>
            )}
          </div>
        )}

      </main>

      <footer className="border-t border-white/10 bg-cyber-black mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs font-mono">
            // PROTOCOL: DUAN_YONGPING // DESIGN: CYBER_OS
          </p>
          
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

export default App;