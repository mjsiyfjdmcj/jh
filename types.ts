
export enum AppView {
  DASHBOARD = 'DASHBOARD',
  POLICY_CHAT = 'POLICY_CHAT',
  TALENT_TOOLS = 'TALENT_TOOLS',
  SENTIMENT = 'SENTIMENT',
  SETTINGS = 'SETTINGS'
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}

export interface SentimentData {
  name: string;
  positive: number;
  neutral: number;
  negative: number;
}

export interface JobDescriptionParams {
  title: string;
  department: string;
  experience: string;
  keyRequirements: string;
}

export interface PolicyVersion {
  content: string;
  version: string;
  lastUpdated: string;
  timestamp: number;
}

export interface Policy {
  id: string;
  title: string;
  content: string;
  version: string;
  lastUpdated: string;
  category: string;
  history?: PolicyVersion[];
}
