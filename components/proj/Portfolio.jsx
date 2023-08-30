
import Image from "next/image";
import { LinkPortolio } from "./LinkPortfolio";

export const Portfolio = ({data}) => {
    const info = data.information;

    return (
        <div className="w-5/6 flex flex-wrap items-center justify-center my-16">
            {info.map(({portfolio}) => {
                return portfolio.map(({id,pic,name,git, vercel, lang }) => {
                    return (
                        <div key={id} className="relative mt-6 mx-4  border border-gray-800 rounded-2xl  transition-shadow duration-300 ease-in-out shadow-lg hover:shadow-black/30">
                            <Image src={pic} alt={name} width={1} height={1} className="rounded-2xl w-full md:w-[275px] xl:w-[350px] h-full md:h-[250px]"/>
                            <LinkPortolio name={name} git={git} vercel={vercel} lang={lang}/>
                        </div>
                    );
                });
            })}
        </div>
    );
}