import Image from 'next/image';
import googleLogo from '../../../public/google-logo-png-29546.png';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-slate-800 min-h-[741px]">
      <div className="w-[520px] h-[600px] bg-white rounded-[40px] shadow-md max-w-[520px] relative">
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
            <Link
              className="text-sky-600 text-[13px] font-normal"
              href="/Register"
            >
              Sign up
            </Link>
          </div>
        </div>
        <h3 className="text-black text-[45px] font-medium mt-16 ml-10 absolute">
          Sign in
        </h3>
        <div className="w-[341px] mt-[150px] px-10 absolute">
          <button className="w-full h-[55px] bg-indigo-100 rounded-[9px] text-blue-500 text-base font-normal flex items-center justify-center ">
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
        <form className="w-full mt-[240px] px-10 absolute">
          <div className="mb-8">
            <label className="w-full text-black text-base font-normal">
              Enter your username or email address
            </label>
            <input
              className="w-full h-12 text-zinc-500 text-md font-light border border-solid border-gray-400 rounded-lg px-2 mt-2"
              placeholder="Username or email address"
              type="text"
              id="username"
              name="username"
            />
          </div>
          <div className="mb-8">
            <label className="w-full text-black text-base font-normal">
              Enter your Password
            </label>
            <input
              className="w-full h-12 text-zinc-500 text-md font-light border border-solid border-gray-400 rounded-lg px-2 mt-2"
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            />
          </div>
          <div className="mb-10">
            <button
              className="w-full h-14 bg-sky-500 rounded-lg shadow text-white text-base font-medium"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
