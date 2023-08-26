import Link from 'next/link';

export default function Register() {
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
            <Link
              className="text-sky-600 text-[13px] font-normal"
              href="/Login"
            >
              Sign in
            </Link>
          </div>
        </div>
        <h3 className="text-black text-[45px] font-medium mt-16 ml-10 absolute">
          Sign Up
        </h3>
        <form className="w-full mt-[140px] px-10 absolute">
          <div className="mb-8">
            <label className="w-full text-black text-base font-normal">
              Enter your email
            </label>
            <input
              className="w-full h-12 text-zinc-500 text-md font-light border border-solid border-gray-400 rounded-lg px-2 mt-2"
              placeholder="Email address"
            />
          </div>
          <div className="mb-8 flex flex-row justify-between">
            <div className=" w-[48%]">
              <label className="w-full text-black text-base font-normal">
                Username
              </label>
              <input
                className="w-full h-12 text-zinc-500 text-md font-light border border-solid border-gray-400 rounded-lg px-2 mt-2"
                placeholder="Username"
              />
            </div>
            <div className="w-[48%]">
              <label className="w-full text-black text-base font-normal">
                Contact
              </label>
              <input
                className="w-full h-12 text-zinc-500 text-md font-light border border-solid border-gray-400 rounded-lg px-2 mt-2"
                placeholder="Contact"
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="w-full text-black text-base font-normal">
              Enter your Password
            </label>
            <input
              className="w-full h-12 text-zinc-500 text-md font-light border border-solid border-gray-400 rounded-lg px-2 mt-2"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-8">
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
