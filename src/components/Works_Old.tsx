import { useTranslation } from 'react-i18next';
import { jobs } from '../constant';
import { useRef, useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks';

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

const Works = () => {
  const { t } = useTranslation();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Gather and sort all missions by date
  const allMissions = jobs.flatMap((job) => {
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
        startYear: parseInt(mission.start_date.split('/')[2] || mission.start_date.split('/')[1] || '2020'),
      }));
    }
    return [];
  }).sort((a, b) => b.startYear - a.startYear); // Sort by start year, newest first

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
        const visibleHeight = Math.min(elementHeight, visibleTop, elementBottom);
        progress = Math.min(visibleHeight / elementHeight, 1);
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id='works'
      className='relative min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black'
    >
      {/* Floating background elements */}
      <div className='absolute top-1/4 left-10 w-32 h-32 bg-green/5 rounded-full blur-xl animate-pulse [animation-duration:4s]'></div>
      <div className='absolute top-1/2 right-20 w-24 h-24 bg-green/10 rounded-full blur-lg animate-pulse [animation-duration:6s]'></div>
      <div className='absolute bottom-20 left-1/3 w-20 h-20 bg-green/5 rounded-full blur-lg animate-pulse [animation-duration:4s] [animation-delay:2s]'></div>

      {/* Header */}
      <div className='absolute top-8 left-1/2 transform -translate-x-1/2 z-20'>
        <div className='flex items-center gap-4 px-8 py-4 bg-black/50 backdrop-blur-sm rounded-full border border-green/20'>
          <span className='text-white text-lg font-semibold'>
            Work Experience
          </span>
          <div className='flex gap-2'>
            {allMissions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  index === currentCard
                    ? 'bg-green scale-125 shadow-lg shadow-green/50'
                    : 'bg-green/30 hover:bg-green/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => currentCard > 0 && goToCard(currentCard - 1)}
        disabled={currentCard === 0}
        className='absolute left-8 top-1/2 -translate-y-1/2 z-20 p-4 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed rounded-full border border-green/20 transition-all duration-300 hover:scale-110 hover:border-green/50'
      >
        <svg
          className='w-6 h-6 text-white'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>

      <button
        onClick={() =>
          currentCard < allMissions.length - 1 && goToCard(currentCard + 1)
        }
        disabled={currentCard === allMissions.length - 1}
        className='absolute right-8 top-1/2 -translate-y-1/2 z-20 p-4 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed rounded-full border border-green/20 transition-all duration-300 hover:scale-110 hover:border-green/50'
      >
        <svg
          className='w-6 h-6 text-white'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 5l7 7-7 7'
          />
        </svg>
      </button>

      {/* Card counter */}
      <div className='absolute bottom-8 left-8 z-20 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg border border-green/20'>
        <span className='text-white font-mono text-lg'>
          {String(currentCard + 1).padStart(2, '0')} /{' '}
          {String(allMissions.length).padStart(2, '0')}
        </span>
      </div>

      {/* Instructions */}
      <div className='absolute bottom-8 right-8 z-20 text-white/60 text-sm text-right'>
        <div>Drag • Arrow keys • Mouse wheel</div>
        <div className='flex gap-1 justify-end mt-1'>
          <div className='w-1 h-1 bg-green rounded-full animate-pulse'></div>
          <div className='w-1 h-1 bg-green rounded-full animate-pulse [animation-delay:0.2s]'></div>
          <div className='w-1 h-1 bg-green rounded-full animate-pulse [animation-delay:0.4s]'></div>
        </div>
      </div>

      {/* Carousel container */}
      <div
        ref={containerRef}
        className='flex h-full overflow-x-auto scrollbar-hide cursor-grab select-none'
        style={{
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          touchAction: 'pan-x', // Only allow horizontal touch scrolling
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          if (isDragging) handleMouseUp();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
        onScroll={handleScroll}
        onTouchStart={(e) => {
          const touch = e.touches[0];
          if (containerRef.current) {
            setIsDragging(true);
            setStartX(touch.pageX - containerRef.current.offsetLeft);
            setScrollLeft(containerRef.current.scrollLeft);
          }
        }}
        onTouchMove={(e) => {
          if (!isDragging || !containerRef.current) return;
          const touch = e.touches[0];
          const x = touch.pageX - containerRef.current.offsetLeft;
          const walk = (x - startX) * 2;
          containerRef.current.scrollLeft = scrollLeft - walk;
        }}
        onTouchEnd={handleMouseUp}
      >
        {allMissions.map((mission, idx) => (
          <div
            key={idx}
            className='flex-shrink-0 w-full h-full'
            style={{ scrollSnapAlign: 'start' }}
          >
            <WorkCard
              mission={mission}
              index={idx}
              isFlipped={flipped === idx}
              onFlip={() => setFlipped(flipped === idx ? null : idx)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
