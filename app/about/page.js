
import { Skills } from "@/components/about/Skills";
import { WorkExperience } from "@/components/about/WorkExperience";
import { getLocalData } from "@/lib/localdata";
import {AboutText} from "@/components/about/AboutText";

const About = async () => {
  const data = await getLocalData();

  return (
    <div className="mb-32">
        <AboutText data={data}/>
        <Skills data={data}/>
        <WorkExperience data={data}/>
    </div>
  );
};
export default About;