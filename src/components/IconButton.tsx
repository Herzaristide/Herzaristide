import { getIcon } from '../utils/iconImports';

const IconButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <button
      title={title}
      onClick={onClick}
      className='bg-transparent hover:bg-zinc-200 rounded-lg text-white p-3'
    >
      <img className='z-20 h-8 w-8' src={getIcon(title)} alt={title} />
    </button>
  );
};

export default IconButton;
