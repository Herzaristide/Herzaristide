import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import { jobs } from '../constant';
import { useRef, useState } from 'react';

const Works = () => {
  const { t } = useTranslation();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
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
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            className='job_section w-screen h-full p-8 flex items-center justify-center perspective-1000 relative'
          >
            {/* Background gradient for each card */}
            <div className='absolute inset-0 bg-gradient-to-br from-green/5 via-transparent to-green/10 opacity-50'></div>

            {/* Card number indicator */}
            <div className='absolute top-8 left-8 text-8xl font-bold text-green/10 pointer-events-none'>
              {String(idx + 1).padStart(2, '0')}
            </div>

            <div
              className='relative w-full w-screen h-3/4 cursor-pointer group'
              onClick={() => setFlipped(flipped === idx ? null : idx)}
            >
              {/* Glowing effect */}
              <div className='absolute -inset-1 bg-gradient-to-r from-green/20 to-green/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

              <div
                className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:scale-105 ${
                  flipped === idx ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                {/* Front Side */}
                <div className='absolute w-full h-full flex flex-col justify-center rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-12 [backface-visibility:hidden] border border-white/20 shadow-2xl'>
                  {/* Role Badge */}
                  <div className='inline-flex items-center gap-2 px-4 py-2 bg-green/20 text-green rounded-full text-sm font-semibold mb-6 w-fit'>
                    <div className='w-2 h-2 bg-green rounded-full animate-pulse'></div>
                    Professional Experience
                  </div>

                  <h1 className='font-extrabold text-6xl lg:text-7xl xl:text-8xl text-green mb-4 leading-tight'>
                    {mission.jobRole}
                  </h1>

                  <h2 className='font-bold uppercase text-3xl lg:text-4xl text-white/90 mb-8 tracking-wider'>
                    {mission.jobCompany}
                  </h2>

                  {mission.name && (
                    <h3 className='text-2xl lg:text-3xl font-bold text-white/80 mb-6 leading-relaxed'>
                      {mission.name}
                    </h3>
                  )}

                  <div className='space-y-4 text-white/70'>
                    <div className='text-xl lg:text-2xl'>
                      <span className='font-semibold text-white'>
                        {mission.role}
                      </span>
                      {mission.company && (
                        <span className='text-green'> @ {mission.company}</span>
                      )}
                    </div>

                    <div className='flex items-center gap-4 text-lg'>
                      <span className='flex items-center gap-2'>
                        <div className='w-2 h-2 bg-green rounded-full'></div>
                        {mission.location}
                      </span>
                      <span className='text-green/80'>
                        {mission.start_date} - {mission.end_date}
                      </span>
                    </div>
                  </div>

                  {/* Click indicator */}
                  <div className='absolute bottom-8 right-8 flex items-center gap-2 text-white/50 text-sm'>
                    <span>Click to flip</span>
                    <div className='w-6 h-6 border border-white/30 rounded-full flex items-center justify-center animate-pulse'>
                      <div className='w-2 h-2 bg-white/50 rounded-full'></div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className='absolute w-full h-full flex flex-col justify-center rounded-3xl bg-gradient-to-br from-green/20 to-green/10 backdrop-blur-md p-12 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-green/30 shadow-2xl'>
                  {/* Details Badge */}
                  <div className='inline-flex items-center gap-2 px-4 py-2 bg-green/30 text-white rounded-full text-sm font-semibold mb-6 w-fit'>
                    <div className='w-2 h-2 bg-white rounded-full animate-pulse'></div>
                    Project Details
                  </div>

                  {mission.context && (
                    <div className='mb-8'>
                      <h4 className='text-xl font-semibold text-white mb-3'>
                        Context
                      </h4>
                      <p className='text-lg text-white/90 italic leading-relaxed border-l-4 border-green/50 pl-4'>
                        {mission.context}
                      </p>
                    </div>
                  )}

                  {Array.isArray(mission.tasks) && mission.tasks.length > 0 && (
                    <div className='mb-8'>
                      <h4 className='text-xl font-semibold text-white mb-4'>
                        Key Responsibilities
                      </h4>
                      <ul className='space-y-2'>
                        {mission.tasks.map((task, i) => (
                          <li
                            key={i}
                            className='flex items-start gap-3 text-white/90 leading-relaxed'
                          >
                            <div className='w-2 h-2 bg-green rounded-full mt-2 flex-shrink-0'></div>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {Array.isArray(mission.skills) &&
                    mission.skills.length > 0 && (
                      <div>
                        <h4 className='text-xl font-semibold text-white mb-4'>
                          Technologies & Skills
                        </h4>
                        <div className='flex flex-wrap gap-3'>
                          {mission.skills.map((skill, i) => (
                            <span
                              key={i}
                              className='px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-colors duration-300'
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Back indicator */}
                  <div className='absolute bottom-8 right-8 flex items-center gap-2 text-white/60 text-sm'>
                    <span>Click to return</span>
                    <div className='w-6 h-6 border border-white/40 rounded-full flex items-center justify-center animate-pulse'>
                      <div className='w-2 h-2 bg-white/60 rounded-full'></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className='absolute -top-4 -right-4 w-8 h-8 bg-green/20 rounded-full animate-pulse'></div>
              <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-green/30 rounded-full animate-ping'></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
