import { LuSun, LuMoon } from 'react-icons/lu';
import Languages from './Languages';
import type { SetStateAction, Dispatch } from 'react';
import { links } from '../constant';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import IconButton from './IconButton';

gsap.registerPlugin(ScrollTrigger);

const Navigation = ({
  dark,
  setDark,
  scrollTo,
}: {
  dark: string;
  setDark: Dispatch<SetStateAction<string>>;
  scrollTo: (location: string) => void;
}) => {
  useGSAP(() => {
    const showAnim = gsap
      .from('#nav', {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  });

  return (
    <section
      id='nav'
      className='mt-4 bg-gradient-to-r from-[#282828]/75 to-[#0F0F0F]/75 flex justify-center items-center fixed z-10 rounded-full'
    >
      {links.map((link) => {
        return <IconButton title={link} onClick={() => scrollTo(`#${link}`)} />;
      })}

      <div className='rounded-xl'>
        {dark ? (
          <IconButton title='dark' onClick={() => setDark('')} />
        ) : (
          <IconButton title='light' onClick={() => setDark('dark')} />
        )}
      </div>
      <Languages />
    </section>
  );
};

export default Navigation;
