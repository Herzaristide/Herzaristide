const Button = ({ title, click }: { title: string; click: () => void }) => {
  return (
    <div
      onClick={click}
      className='rounded-full flex px-3 py-1 bg-green w-fit hover:bg-green/50 border-green border-2 cursor-pointer'
    >
      {title}
    </div>
  );
};

export default Button;
