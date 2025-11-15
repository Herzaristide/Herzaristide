import { useState, useMemo } from 'react';
import SkillCard from './SkillCard';
import { skills } from '../constant';

const Skills = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [minScore, setMinScore] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'name' | 'score'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(skills.map((skill) => skill.category)));
    return cats.sort();
  }, []);

  // Process skills with matching status and sort them
  const processedSkills = useMemo(() => {
    // Add matching status to each skill
    let processedSkills = skills.map((skill) => {
      const categoryMatch =
        categoryFilter === 'all' || skill.category === categoryFilter;
      const scoreMatch = skill.score >= minScore;
      return {
        ...skill,
        isMatching: categoryMatch && scoreMatch,
      };
    });

    // Sort skills
    processedSkills.sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else {
        comparison = a.score - b.score;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return processedSkills;
  }, [categoryFilter, minScore, sortBy, sortOrder]);

  // Count matching skills for display
  const matchingCount = processedSkills.filter(
    (skill) => skill.isMatching
  ).length;

  return (
    <section id='skills' className='relative min-h-screen w-screen py-20'>
      {/* Animated background gradient */}

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
        </div>

        {/* Filter and Sort Controls */}
        <div className='bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl p-6 mb-12 max-w-5xl border border-green/20'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {/* Category Filter */}
            <div className='space-y-2'>
              <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                Category
              </label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className='w-full px-3 py-2 bg-white dark:bg-gray-800 border border-green/30 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-green focus:border-transparent'
              >
                <option value='all'>All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Score Filter */}
            <div className='space-y-2'>
              <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                Min Score
              </label>
              <select
                value={minScore}
                onChange={(e) => setMinScore(Number(e.target.value))}
                className='w-full px-3 py-2 bg-white dark:bg-gray-800 border border-green/30 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-green focus:border-transparent'
              >
                <option value={0}>Any Score</option>
                <option value={1}>1+</option>
                <option value={2}>2+</option>
                <option value={3}>3+</option>
                <option value={4}>4+</option>
                <option value={5}>5</option>
              </select>
            </div>

            {/* Sort By */}
            <div className='space-y-2'>
              <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'score')}
                className='w-full px-3 py-2 bg-white dark:bg-gray-800 border border-green/30 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-green focus:border-transparent'
              >
                <option value='name'>Name</option>
                <option value='score'>Score</option>
              </select>
            </div>

            {/* Sort Order */}
            <div className='space-y-2'>
              <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                Order
              </label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                className='w-full px-3 py-2 bg-white dark:bg-gray-800 border border-green/30 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-green focus:border-transparent'
              >
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className='mt-4 text-center text-sm text-gray-600 dark:text-gray-400'>
            Showing {processedSkills.filter((skill) => skill.isMatching).length}{' '}
            of {skills.length} skills
          </div>
        </div>

        {/* Skills grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 max-w-6xl'>
          {processedSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 ${
                skill.isMatching
                  ? 'opacity-100'
                  : 'opacity-30 grayscale hover:opacity-50 hover:grayscale-0'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards',
              }}
            >
              <SkillCard skill={skill.name} score={skill.score} />
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
