import { useState } from 'react';
import i18n from 'i18next';
import i18next from 'i18next';

const Languages = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  const getCurrentLanguage = () => {
    return (
      languages.find((lang) => lang.code === i18next.language) || languages[0]
    );
  };

  return (
    <div className='relative group'>
      {/* Current language display */}
      <div className='relative'>
        {/* Glowing effect */}
        <div className='absolute -inset-0.5 bg-gradient-to-r from-green to-green/50 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500'></div>{' '}
        {/* Current language button */}
        <button className='relative bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/20 group-hover:border-green/30 transition-all duration-300 w-12 h-12 flex items-center justify-center hover:scale-110 hover:-translate-y-1'>
          <span className='text-2xl'>{getCurrentLanguage().flag}</span>

          {/* Tooltip */}
          <div className='absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg border border-gray-700'>
            {getCurrentLanguage().name}
            <div className='absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900'></div>
          </div>
        </button>
      </div>      {/* Language dropdown */}
      <div className='absolute left-full top-1/2 transform -translate-y-1/2 ml-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto'>
        <div className='bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700 p-2 min-w-[160px]'>
          {/* Arrow */}
          <div className='absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900/95'></div>

          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => i18n.changeLanguage(language.code)}
              onMouseEnter={() => setIsHovered(language.code)}
              onMouseLeave={() => setIsHovered(null)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                i18next.language === language.code
                  ? 'bg-green text-white shadow-lg shadow-green/25'
                  : 'text-white/80 hover:bg-white/10 hover:text-green'
              }`}
            >
              <span className='text-lg'>{language.flag}</span>
              <div className='text-left'>
                <div className='text-sm font-medium'>{language.name}</div>
                <div className='text-xs opacity-60 uppercase tracking-wider'>
                  {language.code}
                </div>
              </div>

              {/* Active indicator */}
              {i18next.language === language.code && (
                <div className='ml-auto'>
                  <div className='w-2 h-2 bg-white rounded-full animate-pulse'></div>
                </div>
              )}

              {/* Hover indicator */}
              {isHovered === language.code &&
                i18next.language !== language.code && (
                  <div className='ml-auto'>
                    <svg
                      className='w-4 h-4 text-green'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </div>
                )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
