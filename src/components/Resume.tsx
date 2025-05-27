import CV from '../assets/CV_APICH_FR.pdf';

const Resume = () => {
  return (
    <section id='resume' className='relative h-dvh w-screen p-4'>
      <embed
        src={`${CV}#toolbar=0&navpanes=0&scrollbar=0`}
        className='w-full h-full'
      />
    </section>
  );
};

export default Resume;
