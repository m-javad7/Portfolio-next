export const Experience = ({ data }) => {
    const info = data.information;
  
    return (
      <div className="flex flex-wrap ">
        {info.map(({ experience, projects, client, learn }) => (
          <>
            <div className="w-[40%] h-52 border border-gray-700 p-8 mr-4 flex flex-col hover:-translate-y-1 hover:border-green-700 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out">
            <span className="text-green-500 text-5xl font-bold">{experience}+</span>
            <span className="p-5">
             مدت زمان تجربه (ماه)
            </span>
            </div>
            <div className="w-[40%] h-52 border border-gray-700 p-8 mr-4 flex flex-col hover:-translate-y-1 hover:border-green-700 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out">

            <span className="text-green-500 text-5xl font-bold">{projects}+</span>
            <span className="p-5">
           پروژهای انجام شده
            </span>
            </div>
                        <div className="w-[40%] h-52 border border-gray-700 p-8 mr-4 mt-4 flex flex-col hover:-translate-y-1 hover:border-green-700 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out">

            <span className="text-green-500 text-5xl font-bold">{client}+</span>
            <span className="p-5">
            پروژه های درحال انجام
            </span>
            </div>
                        <div className="w-[40%] h-52 border border-gray-700 p-8 mr-4 mt-4 flex flex-col hover:-translate-y-1 hover:border-green-700 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out">

            <span className="text-green-500 text-5xl font-bold">{learn}</span>
            <span className="p-5">
            در حال یاد گیری
            </span>
            </div>
          </>
        ))}
      </div>
    );
  };
  