import Image from 'next/image';
import googleLogo from '../../public/google-logo-png-29546.png';

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-slate-800 min-h-[741px]">
      <div className="w-[520px] h-[600px] bg-white rounded-[40px] shadow max-w-[520px] relative">
        <div className="w-full h-[46px] flex justify-between px-10 pt-7 absolute">
          <div className="">
            <span className="text-black text-[21px] font-normal">
              Welcome to Auth Page
            </span>
          </div>
          <div className="">
            <span className="text-neutral-500 text-[13px] font-normal">
              No Account ?<br />
            </span>
            <button className="text-sky-600 text-[13px] font-normal">
              Sign up
            </button>
          </div>
        </div>
        <h3 className="text-black text-[45px] font-medium mt-16 ml-10 absolute">
          Sign in
        </h3>
        <button className="w-[298px] h-[55px] bg-indigo-100 rounded-[9px] text-blue-500 text-base font-normal flex items-center justify-center mt-[150px] mx-10 absolute">
          <Image
            src={googleLogo}
            alt="Google logo"
            width={35}
            height={35}
            className="pr-2"
          />
          <span>Sign in with Google</span>
        </button>
        <div className="w-full mt-[230px] px-10 absolute">
          <label className="w-full text-black text-base font-normal">
            Enter your username or email address
          </label>
          <input
            className="w-full h-12 text-zinc-500 text-md font-light border border-solid border-gray-400 rounded-lg px-2 mt-2"
            placeholder="Username or email address"
          />
        </div>
        <div className="w-full mt-[330px] px-10 absolute">
          <label className="w-full text-black text-base font-normal">
            Enter your Password
          </label>
          <input
            className="w-full h-12 text-zinc-500 text-md font-light border border-solid border-gray-400 rounded-lg px-2 mt-2"
            placeholder="Password"
          />
        </div>
        <button className="w-[440px] h-14 bg-sky-500 rounded-lg shadow text-white text-base font-medium mt-[460px] mx-10 absolute">
          Sign in
        </button>
      </div>
    </div>
  );
}
