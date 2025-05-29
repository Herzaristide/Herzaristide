import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { useTranslation } from 'react-i18next';
import { jobs } from '../constant';
import { useState } from 'react';

const Works = () => {
  useGSAP(() => {
    const jobSections = gsap.utils.toArray('.job_section');

    gsap.to(jobSections, {
      xPercent: -100 * (jobSections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '#works',
        pin: true,
        scrub: 0.5,
        end: '+=3000',
        // snap: {
        //   snapTo: 1 / (jobSections.length - 1),
        //   duration: 0.05,
        // },
      },
    });
  });

  const { t } = useTranslation();
  const [selectedJob, setSetselectedJob] = useState<string>('');

  return (
    <section id='works' className='relative h-dvh flex'>
      <div className='flex items-center h-full'>
        {jobs.map((job) => (
          <div
            key={job}
            className='job_section w-screen h-1/2 p-8'
            onClick={() => {
              setSetselectedJob(job);
            }}
          >
            <div className='flex-col gap-4 flex justify-center rounded-4xl hover:bg-green/10 cursor-pointer h-full p-8'>
              <h1 className='font-extrabold capitalize text-9xl text-green'>
                {t(`works:${job}:role`)}
              </h1>
              <h1 className='font-bold uppercase text-4xl'>
                {t(`works:${job}:company`)}
              </h1>
              {job === selectedJob ? null : null}
            </div>
          </div>
        ))}
      </div>
      {/* <div className='bottom-1/4 m-auto left-0 right-0 w-8 h-8 absolute bg-white border-green border-2 rounded-full' /> */}
    </section>
  );
};

export default Works;
