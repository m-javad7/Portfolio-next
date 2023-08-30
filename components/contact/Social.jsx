import { faGithub, faLinkedin, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Social = ({ data }) => {
  const info = data.information;

  return (
    <div className="flex justify-center mt-10">
      {info.map(({ social }) => (
        social.map(({ linkedin,telegeram,github,whatsapp },index) => (
          <div className="w-4/6 text-4xl  flex justify-evenly " key={index}>
          <Link target="_blank" key={linkedin} href={linkedin}>
                <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-500"/>
            </Link>
            <Link target="_blank" key={github} href={github}>
                <FontAwesomeIcon icon={faGithub} className="hover:text-black hover:bg-white" />
            </Link>
            <Link target="_blank" key={telegeram} href={telegeram}>
                <FontAwesomeIcon icon={faTelegram} className="hover:text-blue-400"/>
            </Link>
            <Link target="_blank" key={whatsapp} href={whatsapp}>
                <FontAwesomeIcon icon={faWhatsapp} className="hover:text-green-700"/>
            </Link>
                </div>
        ))
      ))}
    </div>
  );
};
