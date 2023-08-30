'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelopeOpen,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export const Nav = () => {
    const  pathname  = usePathname();

  return (
    <div className="w-full h-[9vh] flex items-center justify-center fixed top-auto bottom-0 left-1/2 translate-x-[-50%] bg-gray-800 md:h-[75vh] md:z-10 md:top-1/2 md:left-auto md:flex-col md:-translate-y-1/2 md:w-auto md:bg-transparent ">
      <div className="w-full flex justify-evenly md:flex-col md:h-[60vh]">
        <Link href="/">
          <FontAwesomeIcon
            icon={faHome}
            size="xl"
            className={`rounded-full bg-gray-400 p-4 hover:text-slate-200 text-gray-700 ${pathname === '/' ? 'bg-green-600' : ''}`}
          />
        </Link>
        <Link href="/about">
          <FontAwesomeIcon
            icon={faUser}
            size="xl"
            className={`rounded-full bg-gray-400 p-4 hover:text-slate-200 text-gray-700 ${pathname === '/about' ? 'bg-green-600' : ''}`}
          />
        </Link>
        <Link href="/project">
          <FontAwesomeIcon
            icon={faBriefcase}
            size="xl"
            className={`rounded-full bg-gray-400 p-4 hover:text-slate-200 text-gray-700 ${pathname === '/project' ? 'bg-green-600' : ''}`}
          />
        </Link>
        <Link href="/contact">
          <FontAwesomeIcon
            icon={faEnvelopeOpen}
            size="xl"
            className={`rounded-full bg-gray-400 p-4 hover:text-slate-200 text-gray-700 ${pathname === '/contact' ? 'bg-green-600' : ''}`}
          />
        </Link>
      </div>
    </div>
  );
};
