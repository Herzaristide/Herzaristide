import { useTranslation } from 'react-i18next';
import Button from './Button';

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id='about'
      className='relative w-screen text-2xl flex flex-col item-center p-24'
    >
      <p>{t('about:hi')}</p>
      <p>
        Engineer since{' '}
        <span className='text-green text-4xl font-bold'> 3 </span>
        years.
      </p>
      <p>
        I'm specialized in
        <span className='text-green font-semibold'> data </span> and
        <span className='text-green font-semibold'> web </span> development.
      </p>
      <p></p>
      <p></p>
      <Button title='See more !' click={() => {}} />
    </section>
  );
};

export default About;
