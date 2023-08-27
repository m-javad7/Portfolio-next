import { faAnchor, fagithub } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { LinkPortolio } from "./LinkPortfolio";

export const Portfolio = ({data}) => {
    const info = data.information;

    return (
        <div className="w-5/6 flex flex-wrap items-center justify-center my-16">
            {info.map(({portfolio}) => {
                return portfolio.map(({id,pic,name,git, vercel, lang }) => {
                    return (
                        <div key={id} className="relative mt-6 mx-4  border border-gray-800 rounded-2xl">
                            <img src={pic} alt={name} className="rounded-2xl w-[350px] h-[280px]"/>
                            <LinkPortolio name={name} git={git} vercel={vercel} lang={lang}/>
                        </div>
                    );
                });
            })}
        </div>
    );
}