import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelopeOpen, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

import Link from "next/link"

export const Nav =() =>{
    return(
        <div className="w-full flex items-center justify-center fixed top-auto bottom-0 left-1/2 translate-x-[-50%] bg-gray-800
        md:h-screen md:z-10 md:top-1/2 md:left-auto md:flex-col md:-translate-y-1/2 md:w-auto md:bg-transparent md:right-[-40px]	
        ">
        {/* <div className="flex bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  "> */}
            <div className="w-full p-5 flex justify-evenly text-xs font-bold md:flex-col md:h-[60vh]">
            <Link href="./"><FontAwesomeIcon icon={faHome} className="w-12 rounded-full bg-gray-400 p-2 hover:text-slate-200 text-gray-700"/> </Link>
            <Link href="./about"><FontAwesomeIcon icon={faUser} className="w-12 rounded-full bg-gray-400 p-2 hover:text-slate-200 text-gray-700"/> </Link>
            <Link href="./project"><FontAwesomeIcon icon={faBriefcase} className="w-12 rounded-full bg-gray-400 p-2 hover:text-slate-200 text-gray-700"/> </Link>
            <Link href="./contact"><FontAwesomeIcon icon={faEnvelopeOpen} className="w-12 rounded-full bg-gray-400 p-2 hover:text-slate-200 text-gray-700"/> </Link>
        </div>
        </div>
    )
}
