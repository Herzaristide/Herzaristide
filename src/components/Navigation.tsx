import { LuSun, LuMoon } from 'react-icons/lu';
import Languages from './Languages';
import type { SetStateAction, Dispatch } from 'react';
import { links } from '../constant';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

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
        return (
          <button
            key={link}
            title={link}
            className='bg-transparent hover:bg-zinc-200 rounded-lg text-white p-3'
            onClick={() => {
              scrollTo(`#${link}`);
            }}
          >
            <img src={`Herzaristide/src/assets/icons/${link}.svg`} alt={link} />
          </button>
        );
      })}

      {/* <div className='rounded-xl'>
        <button
          title='home'
          className='bg-transparent hover:bg-zinc-200 rounded-lg text-white p-3'
          onClick={() => {
            scrollTo();
          }}
        >
          <RiHomeLine />
        </button>
      </div>

      <div className='rounded-xl'>
        <button
          title='me'
          className='bg-transparent hover:bg-zinc-200 rounded-lg text-white p-3'
          onClick={() => {}}
        >
          <RiAccountPinCircleLine />
        </button>
      </div>

      <div className='rounded-xl'>
        <button
          title='works'
          className='bg-transparent hover:bg-zinc-200 rounded-lg text-white p-3'
          onClick={() => {}}
        >
          <RiBuilding2Line />
        </button>
      </div> */}

      <div className='rounded-xl'>
        {dark ? (
          <button
            title='light'
            className='bg-transparent hover:bg-zinc-200 rounded-lg text-white p-3'
            onClick={() => {
              setDark('');
            }}
          >
            <LuSun />
          </button>
        ) : (
          <button
            title='dark'
            onClick={() => {
              setDark('dark');
            }}
            className='bg-transparent hover:bg-zinc-200 rounded-lg text-white p-3'
          >
            <LuMoon />
          </button>
        )}
      </div>
      {/* <Languages /> */}
    </section>
  );
};

export default Navigation;
