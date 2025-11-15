import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { skills } from '../constant';

const SkillCard = ({ skill, score }: { skill: string; score: number }) => {
  const { t } = useTranslation();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  // Find the skill data from constants
  const skillData = skills.find(
    (s) => s.name.toLowerCase() === skill.toLowerCase()
  );

  return (
    <div className='group relative perspective-1000' onClick={handleClick}>
      {/* Glowing background effect */}
      <div className='absolute -inset-0.5 bg-gradient-to-r from-green to-green/50 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500'></div>

      {/* Card container with flip effect */}
      <div
        className={`relative w-28 h-28 sm:w-32 sm:h-32 cursor-pointer transform-style-preserve-3d transition-transform duration-700 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front side - Skill icon */}
        <div className='absolute inset-0 bg-white dark:bg-black/50 backdrop-blur-sm rounded-2xl border-2 border-green/30 group-hover:border-green p-6 flex flex-col justify-center items-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-green/25 backface-hidden'>
          {/* Icon */}
          <div className='transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110'>
            <img
              src={skillData?.icon}
              alt={skill}
              className='w-8 h-8 sm:w-10 sm:h-10 filter group-hover:drop-shadow-lg'
            />
          </div>

          {/* Skill name */}
          <span className='text-xs mt-2 font-medium text-center text-gray-600 dark:text-gray-300 group-hover:text-green transition-colors duration-300 capitalize'>
            {skill.replace('_', ' ')}
          </span>

          {/* Hover overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl'></div>
        </div>

        {/* Back side - Random Number */}
        <div className='absolute inset-0 bg-gradient-to-br from-green/20 to-green/10 backdrop-blur-sm rounded-2xl border-2 border-green p-6 flex flex-col justify-center items-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-green/25 backface-hidden rotate-y-180'>
          <div className='text-4xl sm:text-5xl font-bold text-green animate-pulse'>
            {score}
          </div>
          <div className='text-xs mt-2 font-medium text-center text-green/70'>
            {t('luckyNumber', { score })}
          </div>

          {/* Decorative elements */}
          <div className='absolute top-2 right-2 w-2 h-2 bg-green rounded-full animate-ping'></div>
          <div className='absolute bottom-2 left-2 w-1 h-1 bg-green/50 rounded-full animate-pulse'></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
