import { useTranslation } from 'react-i18next';
import { useRef, useState, useEffect } from 'react';

interface TimelineItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  context: string;
  tasks: string[];
  skills: string[];
  startYear: number;
}

interface TimelineItemProps {
  mission: TimelineItem;
  index: number;
  isLeft: boolean;
  isFlipped: boolean;
  onFlip: () => void;
}

const TimelineItemComponent = ({
  mission,
  index,
  isLeft,
  isFlipped,
  onFlip,
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
        <div
          className='relative cursor-pointer perspective-1000'
          onClick={onFlip}
        >
          <div className='relative w-full'>
            {/* Front Side */}
            <div
              className={`w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 ${
                isFlipped ? 'hidden' : 'block'
              }`}
            >
              {/* Project name */}
              {mission.name && (
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  {mission.name}
                </h2>
              )}
              {/* Company and role */}
              <h3 className='text-xl text-green font-semibold mb-2'>
                @ {mission.company}
              </h3>
              <h4 className='text-lg font-medium text-gray-700 dark:text-gray-300 mb-4'>
                {mission.role}
              </h4>
              {/* Date badge */}
              <div className='inline-flex items-center gap-2 px-4 py-2 bg-green/10 text-green rounded-full text-sm font-semibold mb-6'>
                <div className='w-2 h-2 bg-green rounded-full animate-pulse'></div>
                {mission.startDate} - {mission.endDate || 'Present'}
              </div>

              {/* Context */}
              {mission.context && (
                <p className='text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic border-l-4 border-green/30 pl-4'>
                  {mission.context}
                </p>
              )}

              {/* Click indicator */}
              <div className='mt-6 flex items-center justify-end gap-2 text-gray-400 text-xs'>
                <span>Click to flip</span>
                <div className='w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center'>
                  <div className='w-1 h-1 bg-gray-400 rounded-full'></div>
                </div>
              </div>
            </div>

            {/* Back Side */}
            <div
              className={`w-full bg-gradient-to-br from-green/10 to-green/5 dark:from-green/20 dark:to-green/10 rounded-2xl p-8 shadow-xl border border-green/30 ${
                isFlipped ? 'block' : 'hidden'
              }`}
            >
              {/* Project name on back */}
              {mission.name && (
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                  {mission.name}
                </h3>
              )}

              {/* Description */}
              {mission.description && (
                <div className='mb-6'>
                  <h5 className='font-semibold text-gray-900 dark:text-white mb-3'>
                    Description
                  </h5>
                  <p className='text-gray-700 dark:text-gray-300 leading-relaxed text-sm'>
                    {mission.description}
                  </p>
                </div>
              )}

              {/* All Tasks */}
              {mission.tasks.length > 0 && (
                <div className='mb-6'>
                  <h5 className='font-semibold text-gray-900 dark:text-white mb-3'>
                    All Achievements
                  </h5>
                  <ul className='space-y-2'>
                    {mission.tasks.map((task: string, i: number) => (
                      <li
                        key={i}
                        className='flex items-start gap-3 text-gray-700 dark:text-gray-300'
                      >
                        <div className='w-1.5 h-1.5 bg-green rounded-full mt-2 flex-shrink-0'></div>
                        <span className='text-xs leading-relaxed'>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* All Skills */}
              {mission.skills.length > 0 && (
                <div>
                  <h5 className='font-semibold text-gray-900 dark:text-white mb-3'>
                    All Technologies
                  </h5>
                  <div className='flex flex-wrap gap-1'>
                    {mission.skills.map((skill: string, i: number) => (
                      <span
                        key={i}
                        className='px-2 py-1 bg-green/20 text-green text-xs rounded-full border border-green/30 capitalize'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Back indicator */}
              <div className='mt-6 flex items-center justify-end gap-2 text-green/70 text-xs'>
                <span>Click to return</span>
                <div className='w-4 h-4 border border-green/70 rounded-full flex items-center justify-center'>
                  <div className='w-1 h-1 bg-green/70 rounded-full'></div>
                </div>
              </div>
            </div>
          </div>

          {/* Connection line to timeline */}
          <div
            className={`absolute top-8 w-12 h-0.5 from-green/50 to-transparent ${
              isLeft
                ? '-right-12 bg-gradient-to-r'
                : '-left-12 bg-gradient-to-l'
            }`}
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
  const [flipped, setFlipped] = useState<number | null>(null);

  // Gather and sort all works by date
  const allMissions = (() => {
    const worksData = t('works', { returnObjects: true }) as any[];
    if (Array.isArray(worksData)) {
      return worksData.map((work: any) => ({
        id: work.name || `${work.company}-${work.role}`,
        name: work.name,
        role: work.role,
        company: work.company,
        location: work.location,
        startDate: work.start_date,
        endDate: work.end_date,
        description: work.description || '',
        context: work.context || '',
        tasks: work.tasks || [],
        skills: work.skills || [],
        startYear: parseInt(
          work.start_date?.split('/')[2] ||
            work.start_date?.split('/')[1] ||
            '2020'
        ),
      }));
    }
    return [];
  })().sort((a, b) => b.startYear - a.startYear); // Sort by start year, newest first

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
                isFlipped={flipped === index}
                onFlip={() => setFlipped(flipped === index ? null : index)}
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
