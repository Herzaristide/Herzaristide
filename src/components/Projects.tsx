import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Project data
const projects = [
  {
    id: 2,
    title: 'V1brate',
    description:
      'Interactive music learning platform powered by ML5.js for real-time pitch detection. Features progressive lessons, practice tracking, and personalized feedback for violin students.',
    technologies: [
      'Next.js',
      'TypeScript',
      'ML5.js',
      'Supabase',
      'Tailwind CSS',
      'Stripe',
    ],
    liveUrl: 'https://v1brate.4rts.xyz',
    githubUrl: 'https://github.com/yourusername/violinova',
  },
  {
    id: 3,
    title: 'Portfolio',
    description:
      'Modern, responsive portfolio website showcasing my skills and projects. Built with React and featuring smooth animations, dark mode support, and multilingual capabilities.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'i18n',
      'Framer Motion',
    ],
    liveUrl: 'https://herzaristide.vercel.app/',
    githubUrl: 'https://github.com/yourusername/portfolio',
  },
];

// Pixelated Green Screen Component
const PixelatedGreenScreen = () => {
  const [pixels, setPixels] = useState<boolean[]>([]);

  useEffect(() => {
    // Generate initial pixel grid (30x20 = 600 pixels)
    const gridSize = 600;
    const initialPixels = Array(gridSize)
      .fill(false)
      .map(() => Math.random() > 0.7);
    setPixels(initialPixels);

    // Animate pixels
    const interval = setInterval(() => {
      setPixels((prev) => prev.map(() => Math.random() > 0.85));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-full bg-green-900 relative overflow-hidden'>
      {/* Scanlines effect */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent animate-pulse'></div>

      {/* Pixel grid */}
      <div
        className='grid gap-1 p-4 w-full h-full'
        style={{ gridTemplateColumns: 'repeat(30, minmax(0, 1fr))' }}
      >
        {pixels.map((isActive, index) => (
          <div
            key={index}
            className={`aspect-square transition-all duration-200 rounded-sm ${
              isActive
                ? 'bg-green-400 shadow-lg shadow-green-400/50'
                : 'bg-green-800/20'
            }`}
            style={{
              boxShadow: isActive ? '0 0 8px #4ade80' : 'none',
            }}
          />
        ))}
      </div>

      {/* Static noise overlay */}
      <div
        className='absolute inset-0 opacity-10'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Center text */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-center'>
          <div className='text-green-400 font-mono text-4xl font-bold animate-pulse mb-4'>
            SELECT PROJECT
          </div>
          <div className='text-green-500 font-mono text-lg animate-bounce'>
            ▶ Click a project card to preview
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className='absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-green-400'></div>
      <div className='absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-green-400'></div>
      <div className='absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-green-400'></div>
      <div className='absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-green-400'></div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({
  project,
  isSelected,
  onClick,
}: {
  project: any;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer bg-white dark:bg-gray-800 rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
        isSelected
          ? 'border-green shadow-lg shadow-green/20'
          : 'border-gray-200 dark:border-gray-700 hover:border-green/50'
      }`}
    >
      {/* Status indicator */}
      <div className='flex items-center gap-2 mb-4'>
        <div
          className={`w-3 h-3 rounded-full ${
            isSelected ? 'bg-green animate-pulse' : 'bg-gray-400'
          }`}
        ></div>
        <span className='text-xs font-mono text-gray-500 dark:text-gray-400 uppercase'>
          {isSelected ? 'Active' : 'Ready'}
        </span>
      </div>

      {/* Project title */}
      <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green transition-colors'>
        {project.title}
      </h3>

      {/* Description */}
      <p className='text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3'>
        {project.description}
      </p>

      {/* Technologies */}
      <div className='flex flex-wrap gap-1 mb-4'>
        {project.technologies.slice(0, 3).map((tech: string) => (
          <span
            key={tech}
            className='px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded font-mono'
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className='px-2 py-1 text-green text-xs font-mono'>
            +{project.technologies.length - 3}
          </span>
        )}
      </div>

      {/* Action buttons */}
      <div className='flex gap-2'>
        <button className='flex-1 px-3 py-2 bg-green/10 text-green text-xs font-semibold rounded hover:bg-green/20 transition-colors'>
          Preview
        </button>
        <a
          href={project.githubUrl}
          target='_blank'
          rel='noopener noreferrer'
          onClick={(e) => e.stopPropagation()}
          className='px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded hover:border-green hover:text-green transition-colors'
        >
          Code
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleProjectSelect = (project: any) => {
    setSelectedProject(selectedProject?.id === project.id ? null : project);
  };

  return (
    <section
      id='projects'
      className='relative h-screen w-screen overflow-hidden'
    >
      {/* Background elements */}
      <div className='absolute top-10 right-10 w-20 h-20 border-2 border-green/20 rounded-full animate-bounce'></div>
      <div className='absolute bottom-20 left-10 w-16 h-16 border-2 border-green/30 rotate-45 animate-spin [animation-duration:8s]'></div>

      <div className='flex h-full'>
        {/* Left side - Preview iframe (2/3 width) */}
        <div className='w-2/3 h-full relative bg-black'>
          {/* Browser header bar */}
          <div className='absolute top-0 left-0 right-0 h-12 bg-gray-900 border-b border-gray-700 flex items-center px-4 z-10'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-red-500 rounded-full'></div>
              <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
              <div className='w-3 h-3 bg-green-500 rounded-full'></div>
            </div>
            <div className='flex-1 text-center'>
              <div className='bg-gray-800 text-gray-300 px-4 py-1 rounded text-sm font-mono max-w-md mx-auto truncate'>
                {selectedProject
                  ? selectedProject.liveUrl
                  : 'No project selected'}
              </div>
            </div>
          </div>

          {/* Content area */}
          <div className='pt-12 h-full'>
            {selectedProject ? (
              <iframe
                src={selectedProject.liveUrl}
                className='w-full h-full border-0'
                title={selectedProject.title}
                sandbox='allow-scripts allow-same-origin allow-forms allow-popups'
              />
            ) : (
              <PixelatedGreenScreen />
            )}
          </div>
        </div>

        {/* Right side - Project cards (1/3 width) */}
        <div className='w-1/3 h-full bg-gray-50 dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 flex flex-col'>
          {/* Header */}
          <div className='p-6 border-b border-gray-200 dark:border-gray-700'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
              Featured Projects
            </h2>
            <p className='text-gray-600 dark:text-gray-400 text-sm'>
              Select a project to preview
            </p>
          </div>

          {/* Project cards */}
          <div className='flex-1 overflow-y-auto p-4 space-y-4'>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`transform transition-all duration-500 ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <ProjectCard
                  project={project}
                  isSelected={selectedProject?.id === project.id}
                  onClick={() => handleProjectSelect(project)}
                />
              </div>
            ))}
          </div>

          {/* Footer info */}
          <div className='p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-100/50 dark:bg-gray-800/50'>
            <div className='text-center text-xs text-gray-500 dark:text-gray-400 font-mono'>
              {projects.length} projects • Interactive preview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

// Add global styles for the pixelated grid
const styles = `
  .grid-cols-20 {
    grid-template-columns: repeat(20, minmax(0, 1fr));
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}
