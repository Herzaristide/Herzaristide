import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 ${
        index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.2}s`,
        animation: 'slideInFromBottom 0.8s ease-out forwards',
      }}
    >
      {/* Glowing border effect */}
      <div className='absolute -inset-0.5 bg-gradient-to-r from-green via-green/50 to-green opacity-0 group-hover:opacity-50 blur transition-opacity duration-500 rounded-3xl'></div>

      {/* Main card content */}
      <div className='relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:border-green/50 transition-colors duration-300'>
        {/* Project Image */}
        <div className='relative h-48 overflow-hidden'>
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              index === 0
                ? 'from-blue-400 to-purple-500'
                : index === 1
                ? 'from-green-400 to-blue-500'
                : 'from-purple-400 to-pink-500'
            } transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          >
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='text-6xl font-bold text-white/20'>
                {title.charAt(0)}
              </div>
            </div>
          </div>

          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className='flex gap-4'>
              {githubUrl && (
                <a
                  href={githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors duration-300'
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    className='w-6 h-6 text-white'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors duration-300'
                  onClick={(e) => e.stopPropagation()}
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
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Floating particles */}
          <div className='absolute top-4 right-4'>
            <div className='w-2 h-2 bg-white/60 rounded-full animate-pulse'></div>
          </div>
          <div className='absolute bottom-6 left-6'>
            <div className='w-1 h-1 bg-white/40 rounded-full animate-ping'></div>
          </div>
        </div>

        {/* Content */}
        <div className='p-6'>
          <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green transition-colors duration-300'>
            {title}
          </h3>

          <p className='text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed'>
            {description}
          </p>

          {/* Technologies */}
          <div className='flex flex-wrap gap-2 mb-4'>
            {technologies.map((tech, techIndex) => (
              <span
                key={tech}
                className='px-3 py-1 bg-green/10 text-green text-xs font-medium rounded-full border border-green/20 hover:bg-green/20 transition-colors duration-300'
                style={{
                  animationDelay: `${index * 0.2 + techIndex * 0.1}s`,
                  animation: 'fadeIn 0.6s ease-out forwards',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Progress bar animation */}
          <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden'>
            <div
              className={`h-full bg-gradient-to-r from-green to-green/70 transition-all duration-1000 ${
                isHovered ? 'w-full' : 'w-0'
              }`}
            ></div>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green/5 to-transparent rounded-bl-full'></div>
        <div className='absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green/5 to-transparent rounded-tr-full'></div>
      </div>
    </div>
  );
};

export default ProjectCard;
