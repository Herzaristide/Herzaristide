import { LuSun, LuMoon } from 'react-icons/lu';
import Languages from './Languages';
import type { SetStateAction, Dispatch } from 'react';
import { links } from '../constant';
import IconButton from './IconButton';
import { useState } from 'react';

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

  return (
    <>
      <div
        className='fixed top-0 left-0 h-screen w-3 z-20'
        onMouseEnter={() => setVisible(true)}
      />
      <section
        id='nav'
        className={`left-0 top-0 h-screen w-20 bg-gradient-to-b from-[#282828]/75 to-[#0F0F0F]/75 flex flex-col justify-center items-center fixed z-30 rounded-r-3xl shadow-lg transition-transform duration-300 ${
          visible ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ position: 'fixed' }}
        onMouseLeave={() => setVisible(false)}
      >
        {links.map((link) => (
          <IconButton key={link} title={link} onClick={() => scrollTo(`#${link}`)} />
        ))}

        <div className='rounded-xl mt-4'>
          {dark ? (
            <IconButton title='dark' onClick={() => setDark('')} />
          ) : (
            <IconButton title='light' onClick={() => setDark('dark')} />
          )}
        </div>
        {/* <Languages /> */}
      </section>
    </>
  );
};

export default Navigation;
