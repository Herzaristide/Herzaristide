import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import Button from './Button';

const About = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ years: 0, projects: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate statistics
          const animateValue = (
            start: number,
            end: number,
            setter: (value: number) => void
          ) => {
            const duration = 2000;
            const startTimestamp = performance.now();

            const step = (timestamp: number) => {
              const elapsed = timestamp - startTimestamp;
              const progress = Math.min(elapsed / duration, 1);
              const currentValue = Math.floor(start + (end - start) * progress);
              setter(currentValue);

              if (progress < 1) {
                requestAnimationFrame(step);
              }
            };

            requestAnimationFrame(step);
          };

          setTimeout(() => {
            animateValue(0, 3, (value) =>
              setAnimatedStats((prev) => ({ ...prev, years: value }))
            );
            animateValue(0, 15, (value) =>
              setAnimatedStats((prev) => ({ ...prev, projects: value }))
            );
          }, 800);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id='about'
      className='relative min-h-dvh w-screen py-20 overflow-hidden'
    >
      {/* Animated background */}
      <div className='absolute inset-0 bg-gradient-to-t from-green/5 via-transparent to-green/10'></div>

      {/* Floating geometric shapes */}
      <div className='absolute top-1/4 left-10 w-28 h-28 border border-green/20 rounded-full animate-pulse [animation-duration:4s]'></div>
      <div className='absolute top-10 right-20 w-20 h-20 bg-green/5 rotate-12 animate-spin [animation-duration:15s]'></div>
      <div className='absolute bottom-1/3 right-10 w-16 h-16 border-2 border-green/30 rotate-45 animate-bounce [animation-delay:1s]'></div>
      <div className='absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-green/20 to-green/10 rounded-full animate-ping [animation-delay:2s]'></div>

      {/* Particle dots */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className='absolute w-1 h-1 bg-green/30 rounded-full animate-pulse'
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        ></div>
      ))}

      <div className='relative z-10 container mx-auto px-8 flex flex-col lg:flex-row items-center gap-16'>
        {/* Left side - Text content */}
        <div className='flex-1 max-w-3xl'>
          {/* Greeting with slide animation */}
          <div className='mb-8 overflow-hidden'>
            <h2
              className={`text-5xl md:text-6xl font-bold transform transition-all duration-1000 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-full opacity-0'
              }`}
            >
              <span className='bg-gradient-to-r from-green via-green/80 to-green bg-clip-text text-transparent'>
                {t('about:hi')}
              </span>
            </h2>
          </div>

          {/* Content paragraphs with staggered animation */}
          <div className='space-y-6 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300'>
            <p
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <span className='font-semibold text-gray-900 dark:text-white'>
                {t('about:1')}
              </span>
            </p>

            <p
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              {t('about:2', { count: 3 })
                .split('3')
                .map((part, index) => (
                  <span key={index}>
                    {part}
                    {index === 0 && (
                      <span className='inline-flex items-center mx-2'>
                        <span className='text-4xl font-bold text-green animate-pulse'>
                          {animatedStats.years}
                        </span>
                      </span>
                    )}
                  </span>
                ))}
            </p>

            <p
              className={`transform transition-all duration-1000 delay-700 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <span className='relative'>
                {t('about:3')}
                <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green to-transparent'></span>
              </span>
            </p>
          </div>

          {/* Statistics cards */}
          <div
            className={`grid grid-cols-2 gap-6 mt-12 transform transition-all duration-1000 delay-900 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <div className='group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green/30'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-green to-green/50 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300'></div>
              <div className='relative'>
                <div className='text-3xl font-bold text-green mb-2'>
                  {animatedStats.years}+
                </div>
                <div className='text-gray-600 dark:text-gray-300 font-medium'>
                  Years Experience
                </div>
              </div>
            </div>

            <div className='group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green/30'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-green to-green/50 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300'></div>
              <div className='relative'>
                <div className='text-3xl font-bold text-green mb-2'>
                  {animatedStats.projects}+
                </div>
                <div className='text-gray-600 dark:text-gray-300 font-medium'>
                  Projects Completed
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA button */}
          <div
            className={`mt-12 transform transition-all duration-1000 delay-1100 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <div className='group relative inline-block'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-green to-green/50 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-300'></div>
              <button className='relative px-8 py-4 bg-gradient-to-r from-green to-green/80 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green/30'>
                <span className='relative z-10 flex items-center gap-2'>
                  See more about me
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
                <div className='absolute inset-0 bg-gradient-to-r from-green/80 to-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Visual element */}
        <div className='flex-1 max-w-lg'>
          <div
            className={`relative transform transition-all duration-1000 delay-600 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
          >
            {/* Profile card */}
            <div className='relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700'>
              {/* Glowing effect */}
              <div className='absolute -inset-0.5 bg-gradient-to-r from-green to-green/50 rounded-3xl blur opacity-20'></div>

              <div className='relative'>
                {/* Avatar placeholder */}
                <div className='w-32 h-32 bg-gradient-to-br from-green to-green/70 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white shadow-lg'>
                  AP
                </div>

                {/* Skills highlight */}
                <div className='text-center'>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
                    Core Expertise
                  </h3>
                  <div className='flex flex-wrap gap-2 justify-center'>
                    {[
                      'Data Engineering',
                      'Web Development',
                      'UI/UX Design',
                      'Machine Learning',
                    ].map((skill, index) => (
                      <span
                        key={skill}
                        className='px-3 py-1 bg-green/10 text-green text-sm font-medium rounded-full border border-green/20 hover:bg-green/20 transition-colors duration-300'
                        style={{
                          animationDelay: `${1200 + index * 150}ms`,
                          animation: isVisible
                            ? 'fadeIn 0.6s ease-out forwards'
                            : 'none',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements around the card */}
            <div className='absolute -top-4 -right-4 w-8 h-8 bg-green/20 rounded-full animate-pulse'></div>
            <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-green/30 rounded-full animate-ping'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
