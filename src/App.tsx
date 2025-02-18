import { useTranslation } from 'react-i18next';
import reactLogo from './assets/react.svg';
import { i18n } from './lib/i18n/i18n';
import viteLogo from '/vite.svg';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';

export default function App() {
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const { t } = useTranslation();
  return (
    <>
      <main className='h-screen w-screen flex flex-col justify-center items-center gap-10'>
        <div className='flex gap-4 flex-wrap'>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('ja')}>Japanese</button>
          <button onClick={() => changeLanguage('ko')}>Korean</button>
          <button onClick={() => changeLanguage('ta')}>Tamil</button>
        </div>
        {t('text')}
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className='flex gap-4 items-center text-center text-[5vw] md:text-[3vw] lg:text-[2.5vw]'>
          <div>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </div>
          <div>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </div>
          <div>React + Vite js + Tailwind CSS</div>
        </div>
      </main>
    </>
  );
}
