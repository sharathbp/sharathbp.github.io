import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, ChevronDown, Bot } from 'lucide-react';
import { GenerateContentResponse } from "@google/genai";
import { sendMessageToGeminiStream } from '../services/gemini';
import { ChatMessage } from '../types';

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '0', role: 'model', text: "Hi! I'm Sharath's AI Assistant. Ask me anything about his experience or projects." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const stream = await sendMessageToGeminiStream(userMessage.text);
      
      const botMessageId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: botMessageId, role: 'model', text: '', isStreaming: true }]);

      let accumulatedText = '';
      
      for await (const chunk of stream) {
          const c = chunk as GenerateContentResponse;
          const text = c.text;
          if (text) {
             accumulatedText += text;
             setMessages(prev => prev.map(msg => 
                msg.id === botMessageId ? { ...msg, text: accumulatedText } : msg
             ));
          }
      }
      
      setMessages(prev => prev.map(msg => 
        msg.id === botMessageId ? { ...msg, isStreaming: false } : msg
      ));

    } catch (error) {
      console.error("Error generating response:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: "Sorry, I'm having trouble connecting right now. Please try again." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-google-blue hover:bg-blue-600 text-white shadow-lg hover:shadow-blue-500/40 hover:scale-110 transition-all duration-300 flex items-center justify-center ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open AI Chat"
      >
        <Sparkles className="w-6 h-6 animate-pulse" />
      </button>

      <div 
        className={`fixed bottom-6 right-6 z-50 w-[90vw] md:w-[360px] h-[550px] flex flex-col rounded-3xl shadow-2xl transition-all duration-300 transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
        } bg-white dark:bg-google-darksurface border border-slate-200 dark:border-white/10 overflow-hidden font-sans`}
      >
        <div className="p-4 bg-google-blue flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5" />
             </div>
             <div>
                <h3 className="font-bold text-sm font-display tracking-wide">Assistant</h3>
                <p className="text-white/80 text-[10px] uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block animate-pulse"></span> Online
                </p>
             </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-full"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-google-dark">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-google-blue text-white rounded-br-sm shadow-md'
                    : 'bg-white dark:bg-google-darksurface text-slate-800 dark:text-gray-200 rounded-bl-sm shadow-sm border border-slate-100 dark:border-white/5'
                }`}
              >
                {msg.text}
                {msg.isStreaming && (
                    <span className="inline-block w-1 h-3 ml-1 bg-google-blue animate-pulse"></span>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-google-darksurface border-t border-slate-200 dark:border-white/10">
          <div className="relative flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full pl-4 pr-12 py-3 bg-slate-100 dark:bg-google-dark rounded-full focus:outline-none focus:ring-2 focus:ring-google-blue/50 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-500 transition-all text-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="absolute right-2 p-2 bg-google-blue text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-google-blue transition-all"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AIChatWidget;