import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  return (
    <div className='h-screen w-screen flex justify-center items-center text-[5vw] md:text-[3vw] lg:text-[2.5vw] text-center gap-4 text-while'>
      <div>
        <img src={viteLogo} className='logo' alt='Vite logo' />
      </div>
      <div>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </div>
      <div>React + Vite js + Tailwind CSS</div>
    </div>
  );
}

export default App;
