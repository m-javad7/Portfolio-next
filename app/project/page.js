import MyPortfolio from "@/Components/proj/MyPortfolio";
import { Portfolio } from "@/Components/proj/Portfolio";
import { getLocalData } from "@/lib/localdata";

const Project = async () => {
const data = await getLocalData();

    return (
      <div className="flex flex-col items-center">
        <MyPortfolio/>
        <Portfolio data={data}/>
      </div>
    )
  }
  export default Project;