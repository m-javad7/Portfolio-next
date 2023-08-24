import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const BtnDownload=()=>{
    return(
        <>
        <button className="rounded-full border border-green-600 p-4 hover:bg-green-600 ">
        <span>
            <FontAwesomeIcon icon={faDownload} className=" text-green-400 hover:text-white ml-3 text-xl "/>
        </span>
        <span className="text-lg font-bold">
        دانلود رزومه
        </span>
    
        </button>
        </>
    )
}