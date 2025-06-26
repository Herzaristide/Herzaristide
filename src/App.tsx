import { useRef, useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Works from './components/Works';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Resume from './components/Resume';
import './i18n';
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

function App() {
  const [dark, setDark] = useState<string>('');
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
      <Navigation dark={dark} setDark={setDark} scrollTo={scrollTo} />
      <main
        id='content'
        className={`${
          dark ? 'dark' : ''
        } bg-white dark:bg-black dark:text-white text-black`}
      >
        <Home />
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

export default App;
