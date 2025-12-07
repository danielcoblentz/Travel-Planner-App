import Image from 'next/image';
import Link from 'next/link';

export default function Navbar () {
return (<nav className="bg-white shadow-md py-4 border-b border-gray-200"> <div className = "container mx-auto flex justify-between items-center px-6 lg:px-8" >
    <Link href={"/"} className = "flex items-center">
    <Image src="/my-app/app/favicon.ico" alt="logo" width={32} height={32} />
    </Link>
    <span className = "text-2xl font-bold text-grey-800">Travel planenr</span>
    
    <div className = "flex items-center space-x-4">
        <Link href = {"/trips"} className = "text-slate-900 hover:text-sky-500">My trips</Link>
        <Link href = {"/globe"} className = "text-slate-900 hover:text-sky-500">Globe</Link>
          <Link href = {"/account"} className = "text-slate-900 hover:text-sky-500">Account</Link>

          <button className = "flex items-center">
            Signin
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11H9v4h2V7zm0 6H9v2h2v-2z" clipRule="evenodd" />
            </svg>
          </button>
    </div>
    
    </div></nav>);
}