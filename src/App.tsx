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
        className={`bg-white dark:bg-black dark:text-white text-black ${
          dark && 'dark'
        }`}
      >
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
