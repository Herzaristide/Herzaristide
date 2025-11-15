import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { skills } from '../constant';
import HomeSkillButton from './HomeSkillButton';

const Home = ({ scrollTo }: { scrollTo: (location: string) => void }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id='home'
      className='relative h-dvh w-screen flex flex-col justify-center p-40'
    >
      <div className='relative z-10 max-w-4xl'>
        {/* Name with typing animation */}
        <div className='mb-4 overflow-hidden'>
          <h1
            className={`font-bold text-4xl md:text-5xl text-gray-800 dark:text-gray-200 transform transition-all duration-1000 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0'
            }`}
          >
            <span className='bg-gradient-to-r from-gray-900 via-green to-gray-900 dark:from-white dark:via-green dark:to-white bg-clip-text text-transparent'>
              Aristide Pichereau
            </span>
          </h1>
        </div>

        {/* Job title with scale animation */}
        <div className='mb-2 '>
          <h1
            className={`font-bold text-6xl md:text-8xl lg:text-9xl transform transition-all duration-1000 delay-300 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`}
          >
            <span className='bg-gradient-to-r from-green via-green/80 to-green bg-clip-text text-transparent drop-shadow-sm'>
              {t('job')}
            </span>
          </h1>
        </div>

        {/* Decorative line */}
        <div
          className={`w-32 h-1 bg-gradient-to-r from-green to-transparent mb-8 rounded-full transform transition-all duration-1000 delay-700 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}
        ></div>

        {/* Tech stack buttons with staggered animation */}
        <div className='flex flex-wrap gap-3 mb-8'>
          {skills
            .filter((skill) => skill.favorite)
            .map((skill, index) => (
              <HomeSkillButton
                key={skill.name}
                skill={skill}
                index={index}
                isVisible={isVisible}
              />
            ))}
        </div>

        {/* Call to action section */}
        <div
          className={`transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <p className='text-gray-600 dark:text-gray-400 text-lg mb-6 max-w-2xl leading-relaxed'>
            {t('passionateDescription')}
          </p>

          <div className='flex flex-wrap gap-4'>
            <button
              onClick={() => scrollTo('#works')}
              className='group relative px-8 py-4 bg-gradient-to-r from-green to-green/80 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green/30'
            >
              <span className='relative z-10'>{t('viewMyWork')}</span>
              <div className='absolute inset-0 bg-gradient-to-r from-green/80 to-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
            </button>

            <button
              onClick={() => scrollTo('#contact')}
              className='group px-8 py-4 border-2 border-green text-green hover:bg-green hover:text-white font-semibold rounded-full transition-all duration-300 hover:scale-105'
            >
              <span className='flex items-center gap-2'>
                {t('getInTouch')}
                <svg
                  className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
        <div className='animate-bounce'>
          <svg
            className='w-6 h-6 text-green'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Home;
