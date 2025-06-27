import { getIcon } from '../utils/iconImports';

interface HomeSkillButtonProps {
  skill: {
    name: string;
    score: number;
    favorite: boolean;
  };
  index: number;
  isVisible: boolean;
}

const HomeSkillButton = ({ skill, index, isVisible }: HomeSkillButtonProps) => {
  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ transitionDelay: `${800 + index * 150}ms` }}
    >
      <div className='group relative'>
        {/* Glowing effect */}
        <div className='absolute -inset-0.5 bg-gradient-to-r from-green to-green/50 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300'></div>

        {/* Enhanced button */}
        <div className='relative bg-green hover:bg-green/80 text-white font-semibold px-6 py-3 rounded-full border-2 border-green hover:border-green/60 cursor-pointer transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-green/25'>
          <span className='relative z-10 flex items-center gap-2'>
            <img
              src={getIcon(skill.name)}
              alt={skill.name}
              className='w-5 h-5 filter brightness-0 invert'
            />
            <span className='capitalize'>{skill.name}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeSkillButton;
