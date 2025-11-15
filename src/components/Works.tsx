import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import { jobs } from '../constant';
import { useRef, useState } from 'react';
import WorkCard from './WorkCard';

const Works = () => {
  const { t } = useTranslation();
  // const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState<number | null>(null);

  // Gather all missions from all jobs
  const allMissions = jobs.flatMap((job) => {
    const jobData = t(`${job}`, { returnObjects: true }) as any;
    if (
      jobData &&
      typeof jobData === 'object' &&
      Array.isArray(jobData.missions)
    ) {
      return jobData.missions.map((mission: any) => ({
        ...mission,
        jobRole: jobData.role,
        jobCompany: jobData.company,
      }));
    }
    return [];
  });

  useGSAP(() => {
    const jobSections = gsap.utils.toArray('.job_section');
    gsap.to(jobSections, {
      xPercent: -100 * (jobSections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '#works',
        pin: true,
        scrub: 1,
        end: '+=3000',
      },
    });
  });

  return (
    <section id='works' className='relative h-dvh overflow-hidden'>
      {/* Animated background */}
      <div className='absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black'></div>

      {/* Floating background elements */}
      <div className='absolute top-1/4 left-10 w-32 h-32 bg-green/5 rounded-full blur-xl animate-pulse [animation-duration:4s]'></div>
      <div className='absolute top-1/2 right-20 w-24 h-24 bg-green/10 rounded-full blur-lg animate-float'></div>
      <div className='absolute bottom-20 left-1/3 w-20 h-20 bg-green/5 rounded-full blur-lg animate-bounce [animation-duration:3s]'></div>

      {/* Progress indicator */}
      <div className='absolute top-8 left-1/2 transform -translate-x-1/2 z-20'>
        <div className='flex items-center gap-2 px-6 py-3 bg-black/50 backdrop-blur-sm rounded-full border border-green/20'>
          <span className='text-white text-sm font-medium'>
            Work Experience
          </span>
          <div className='flex gap-1'>
            {allMissions.map((_, index) => (
              <div
                key={index}
                className='w-2 h-2 rounded-full bg-green/30 transition-all duration-300'
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className='absolute bottom-8 right-8 z-20 text-white/60 text-sm flex items-center gap-2'>
        <span>Scroll to explore</span>
        <div className='flex gap-1'>
          <div className='w-1 h-1 bg-green rounded-full animate-pulse'></div>
          <div className='w-1 h-1 bg-green rounded-full animate-pulse [animation-delay:0.2s]'></div>
          <div className='w-1 h-1 bg-green rounded-full animate-pulse [animation-delay:0.4s]'></div>
        </div>
      </div>

      <div ref={containerRef} className='flex items-center h-full'>
        {allMissions.map((mission, idx) => (
          <WorkCard
            key={idx}
            mission={mission}
            index={idx}
            isFlipped={flipped === idx}
            onFlip={() => setFlipped(flipped === idx ? null : idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
