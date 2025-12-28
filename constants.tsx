
import React from 'react';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  BarChart3, 
  Settings,
  ShieldCheck,
  Zap,
  Briefcase
} from 'lucide-react';
import { AppView } from './types';

export const NAV_ITEMS = [
  { id: AppView.DASHBOARD, label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { id: AppView.POLICY_CHAT, label: 'Policy Assistant', icon: <ShieldCheck size={20} /> },
  { id: AppView.TALENT_TOOLS, label: 'Talent Manager', icon: <Briefcase size={20} /> },
  { id: AppView.SENTIMENT, label: 'Employee Pulse', icon: <BarChart3 size={20} /> },
  { id: AppView.SETTINGS, label: 'Settings', icon: <Settings size={20} /> },
];

export const SYSTEM_INSTRUCTION_POLICY = `
You are HR Pulse AI, a professional Human Resources assistant. 
Your goal is to provide accurate, empathetic, and compliant information about company policies.
Company context: PulseTech is a global software company with a hybrid work model.
- Unlimited PTO policy (subject to manager approval).
- Performance reviews occur every 6 months.
- Remote work stipend is $500/year.
- Maternity leave is 16 weeks, Paternity is 8 weeks.
Be professional, concise, and helpful. If you don't know something, suggest contacting a human HR partner.
`;

export const MOCK_SENTIMENT_DATA = [
  { name: 'Jan', positive: 45, neutral: 40, negative: 15 },
  { name: 'Feb', positive: 50, neutral: 35, negative: 15 },
  { name: 'Mar', positive: 48, neutral: 32, negative: 20 },
  { name: 'Apr', positive: 60, neutral: 30, negative: 10 },
  { name: 'May', positive: 55, neutral: 35, negative: 10 },
  { name: 'Jun', positive: 65, neutral: 25, negative: 10 },
];
