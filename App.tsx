
import React, { useState } from 'react';
import { Bell, Search, UserCircle2 } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import PolicyChat from './components/PolicyChat';
import TalentManager from './components/TalentManager';
import SentimentAnalysis from './components/SentimentAnalysis';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);

  const renderContent = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard onNavigate={setCurrentView} />;
      case AppView.POLICY_CHAT:
        return <PolicyChat />;
      case AppView.TALENT_TOOLS:
        return <TalentManager />;
      case AppView.SENTIMENT:
        return <SentimentAnalysis />;
      case AppView.SETTINGS:
        return (
          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <h2 className="text-xl font-bold mb-4">System Settings</h2>
            <p className="text-slate-500">Configure AI models, user permissions, and data integration.</p>
          </div>
        );
      default:
        return <Dashboard onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl w-96">
            <Search size={18} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Search employees, policies..." 
              className="bg-transparent text-sm focus:outline-none w-full"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative text-slate-500 hover:text-indigo-600 transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-800">Sarah Jenkins</p>
                <p className="text-xs text-slate-500">HR Director</p>
              </div>
              <UserCircle2 size={36} className="text-slate-300" />
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
