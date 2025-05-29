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
      wrapper: '#main',
      content: '#content',
      smooth: 2,
      effects: true,
    });

    // gsap.from('#about', {
    //   scrollTrigger: {
    //     trigger: '#about',
    //     scrub: true,
    //     start: 'top bottom',
    //     end: 'top top',
    //   },
    //   scaleX: 0,
    //   transformOrigin: 'left center',
    //   ease: 'none',
    // });
    //   gsap.to('.path', {
    //     scrollTrigger: {
    //       trigger: '#works',
    //       scrub: true,
    //       pin: true,
    //       snap: 1 / (jobs.length - 1),
    //     },
    //     xPercent: -83.33,
    //     ease: 'none',
    //   });
  }, {});

  const scrollTo = (location: string) => {
    smoother.current?.scrollTo(location, true, 'center center');
  };

  return (
    <main className='relative w-screen flex justify-center ' id='wrapper'>
      <Navigation dark={dark} setDark={setDark} scrollTo={scrollTo} />
      <div
        id='content'
        className={`${
          dark ? 'dark' : ''
        } bg-white dark:bg-black  dark:text-white text-black`}
      >
        <Home />
        <About />
        <Works />
        <Skills />
        <Projects />
        <Resume />
        <Contacts />
      </div>
    </main>
  );
}

export default App;
