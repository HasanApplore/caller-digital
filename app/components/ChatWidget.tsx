'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
}

const DEFAULT_QUERIES = [
  "How can Caller.Digital automate our customer support operations?",
  "What types of inbound and outbound call solutions do you provide?",
  "Can your AI agents integrate with our CRM and ticketing systems?",
  "How does your AI voice bot handle escalations to human agents?",
  "What are the security and compliance standards you follow?",
  "How do you deploy AI solutions within our AWS or cloud environment?",
  "What industries or use cases do you specialize in for AI automation?",
  "Can I get a demo or start a POC for my company's support needs?",
  "What analytics and reporting tools come with your AI call solutions?",
  "Do you offer white-label AI support solutions for enterprise clients?"
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<AbortController | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { 
      role: 'user', 
      content: input,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setIsTyping(true);

    // Cancel any ongoing request
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();

    try {
      // Create a clean version of messages without timestamps for the API
      const apiMessages = [...messages, userMessage].map(({ role, content }) => ({
        role,
        content
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: apiMessages,
          assistantId: "5b23c85b-1ee9-4acf-be45-d6e4e1f2888d"
        }),
        signal: controllerRef.current.signal
      });

      if (!response.ok) throw new Error('Failed to fetch response');

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No reader available');

      let assistantMessage = '';
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') break;

            try {
              const parsed = JSON.parse(data);
              const delta = parsed.delta || '';
              if (delta) {
                assistantMessage += delta;
                setMessages(prev => {
                  const newMessages = [...prev];
                  newMessages[newMessages.length - 1] = {
                    role: 'assistant',
                    content: assistantMessage,
                    timestamp: new Date()
                  };
                  return newMessages;
                });
              }
            } catch (e) {
              console.error('Error parsing chunk:', e);
            }
          }
        }
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.log('Request aborted');
      } else {
        console.error('Error:', error);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'I apologize, but I am currently unable to process your request. Please make sure the API is properly configured and try again later.'
        }]);
      }
    } finally {
      setIsLoading(false);
      setIsTyping(false);
      controllerRef.current = null;
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSuggestionClick = async (suggestion: string) => {
    const userMessage: Message = { 
      role: 'user', 
      content: suggestion,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setIsTyping(true);

    // Cancel any ongoing request
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();

    try {
      // Create a clean version of messages without timestamps for the API
      const apiMessages = [...messages, userMessage].map(({ role, content }) => ({
        role,
        content
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: apiMessages,
          assistantId: "5b23c85b-1ee9-4acf-be45-d6e4e1f2888d"
        }),
        signal: controllerRef.current.signal
      });

      if (!response.ok) throw new Error('Failed to fetch response');

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No reader available');

      let assistantMessage = '';
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') break;

            try {
              const parsed = JSON.parse(data);
              const delta = parsed.delta || '';
              if (delta) {
                assistantMessage += delta;
                setMessages(prev => {
                  const newMessages = [...prev];
                  newMessages[newMessages.length - 1] = {
                    role: 'assistant',
                    content: assistantMessage,
                    timestamp: new Date()
                  };
                  return newMessages;
                });
              }
            } catch (e) {
              console.error('Error parsing chunk:', e);
            }
          }
        }
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.log('Request aborted');
      } else {
        console.error('Error:', error);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'I apologize, but I am currently unable to process your request. Please make sure the API is properly configured and try again later.'
        }]);
      }
    } finally {
      setIsLoading(false);
      setIsTyping(false);
      controllerRef.current = null;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="chat-box"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white border border-gray-200 rounded-2xl shadow-2xl w-96 mb-4 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Caller.Digital Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-white">
              {messages.length === 0 ? (
                <div className="space-y-3">
                  <p className="text-gray-500 text-sm text-center">How can I help you today?</p>
                  <div className="grid grid-cols-1 gap-2">
                    {DEFAULT_QUERIES.map((query, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleSuggestionClick(query)}
                        className="text-left p-3 rounded-xl bg-white text-gray-900 hover:bg-gray-100 transition-colors shadow border border-gray-100"
                      >
                        {query}
                      </motion.button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className="flex flex-col max-w-[80%]">
                        <div
                          className={`p-3 rounded-2xl ${
                            message.role === 'user'
                              ? 'bg-gray-100 text-gray-900 rounded-tr-none border border-gray-200'
                              : 'bg-white text-gray-900 border border-gray-100 rounded-tl-none shadow'
                          }`}
                        >
                          {message.content}
                        </div>
                        {message.timestamp && (
                          <span className={`text-xs text-gray-400 mt-1 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                            {formatTime(message.timestamp)}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white text-blue-500 p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white text-gray-900 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white px-4 py-3 rounded-xl hover:from-teal-500 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.button
            key="chat-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-br from-teal-400 via-blue-500 to-purple-500 text-white p-4 rounded-full shadow-lg hover:from-teal-500 hover:to-purple-600 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
} 