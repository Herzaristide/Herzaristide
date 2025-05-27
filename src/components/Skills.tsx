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
    <section id='skills' className='relative h-dvh w-screen'>
      <div className='flex flex-wrap gap-2 justify-center'>
        {skills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
