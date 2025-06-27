interface SkillButtonProps {
  skill: string;
  index?: number;
}

const SkillButton = ({ skill, index }: SkillButtonProps) => {
  return (
    <span className='capitalize px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-colors duration-300 whitespace-nowrap flex-shrink-0'>
      {skill}
    </span>
  );
};

export default SkillButton;
