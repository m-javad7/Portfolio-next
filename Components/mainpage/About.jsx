
import Link from "next/link"

export const About =()=>{

    return(
        <div className="w-3/4 md:w-1/2 xl:mr-12 xl:mt-10">
           <div className="mt-12 md:mt-0 w-11/12 mx-auto">
           <h1 className="text-3xl xl:text-4xl md:text-2xl flex flex-col text-center mb-10 ">
             سلام،من  
             <span className="text-green-600 dark:text-green-500">محمدجواد دره زرشکی </span>
              توسعه دهنده وب هستم.
            </h1>
            <h3 className="pt-10 text-sm md:pr-20 xl:mr-14 leading-6">
                من از اسفندماه 1401 (بعد از سربازی) شروع به یادگیری فرانت اند با شرکت در دوره بوت کمپ <Link href="https://daneshkar.net" target="_blank" className="text-blue-300">دانشکار</Link> کردم و در این بوتکمپ مباحثی همچون  UI, React, Next, Redux, Git, Tailwind, JavaScript, Responsive را یاد گرفتم.
            </h3>
            <div className="my-12 text-center xl:mt-24">
                <Link href="./about" className="rounded-full border border-green-600 p-4 hover:bg-green-600">
                    مشاهده رزومه
                </Link>
            </div>
           </div>
        </div>
    )
}