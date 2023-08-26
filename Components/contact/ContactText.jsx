import {
    faEnvelope,
    faGlobeAsia,
    faMapMarked,
    faUserGraduate,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
export const ContactText = () =>{
    return(
        <div className="md:w-1/2">
              <h3 className="text-2xl font-bold">ارتباط با من</h3>
      <h3 className="text-sm text-gray-400 mt-4">
        از طریق راه های ارتباطی زیر میتوانید با من در ارتباط باشد.
      </h3>
      <div className="mt-10">
        <div className="flex items-center mt-4 justify-between">
            <div className="flex items-center">
            <FontAwesomeIcon icon={faMapMarked} className="ml-4" />
              <h3>محل زندگی:</h3>
            </div>{" "}
            یزد
        </div>
        <div className="flex items-center mt-4 justify-between">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="ml-4" />
          <h3>ایمیل:</h3>
          </div>
           m.javad7721@gmail.com{" "}
        </div>
        <div className="flex items-center mt-4 justify-between">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUserGraduate} className="ml-4" />
          <h3>تحصیلات:</h3>
          </div>
           کارشناسی مهندسی نرم افزار
        </div>
        <div className="flex items-center mt-4 justify-between">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faGlobeAsia} className="ml-4" />
          <h3>زبان:</h3>
          </div>
           انگلیسی
        </div>
      </div>
        </div>
    )
}