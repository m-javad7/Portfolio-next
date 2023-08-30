import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ContactInput = () =>{
    return(
       <div className="lg:w-1/2 flex flex-col justify-center items-center mb-28 mt-8 lg:my-0">
         <form action="" className="">
        <div className="flex justify-between">
            <input type="text" className="rounded-3xl px-3 py-5 outline-none  border border-gray-800 placeholder:text-xs w-[48%]" required placeholder="نام خود را وارد کنید."/>
            <input type="email" className="rounded-3xl px-3 py-5 outline-none border border-gray-800 placeholder:text-xs w-[48%]" required placeholder="ایمیلتان را وارد کنید."/>
        </div>
            <input type="text" className="rounded-3xl px-3 py-5 outline-none border border-gray-800 placeholder:text-xs my-3 w-full" required placeholder=" موضوع"/>
        <div>
            <textarea name="" id="" cols="15" rows="3" className="rounded-3xl resize-none my-3 px-3 py-5 placeholder:text-xs outline-none border border-gray-800 w-full" placeholder="پیام خود را بنویسید."></textarea>
        </div>
        <div class="submit-btn">
            <button value="Submit" className="rounded-3xl cursor-pointer px-2 py-4 bg-green-600 hover:bg-green-500 w-full">ارسال<FontAwesomeIcon icon={faEnvelope} className="mr-3"/></button>
        </div>
    </form>
       </div>
    )
}