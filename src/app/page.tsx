import Image from 'next/image';
import googleLogo from '../../public/google-logo-png-29546.png';

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-slate-800 min-h-[741px]">
      <div className="w-[520px] h-[600px] bg-white rounded-[40px] shadow relative">
        <div className="w-full h-[46px] flex justify-between px-10 pt-6 absolute">
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
        <h3 className="text-black text-[45px] font-medium mt-14 ml-10 absolute">
          Sign in
        </h3>
        <button className="w-[298px] h-[55px] bg-indigo-100 rounded-[9px] text-blue-500 text-base font-normal flex items-center justify-center mt-36 ml-10 absolute">
          <Image
            src={googleLogo}
            alt="Google logo"
            width={35}
            height={35}
            className="pr-2"
          />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
