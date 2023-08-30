
import Link from "next/link"
import {faVcard} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Mainpage =()=>{

    return(
        <div className="w-3/4 md:w-1/2 xl:mr-12 mt-10">
           <div className="mt-12 md:mt-0 w-11/12 mx-auto">
           <h1 className="text-3xl xl:text-4xl md:text-2xl flex flex-col text-center mt-44 md:mt-0 mb-10 ">
             سلام،من  
             <span className="text-green-600 dark:text-green-500">محمدجواد دره زرشکی </span>
              توسعه دهنده وب هستم.
            </h1>
            <h3 className="pt-10 text-sm md:pr-20 xl:mr-14 leading-6">
                من از اسفندماه 1401 (بعد از سربازی) شروع به یادگیری فرانت اند با شرکت در دوره بوت کمپ <Link href="https://daneshkar.net" target="_blank" className="text-blue-300">دانشکار</Link> کردم و در این بوتکمپ مباحثی همچون  UI, React, Next, Redux, Git, Tailwind, JavaScript, Responsive را یاد گرفتم.
            </h3>
            <span className=" md:w-3/5 xl:w-1/3 mx-auto my-12 flex items-center justify-between xl:mt-24 rounded-full border border-green-600 hover:bg-green-600">
                <FontAwesomeIcon icon={faVcard} className="rounded-full p-5 bg-green-600"/>
                <Link href="./about" className="ml-8">
                    مشاهده رزومه
                </Link>
            </span>
           </div>
        </div>
    )
}