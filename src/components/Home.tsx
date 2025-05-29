import { useTranslation } from 'react-i18next';
import Button from './Button';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section
      id='home'
      className='relative h-dvh w-screen flex flex-col justify-center p-8'
    >
      <h1 className='font-bold text-4xl '>Aristide Pichereau</h1>
      <h1 className='font-bold text-8xl '>{t('home:job')}</h1>
      <h1 className='font-bold text-8xl '>{t('home:specialisation')}</h1>
      <div className='flex gap-2'>
        <Button title='React' />
        <Button title='Javascript' />
        <Button title='Python' />
      </div>
    </section>
  );
};

export default Home;
