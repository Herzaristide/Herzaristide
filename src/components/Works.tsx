import { useTranslation } from 'react-i18next';
import { jobs } from '../constant';
import { useRef, useState, useEffect } from 'react';

interface TimelineItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  context: string;
  tasks: string[];
  skills: string[];
  startYear: number;
}

interface TimelineItemProps {
  mission: TimelineItem;
  index: number;
  isLeft: boolean;
}

const TimelineItemComponent = ({
  mission,
  index,
  isLeft,
}: TimelineItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative flex ${
        isLeft ? 'justify-start' : 'justify-end'
      } mb-16`}
    >
      {/* Timeline dot */}
      <div className='absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-green rounded-full z-10 shadow-lg'>
        <div className='w-full h-full bg-green rounded-full animate-pulse'></div>
      </div>

      {/* Content card */}
      <div
        className={`w-5/12 ${
          isLeft ? 'pr-12' : 'pl-12'
        } transform transition-all duration-700 ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : `${isLeft ? 'translate-x-8' : '-translate-x-8'} opacity-0`
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className='bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-105'>
          {/* Date badge */}
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-green/10 text-green rounded-full text-sm font-semibold mb-4'>
            <div className='w-2 h-2 bg-green rounded-full animate-pulse'></div>
            {mission.startDate} - {mission.endDate}
          </div>

          {/* Role and company */}
          <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
            {mission.role}
          </h3>
          <h4 className='text-xl text-green font-semibold mb-4'>
            @ {mission.company}
          </h4>

          {/* Location */}
          <div className='flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6'>
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
            <span className='capitalize'>{mission.location}</span>
          </div>

          {/* Context */}
          {mission.context && (
            <p className='text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic border-l-4 border-green/30 pl-4'>
              {mission.context}
            </p>
          )}

          {/* Tasks */}
          {mission.tasks.length > 0 && (
            <div className='mb-6'>
              <h5 className='font-semibold text-gray-900 dark:text-white mb-3'>
                Key Achievements
              </h5>
              <ul className='space-y-2'>
                {mission.tasks.slice(0, 3).map((task: string, i: number) => (
                  <li
                    key={i}
                    className='flex items-start gap-3 text-gray-700 dark:text-gray-300'
                  >
                    <div className='w-2 h-2 bg-green rounded-full mt-2 flex-shrink-0'></div>
                    <span className='text-sm leading-relaxed'>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills */}
          {mission.skills.length > 0 && (
            <div>
              <h5 className='font-semibold text-gray-900 dark:text-white mb-3'>
                Technologies
              </h5>
              <div className='flex flex-wrap gap-2'>
                {mission.skills.slice(0, 6).map((skill: string, i: number) => (
                  <span
                    key={i}
                    className='px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600 hover:border-green/50 transition-colors duration-300'
                  >
                    {skill}
                  </span>
                ))}
                {mission.skills.length > 6 && (
                  <span className='px-3 py-1 text-green text-sm font-medium'>
                    +{mission.skills.length - 6} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Connection line to timeline */}
          <div
            className={`absolute top-8 ${
              isLeft ? '-right-12' : '-left-12'
            } w-12 h-0.5 bg-gradient-to-${
              isLeft ? 'r' : 'l'
            } from-green/50 to-transparent`}
          ></div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const { t } = useTranslation();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Gather and sort all missions by date
  const allMissions = jobs
    .flatMap((job) => {
      const jobData = t(`${job}`, { returnObjects: true }) as any;
      if (
        jobData &&
        typeof jobData === 'object' &&
        Array.isArray(jobData.missions)
      ) {
        return jobData.missions.map((mission: any) => ({
          id: `${job}-${mission.name || mission.role}`,
          role: mission.role,
          company: mission.company,
          location: mission.location,
          startDate: mission.start_date,
          endDate: mission.end_date,
          context: mission.context || '',
          tasks: mission.tasks || [],
          skills: mission.skills || [],
          startYear: parseInt(
            mission.start_date.split('/')[2] ||
              mission.start_date.split('/')[1] ||
              '2020'
          ),
        }));
      }
      return [];
    })
    .sort((a, b) => b.startYear - a.startYear); // Sort by start year, newest first

  // Handle scroll progress for timeline animation
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Calculate progress based on how much of the timeline is visible
      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      let progress = 0;

      if (elementTop <= windowHeight && elementBottom >= 0) {
        const visibleTop = Math.max(0, windowHeight - elementTop);
        const visibleHeight = Math.min(
          elementHeight,
          visibleTop,
          elementBottom
        );
        progress = Math.min(visibleHeight / elementHeight, 1);
      }

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='works' className='relative min-h-screen py-20'>
      {/* Section header */}
      <div className='container mx-auto px-8 mb-16'>
        <div className='text-center'>
          <h2 className='text-5xl md:text-6xl font-bold mb-4'>
            <span className='bg-gradient-to-r from-gray-900 via-green to-gray-900 dark:from-white dark:via-green dark:to-white bg-clip-text text-transparent'>
              Work Experience
            </span>
          </h2>
          <p className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'>
            A chronological journey through my professional experience and key
            achievements
          </p>
        </div>
      </div>

      {/* Timeline container */}
      <div ref={timelineRef} className='container mx-auto px-8'>
        <div className='relative'>
          {/* Central timeline line */}
          <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 dark:bg-gray-700'>
            {/* Animated progress line */}
            <div
              className='w-full bg-gradient-to-b from-green to-green/70 transition-all duration-300 ease-out'
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Timeline items */}
          <div className='space-y-8'>
            {allMissions.map((mission, index) => (
              <TimelineItemComponent
                key={mission.id}
                mission={mission}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <div className='fixed bottom-8 right-8 z-20'>
        <div className='w-16 h-16 relative'>
          <svg
            className='w-full h-full transform -rotate-90'
            viewBox='0 0 36 36'
          >
            <path
              d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeDasharray='100, 100'
              className='text-gray-300 dark:text-gray-700'
            />
            <path
              d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeDasharray={`${scrollProgress * 100}, 100`}
              className='text-green transition-all duration-300 ease-out'
            />
          </svg>
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-xs font-mono text-gray-600 dark:text-gray-400'>
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
