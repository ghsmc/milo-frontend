import React, { useState } from 'react';
import { User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatInterfaceProps {
  isDark: boolean;
}

export function ChatInterface({ isDark }: ChatInterfaceProps) {
  const [messages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Milo, your AI job search assistant. I can help you find the perfect job, research companies, and provide career advice. What would you like to know?"
    }
  ]);

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`
              flex items-start gap-3
              ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}
            `}
          >
            {message.role === 'assistant' && (
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://gmccain.com/milo.png"
                  alt="Milo"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className={`
              max-w-[80%] rounded-lg p-4
              ${message.role === 'user'
                ? isDark
                  ? 'bg-[#19C37D] text-white'
                  : 'bg-[#19C37D] text-white'
                : isDark
                  ? 'bg-[#40414F] text-white/90'
                  : 'bg-white shadow-md text-gray-900'
              }
            `}>
              <div className="prose prose-sm max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {message.content}
                </ReactMarkdown>
              </div>
            </div>
            {message.role === 'user' && (
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                ${isDark ? 'bg-[#40414F]' : 'bg-gray-200'}
              `}>
                <User size={16} className={isDark ? 'text-white/80' : 'text-gray-600'} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}