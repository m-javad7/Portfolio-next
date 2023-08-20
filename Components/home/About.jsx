
import Link from "next/link"

export const About =()=>{

    return(
        <div className="w-3/4 md:w-1/2">
           <div className="mt-12 md:mt-0">
           <h1 className="text-3xl flex flex-col text-center mb-10 xl:text-4xl">
             سلام،من  
             <span className="text-green-600">محمدجواد دره زرشکی </span>
              توسعه دهنده وب هستم.
            </h1>
            <h3 className="pt-10 text-sm md:pr-20 xl:mr-14">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</h3>
            <div className="my-12 text-center xl:mt-24">
                <Link href="./" className="rounded-full border border-green-600 p-4 hover:bg-green-600">
                    مشاهده رزومه
                </Link>
            </div>
           </div>
        </div>
    )
}