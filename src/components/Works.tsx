import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import { jobs } from '../constant';
import { useRef, useState } from 'react';

const Works = () => {
  const { t } = useTranslation();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [flipped, setFlipped] = useState<number | null>(null);

  // Gather all missions from all jobs
  const allMissions = jobs.flatMap((job) => {
    const jobData = t(`works:${job}`, { returnObjects: true });
    if (Array.isArray(jobData.missions)) {
      return jobData.missions.map((mission) => ({
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
        scrub: 0.5,
        end: '+=3000',
      },
    });
  });

  return (
    <section id='works' className='relative h-dvh flex'>
      <div className='flex items-center h-full'>
        {allMissions.map((mission, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            className='job_section w-screen h-1/2 p-8 flex items-center justify-center perspective-1000'
            style={{ cursor: 'pointer' }}
            onClick={() => setFlipped(flipped === idx ? null : idx)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                flipped === idx ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front Side */}
              <div className='absolute w-full h-full flex-col gap-4 flex justify-center rounded-4xl bg-white/10 h-full p-8 [backface-visibility:hidden]'>
                <h1 className='font-extrabold capitalize text-6xl text-green'>
                  {mission.jobRole}
                </h1>
                <h1 className='font-bold uppercase text-3xl mb-4'>
                  {mission.jobCompany}
                </h1>
                {mission.name && (
                  <h2 className='text-2xl font-bold mb-2'>{mission.name}</h2>
                )}
                <div className='text-lg mb-1'>
                  <span className='font-semibold'>{mission.role}</span>{' '}
                  {mission.company && `@ ${mission.company}`}
                </div>
                <div className='text-sm mb-1'>
                  {mission.location} | {mission.start_date} - {mission.end_date}
                </div>
              </div>
              {/* Back Side */}
              <div className='absolute w-full h-full flex-col gap-4 flex justify-center rounded-4xl bg-white/20 p-8 [backface-visibility:hidden] rotate-y-180'>
                {mission.context && (
                  <div className='italic mb-2'>{mission.context}</div>
                )}
                {Array.isArray(mission.tasks) && mission.tasks.length > 0 && (
                  <ul className='list-disc ml-6 mb-2'>
                    {mission.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                )}
                {Array.isArray(mission.skills) && mission.skills.length > 0 && (
                  <div className='flex flex-wrap gap-2 mt-2'>
                    {mission.skills.map((skill, i) => (
                      <span
                        key={i}
                        className='bg-green/20 text-green px-2 py-1 rounded'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
