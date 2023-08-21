import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-slate-800 min-h-[741px]">
      <div className="w-[520px] h-[600px] bg-white rounded-[40px] shadow">
        <div className="w-full h-[46px] flex justify-between px-10 pt-6">
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
      </div>
    </div>
  );
}
