import { useTranslation } from 'react-i18next';
import { i18n } from '../../lib/i18n/i18n';
import { UserButton } from '@clerk/clerk-react';

const Home = () => {
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const { t } = useTranslation();

  return (
    <main className='h-screen w-screen flex flex-col justify-center items-center gap-10'>
      <UserButton />
      <div className='flex gap-4 flex-wrap'>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ja')}>Japanese</button>
        <button onClick={() => changeLanguage('ko')}>Korean</button>
        <button onClick={() => changeLanguage('ta')}>Tamil</button>
      </div>
      {t('text')}
    </main>
  );
};

export default Home;
