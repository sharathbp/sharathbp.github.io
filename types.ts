import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  span?: string; // For grid layout (col-span-2 etc)
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  link?: string;
  color?: string;
  bg?: string;
  border?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}