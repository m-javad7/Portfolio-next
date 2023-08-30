import MyPortfolio from "@/components/proj/MyPortfolio";
import { Portfolio } from "@/components/proj/Portfolio";
import { getLocalData } from "@/lib/localdata";

const Project = async () => {
const data = await getLocalData();

    return (
      <div className="flex flex-col items-center mb-16">
        <MyPortfolio/>
        <Portfolio data={data}/>
      </div>
    )
  }
  export default Project;