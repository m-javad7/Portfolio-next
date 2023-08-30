import {BtnDownload} from "@/components/about/BtnDownload";
import {Experience} from "@/components/about/Experience";

export const AboutText = ({data}) =>{
    return(
        <>
            <h1 className="text-center mt-11 text-5xl md:text-6xl">درباره <span className="text-green-600">من</span></h1>
            <div className="flex flex-col md:flex-row p-10 md:pr-28 mt-12">
                <div className="w-full md:w-1/2">
                    <h3>خلاصه فعالیت های من</h3>
                    <p className="mt-5 text-sm leading-6">
                        در این صفحه می توانید خلاصه ای از فعالیت ها و مهارت های من را در این مدت مشاهده کنید، من سعی در بهبود و توسعه این مهارت ها با تلاش و پشتکار فراوان هستم و امیدوارم هرروز چیزهای تازه یاد بگیرم و معلومات و دانشم اضاف کنم.
                    </p>
                    <div className="text-center mt-16">
                        <BtnDownload/>
                    </div>
                </div>
                <div className="md:w-1/2 pr-5 mt-12">
                    <Experience data={data}/>
                </div>
            </div>
        </>
    )
}