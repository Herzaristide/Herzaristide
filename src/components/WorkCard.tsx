import SkillButton from './SkillButton';

interface WorkCardProps {
  mission: {
    name?: string;
    role: string;
    company?: string;
    location: string;
    start_date: string;
    end_date: string;
    context?: string;
    tasks?: string[];
    skills?: string[];
    jobRole: string;
    jobCompany: string;
  };
  index: number;
  isFlipped: boolean;
  onFlip: () => void;
}

const WorkCard = ({ mission, index, isFlipped, onFlip }: WorkCardProps) => {
  return (
    <div className='job_section w-screen h-full p-8 flex items-center justify-center perspective-1000 relative'>
      {/* Background gradient for each card */}
      <div className='absolute inset-0 bg-gradient-to-br from-green/5 via-transparent to-green/10 opacity-50'></div>

      {/* Card number indicator */}
      <div className='absolute top-8 left-8 text-8xl font-bold text-green/10 pointer-events-none'>
        {String(index + 1).padStart(2, '0')}
      </div>

      <div
        className='relative w-screen h-3/4 cursor-pointer group'
        onClick={onFlip}
      >
        {/* Glowing effect */}
        <div className='absolute -inset-1 bg-gradient-to-r from-green/20 to-green/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

        <div
          className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:scale-105 ${
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          {/* Front Side */}
          <div className='absolute w-full h-full flex flex-col justify-center rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-12 [backface-visibility:hidden] border border-white/20 shadow-2xl'>
            {/* Role Badge */}
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-green/20 text-green rounded-full text-sm font-semibold mb-6 w-fit'>
              <div className='w-2 h-2 bg-green rounded-full animate-pulse'></div>
              Professional Experience
            </div>

            <h1 className='capitalize font-extrabold text-6xl lg:text-7xl xl:text-8xl text-green mb-4 leading-tight'>
              {mission.name}
            </h1>

            <h2 className='capitalize font-bold text-3xl lg:text-4xl text-white/90 mb-8 tracking-wider'>
              <span className='font-semibold'>{mission.role} </span>
              {mission.company && (
                <span className='text-green font-medium'>
                  @ {mission.company}
                </span>
              )}
            </h2>

            <div className='capitalize space-y-4 text-white/70'>
              <div className='flex items-center gap-4 text-lg'>
                <span className='flex items-center gap-2'>
                  <div className='w-2 h-2 bg-green rounded-full'></div>
                  {mission.location}
                </span>
                <span className='text-green/80'>
                  {mission.start_date} - {mission.end_date}
                </span>
              </div>
            </div>

            {/* Click indicator */}
            <div className='absolute bottom-8 right-8 flex items-center gap-2 text-white/50 text-sm'>
              <span>Click to flip</span>
              <div className='w-6 h-6 border border-white/30 rounded-full flex items-center justify-center animate-pulse'>
                <div className='w-2 h-2 bg-white/50 rounded-full'></div>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className='absolute w-full h-full flex flex-col justify-center rounded-3xl bg-gradient-to-br from-green/20 to-green/10 backdrop-blur-md p-12 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-green/30 shadow-2xl'>
            {/* Details Badge */}
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-green/30 text-white rounded-full text-sm font-semibold mb-6 w-fit'>
              <div className='w-2 h-2 bg-white rounded-full animate-pulse'></div>
              Project Details
            </div>

            {mission.context && (
              <div className='mb-8'>
                <h4 className='text-xl font-semibold text-white mb-3'>
                  Context
                </h4>
                <p className='text-lg text-white/90 italic leading-relaxed border-l-4 border-green/50 pl-4'>
                  {mission.context}
                </p>
              </div>
            )}

            {Array.isArray(mission.tasks) && mission.tasks.length > 0 && (
              <div className='mb-8'>
                <h4 className='text-xl font-semibold text-white mb-4'>
                  Key Responsibilities
                </h4>
                <ul className='space-y-2'>
                  {mission.tasks.map((task: string, i: number) => (
                    <li
                      key={i}
                      className='flex items-start gap-3 text-white/90 leading-relaxed'
                    >
                      <div className='w-2 h-2 bg-green rounded-full mt-2 flex-shrink-0'></div>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {Array.isArray(mission.skills) && mission.skills.length > 0 && (
              <div>
                <h4 className='text-xl font-semibold text-white mb-4'>
                  Technologies & Skills
                </h4>
                <div className='flex gap-3 overflow-x-hidden pb-2'>
                  <div className='flex gap-3 animate-scroll-slow whitespace-nowrap'>
                    {mission.skills.map((skill: string, i: number) => (
                      <SkillButton key={i} skill={skill} index={i} />
                    ))}
                    {/* Duplicate skills for seamless loop */}
                    {mission.skills.map((skill: string, i: number) => (
                      <SkillButton
                        key={`duplicate-${i}`}
                        skill={skill}
                        index={i}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Back indicator */}
            <div className='absolute bottom-8 right-8 flex items-center gap-2 text-white/60 text-sm'>
              <span>Click to return</span>
              <div className='w-6 h-6 border border-white/40 rounded-full flex items-center justify-center animate-pulse'>
                <div className='w-2 h-2 bg-white/60 rounded-full'></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className='absolute -top-4 -right-4 w-8 h-8 bg-green/20 rounded-full animate-pulse'></div>
        <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-green/30 rounded-full animate-ping'></div>
      </div>
    </div>
  );
};

export default WorkCard;
