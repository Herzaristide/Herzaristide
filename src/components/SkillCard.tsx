const SkillCard = ({ skill }: { skill: any }) => {
  return (
    <div className='rounded-2xl border-green border-3 p-6 w-32 h-32 flex justify-center items-center dark:text-black hover:bg-green/25'>
      <img src={`Herzaristide/src/assets/icons/${skill}.svg`} alt={skill} />
    </div>
  );
};

export default SkillCard;
