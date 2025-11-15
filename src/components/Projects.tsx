import { contactsUrl } from '../constant';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'VisionForge',
      description:
        'An advanced AI-powered computer vision platform with MLflow integration for model tracking and deployment. Features real-time image processing, machine learning pipelines, and automated model versioning.',
      technologies: [
        'Python',
        'FastAPI',
        'MLflow',
        'Docker',
        'React',
        'TensorFlow',
      ],
      image: '/images/visionforge.jpg',
      githubUrl: 'https://github.com/yourusername/visionforge',
      liveUrl: 'https://visionforge-demo.com',
    },
    {
      title: 'Violinova',
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
      image: '/images/violinova.jpg',
      githubUrl: 'https://github.com/yourusername/violinova',
      liveUrl: 'https://violinova.app',
    },
    {
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
      image: '/images/portfolio.jpg',
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://aristide-portfolio.com',
    },
  ];

  return (
    <section
      id='projects'
      className='relative min-h-dvh w-screen py-20 overflow-hidden'
    >
      {/* Animated background */}

      {/* Floating background elements */}
      <div className='absolute top-20 left-10 w-32 h-32 bg-green/5 rounded-full blur-xl animate-float'></div>
      <div className='absolute top-1/3 right-20 w-24 h-24 bg-green/10 rounded-full blur-lg animate-pulse'></div>
      <div className='absolute bottom-20 left-1/4 w-20 h-20 bg-green/5 rounded-full blur-lg animate-bounce'></div>

      <div className='relative z-10 container mx-auto px-8'>
        {/* Section header */}
        <div className='text-center mb-16'>
          <h2 className='text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green to-gray-900 dark:from-white dark:via-green dark:to-white bg-clip-text text-transparent'>
            Featured Projects
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed'>
            A showcase of my latest work in web development, AI, and creative
            technology
          </p>
          <div className='w-32 h-1 bg-gradient-to-r from-transparent via-green to-transparent mx-auto mt-6 rounded-full'></div>
        </div>

        {/* Projects grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              index={index}
            />
          ))}
        </div>

        {/* Bottom call to action */}
        <div className='text-center mt-16'>
          <div className='inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-green/10 to-green/5 rounded-full border border-green/20 hover:border-green/40 transition-colors duration-300'>
            <span className='text-gray-700 dark:text-gray-300 font-medium'>
              Want to see more projects?
            </span>
            <a
              href={contactsUrl.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-green hover:text-green/80 transition-colors duration-300 font-semibold'
            >
              Visit my GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
