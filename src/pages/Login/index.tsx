import { SignIn } from '@clerk/clerk-react';
import loginIcon from '../../assets/images/login.svg';

const Login = () => {
  return (
    <main className='h-screen w-screen flex flex-row justify-evenly items-center gap-10'>
      <div className='flex flex-col gap-10 items-center text-center text-[5vw] md:text-[3vw] lg:text-[2vw]'>
        <div>Welcome Back !!!</div>
        <img src={loginIcon} alt='Login' className='w-full scale-[1.5]' />
      </div>
      <div>
        <SignIn />
      </div>
    </main>
  );
};

export default Login;
