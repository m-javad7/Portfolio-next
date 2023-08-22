export const Skills = ({ data }) => {
    const info = data.information;
  
    return (
      <div className="mt-10">
        <h2 className="text-center text-3xl">
          مهارت‌های<span className="text-green-600"> من </span>
        </h2>
        <div className="w-4/5 flex flex-wrap mx-auto mt-8 ">
          {info.map(({ skills }) =>
            skills.map(({ id, skill, level }) => (
              <div key={id} className="w-1/2 text-xl pl-5 py-4">
                {skill}
                <div className="flex items-center">
                    <span className="text-gray-400">
                  {level}%
                    </span>
                  <div className="w-full h-2 bg-gray-600 rounded mr-4">
                  <div
                    className="h-2 bg-green-600 rounded"
                    style={{ width: `${level}%`}} 
                  ></div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  