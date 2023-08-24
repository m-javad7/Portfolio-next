import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WorkExperience = ({ data }) => {
  const info = data.information;

  return (
    <div className="w-full flex flex-col justify-center items-center my-8">
      <div className="w-5/6">
        <h3 className="text-center text-3xl">سوابق شغلی</h3>
        <div>
          {info.map(({ job }) => {
            return job.map(({ id, company, start, end, position, text }) => (
              <div key={id} className="flex mt-5">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="rounded-full p-4 text-xl bg-green-500 absolute"
                />
                <div className="border-r border-gray-700 relative pr-16">
                  <div className="w-20 p-1 bg-gray-700 rounded-3xl text-xs text-center">
                    {start}-{end}
                  </div>
                  <div className="mt-2">
                    <span className="text-xs text-gray-400"> نام شرکت:</span>{" "}
                    {company}
                    <div className=" mt-1">
                        <span className="text-xs text-gray-400">موقعیت شغلی: </span>
                    {position}
                    </div>
                    <p className="text-sm text-gray-500 p-3">{text}</p>
                  </div>
                </div>
              </div>
            ));
          })}
        </div>
      </div>
    </div>
  );
};
