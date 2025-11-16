import { useRef } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Works from './components/Works';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Resume from './components/Resume';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import './i18n';
import './styles/carousel.css';
import './styles/geometric.css';
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

function AppContent() {
  const { dark } = useTheme();
  const smoother = useRef<ScrollSmoother | null>(null);
  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      wrapper: '#wrapper',
      content: '#content',
      smooth: 2,
      effects: true,
    });
  }, {});
  const scrollTo = (location: string) => {
    if (smoother.current) {
      smoother.current.scrollTo(location, true, 'top top');
    }
  };
  return (
    <div id='wrapper'>
      <Navigation scrollTo={scrollTo} />
      <main
        id='content'
        className={`relative bg-white dark:bg-black dark:text-white text-black overflow-hidden ${
          dark && 'dark'
        }`}
      >
        {/* Global animated background gradient */}
        <div className='fixed inset-0 bg-gradient-to-br from-green/5 via-transparent to-green/10 pointer-events-none'></div>

        {/* Global floating geometric shapes */}
        {/* Large spinning circles */}
        <div className='fixed top-20 right-20 w-32 h-32 border border-green/20 rounded-full animate-spin [animation-duration:20s] pointer-events-none'></div>
        <div className='fixed bottom-32 left-20 w-28 h-28 border-2 border-green/15 rounded-full animate-spin [animation-duration:25s] [animation-direction:reverse] pointer-events-none'></div>

        {/* Geometric squares and diamonds */}
        <div className='fixed top-1/3 left-10 w-24 h-24 bg-green/5 rotate-45 animate-pulse pointer-events-none'></div>
        <div className='fixed top-2/3 right-16 w-20 h-20 bg-green/8 rotate-12 animate-pulse [animation-delay:1.5s] pointer-events-none'></div>
        <div className='fixed top-1/4 left-1/3 w-16 h-16 border border-green/25 rotate-45 animate-bounce [animation-delay:3s] [animation-duration:4s] pointer-events-none'></div>

        {/* Bouncing elements */}
        <div className='fixed bottom-20 right-1/4 w-16 h-16 border-2 border-green/30 animate-bounce [animation-delay:1s] pointer-events-none'></div>
        <div className='fixed top-1/5 right-1/3 w-12 h-12 bg-green/10 rounded-full animate-bounce [animation-delay:2.5s] [animation-duration:3s] pointer-events-none'></div>

        {/* Pinging circles */}
        <div className='fixed top-1/2 right-10 w-8 h-8 bg-gradient-to-r from-green to-green/50 rounded-full animate-ping [animation-delay:2s] pointer-events-none'></div>
        <div className='fixed bottom-1/3 left-1/4 w-10 h-10 bg-green/15 rounded-full animate-ping [animation-delay:4s] [animation-duration:3s] pointer-events-none'></div>

        {/* Triangular shapes */}
        <div className='fixed top-3/4 left-12 w-0 h-0 border-l-8 border-r-8 border-b-12 border-transparent border-b-green/20 animate-pulse [animation-delay:1s] pointer-events-none'></div>
        <div className='fixed top-1/6 right-1/5 w-0 h-0 border-l-6 border-r-6 border-t-10 border-transparent border-t-green/15 animate-pulse [animation-delay:3.5s] pointer-events-none'></div>

        {/* Hexagonal shapes */}
        <div className='fixed top-2/5 left-1/5 w-14 h-14 bg-green/5 clip-path-hexagon animate-spin [animation-duration:30s] pointer-events-none'></div>
        <div className='fixed bottom-1/4 right-1/5 w-10 h-10 border border-green/20 clip-path-hexagon animate-spin [animation-duration:35s] [animation-direction:reverse] pointer-events-none'></div>

        {/* Floating and drifting elements */}
        <div className='fixed top-1/2 left-1/2 w-6 h-24 bg-green/8 rounded-full rotate-45 animate-float pointer-events-none'></div>
        <div className='fixed bottom-2/5 right-2/5 w-18 h-4 bg-green/10 rounded-full rotate-12 animate-drift pointer-events-none'></div>
        <div className='fixed top-1/6 left-2/3 w-8 h-8 bg-green/12 rounded-full animate-float [animation-delay:1s] pointer-events-none'></div>
        <div className='fixed bottom-1/6 left-1/6 w-12 h-2 bg-green/8 rounded-full animate-drift [animation-delay:2s] pointer-events-none'></div>

        {/* Line elements */}
        <div className='fixed top-3/5 right-1/6 w-1 h-20 bg-green/15 animate-pulse [animation-delay:3s] pointer-events-none'></div>
        <div className='fixed bottom-3/5 left-2/5 w-16 h-1 bg-green/15 animate-pulse [animation-delay:1.5s] pointer-events-none'></div>

        {/* Global particle effect dots - increased quantity and variety */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`fixed rounded-full animate-pulse pointer-events-none ${
              i % 4 === 0
                ? 'w-2 h-2 bg-green/25'
                : i % 3 === 0
                ? 'w-1.5 h-1.5 bg-green/15'
                : 'w-1 h-1 bg-green/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}

        {/* Additional scattered geometric micro-elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`micro-${i}`}
            className={`fixed pointer-events-none animate-pulse ${
              i % 2 === 0
                ? 'w-3 h-3 border border-green/15 rotate-45'
                : 'w-2 h-2 bg-green/10 rounded-full'
            }`}
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
        <Home scrollTo={scrollTo} />
        <About />
        <Works />
        <Skills />
        <Projects />
        <Resume />
        <Contacts />
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
