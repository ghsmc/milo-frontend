import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  isDark: boolean;
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ isDark, value, onChange }: SearchBarProps) {
  return (
    <div className={`
      sticky top-0 z-10 px-6 py-4 border-b
      ${isDark ? 'bg-black border-white/10' : 'bg-white border-gray-200'}
    `}>
      <div className="max-w-5xl">
        <div className={`
          relative flex items-center gap-2 p-3 rounded-lg
          ${isDark ? 'bg-[#1C1C1F] border-white/10' : 'bg-[#F7F7F8] border-gray-200'}
          border
        `}>
          <Search className={isDark ? 'text-white/40' : 'text-gray-400'} size={20} />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search job title, company, location..."
            className={`
              flex-1 bg-transparent border-none outline-none text-[15px]
              ${isDark 
                ? 'text-white placeholder:text-white/40' 
                : 'text-gray-900 placeholder:text-gray-500'
              }
            `}
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <span className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              233,802 jobs
            </span>
          </div>
          <button className={`
            px-4 py-1.5 rounded-lg text-sm font-medium
            ${isDark 
              ? 'bg-[#4F46E5] text-white hover:bg-[#4338CA]' 
              : 'bg-[#4F46E5] text-white hover:bg-[#4338CA]'
            }
            transition-colors duration-200
          `}>
            Join now
          </button>
        </div>
      </div>
    </div>
  );
}