import SkillCard from './SkillCard';

const Skills = () => {
  const skills = [
    'react',
    'javascript',
    'python',
    'kafka',
    'git',
    'flutter',
    'kubernetes',
    'docker',
    'spark',
    'tailwind_css',
    'nodejs',
    'hadoop',
    'next',
    'flink',
  ];

  return (
    <section id='skills' className='relative h-full w-screen'>
      {/* Animated background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-green/5 via-transparent to-green/10 animate-pulse'></div>

      {/* Floating geometric shapes */}
      <div className='absolute top-10 left-10 w-20 h-20 border-2 border-green/20 rounded-full animate-bounce'></div>
      <div className='absolute top-1/4 right-16 w-16 h-16 border-2 border-green/30 rotate-45 animate-spin [animation-duration:8s]'></div>
      <div className='absolute bottom-20 left-1/4 w-12 h-12 bg-green/10 rounded-full animate-pulse'></div>
      <div className='absolute bottom-1/3 right-1/3 w-8 h-8 border-2 border-green/25 animate-bounce [animation-delay:2s]'></div>

      <div className='relative z-10 flex flex-col h-full justify-center items-center p-8'>
        {/* Section title */}
        <div className='text-center mb-16'>
          <h2 className='text-6xl font-bold mb-4 bg-gradient-to-r from-green to-green/70 bg-clip-text text-transparent'>
            Skills & Technologies
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-transparent via-green to-transparent mx-auto rounded-full'></div>
        </div>{' '}
        {/* Skills grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 max-w-6xl'>
          {skills.map((skill, index) => (
            <div
              key={skill}
              className='transform transition-all duration-500 hover:scale-110 hover:-translate-y-2'
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards',
              }}
            >
              <SkillCard skill={skill} index={index} />
            </div>
          ))}
        </div>
        {/* Bottom decoration */}
        <div className='mt-16 flex space-x-2'>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className='w-2 h-2 bg-green rounded-full animate-pulse'
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
