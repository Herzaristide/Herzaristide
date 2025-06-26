import { LuSun, LuMoon } from 'react-icons/lu';
import Languages from './Languages';
import type { SetStateAction, Dispatch } from 'react';
import { links } from '../constant';
import IconButton from './IconButton';
import { useState, useEffect } from 'react';

const Navigation = ({
  dark,
  setDark,
  scrollTo,
}: {
  dark: string;
  setDark: Dispatch<SetStateAction<string>>;
  scrollTo: (location: string) => void;
}) => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  // Track active section based on scroll position
  useEffect(() => {
    // Disable native scroll tracking when using GSAP ScrollSmoother
    // The active section tracking is disabled to avoid conflicts with GSAP
    // const handleScroll = () => {
    //   const sections = links.map(link => document.getElementById(link));
    //   const scrollPosition = window.scrollY + window.innerHeight / 2;
    //   for (let i = sections.length - 1; i >= 0; i--) {
    //     const section = sections[i];
    //     if (section && section.offsetTop <= scrollPosition) {
    //       setActiveSection(links[i]);
    //       break;
    //     }
    //   }
    // };
    // window.addEventListener('scroll', handleScroll);
    // handleScroll(); // Initial check
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hover trigger area */}
      <div
        className='fixed top-0 left-0 h-screen w-4 z-20 group'
        onMouseEnter={() => setVisible(true)}
      >
        {/* Subtle indicator line */}
        <div className='absolute left-0 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-transparent via-green to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300'></div>
      </div>

      <nav
        id='nav'
        className={`fixed left-0 top-0 h-screen w-20 z-30 transition-all duration-500 ease-out ${
          visible ? 'translate-x-0' : '-translate-x-full'
        }`}
        onMouseLeave={() => setVisible(false)}
      >
        {/* Background with blur effect */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/85 to-black/80 backdrop-blur-md rounded-r-3xl shadow-2xl border-r border-green/20'></div>

        {/* Glowing border effect */}
        <div className='absolute inset-0 bg-gradient-to-b from-green/10 via-transparent to-green/10 rounded-r-3xl opacity-50'></div>

        {/* Content */}
        <div className='relative h-full flex flex-col justify-center items-center py-8'>
          {/* Navigation links */}
          <div className='flex flex-col gap-2 mb-8'>
            {links.map((link, index) => (
              <div
                key={link}
                className={`relative group transform transition-all duration-300 ${
                  visible
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Active indicator */}
                <div
                  className={`absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-8 bg-green rounded-r-full transition-all duration-300 ${
                    activeSection === link
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-50'
                  }`}
                ></div>

                {/* Hover glow effect */}
                <div className='absolute -inset-2 bg-green/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                {/* Button */}
                <button
                  title={link.charAt(0).toUpperCase() + link.slice(1)}
                  onClick={() => scrollTo(`#${link}`)}
                  className={`relative p-3 rounded-xl transition-all duration-300 border border-transparent hover:border-green/30 ${
                    activeSection === link
                      ? 'bg-green/20 text-green shadow-lg shadow-green/25'
                      : 'bg-white/5 text-white/80 hover:bg-green/10 hover:text-green'
                  } hover:scale-110 hover:-translate-y-1`}
                >
                  <img
                    className='h-6 w-6 transition-all duration-300 group-hover:scale-110'
                    src={`Herzaristide/src/assets/icons/${link}.svg`}
                    alt={link}
                    style={{
                      filter:
                        activeSection === link
                          ? 'brightness(0) saturate(100%) invert(70%) sepia(98%) saturate(399%) hue-rotate(85deg) brightness(101%) contrast(90%)'
                          : 'brightness(0) saturate(100%) invert(100%)',
                    }}
                  />

                  {/* Tooltip */}
                  <div className='absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg border border-gray-700'>
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                    <div className='absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900'></div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className='w-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6'></div>

          {/* Theme toggle */}
          <div
            className={`relative group transform transition-all duration-300 ${
              visible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: `${links.length * 50}ms` }}
          >
            {/* Hover glow effect */}
            <div className='absolute -inset-2 bg-green/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

            <button
              title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              onClick={() => setDark(dark ? '' : 'dark')}
              className='relative p-3 rounded-xl bg-white/5 text-white/80 hover:bg-green/10 hover:text-green transition-all duration-300 border border-transparent hover:border-green/30 hover:scale-110 hover:-translate-y-1'
            >
              {dark ? (
                <LuSun className='h-6 w-6 transition-all duration-300 group-hover:scale-110' />
              ) : (
                <LuMoon className='h-6 w-6 transition-all duration-300 group-hover:scale-110' />
              )}

              {/* Tooltip */}
              <div className='absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg border border-gray-700'>
                {dark ? 'Light Mode' : 'Dark Mode'}
                <div className='absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900'></div>
              </div>
            </button>
          </div>

          {/* Languages component placeholder */}
          <div
            className={`mt-6 transform transition-all duration-300 ${
              visible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: `${(links.length + 1) * 50}ms` }}
          >
            {/* <Languages /> */}
          </div>

          {/* Bottom decorative element */}
          <div className='absolute bottom-6 left-1/2 -translate-x-1/2'>
            <div className='w-1 h-8 bg-gradient-to-t from-green to-transparent rounded-full opacity-50'></div>
          </div>
        </div>

        {/* Floating particles */}
        {visible &&
          [...Array(6)].map((_, i) => (
            <div
              key={i}
              className='absolute w-1 h-1 bg-green/40 rounded-full animate-pulse'
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random()}s`,
              }}
            ></div>
          ))}
      </nav>
    </>
  );
};

export default Navigation;
