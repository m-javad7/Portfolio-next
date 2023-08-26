import { faGithub} from "@fortawesome/free-brands-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export const LinkPortolio = ({ name, git, vercel, lang }) => {
  return (
    <div className="w-full h-full bg-green-600 opacity-0 absolute left-0 top-0 rounded-2xl flex flex-col justify-center items-center transition-all ease-in-out duration-150 hover:opacity-100 scale-50 hover:scale-100">
      <h3 className="text-lg font-bold mb-4">پروژه {name}</h3>
      <div>
        <Link href={vercel} target="_blank">
          <FontAwesomeIcon
            icon={faCode }
            className="w-4 h-4 bg-black hover:bg-white hover:text-black rounded-full p-3 cursor-pointer mr-2"
          />
        </Link>
        <Link href={git} target="_blank" className="text-white">
          <FontAwesomeIcon
            icon={faGithub}
            className="w-4 h-4 bg-black hover:bg-white hover:text-black rounded-full p-3 cursor-pointer mr-2"
          />
        </Link>
      </div>
      <h3 className="text-xs pt-8">
      with: {lang}
      </h3>
    </div>
  );
};
