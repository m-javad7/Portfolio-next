import { Communicate } from "@/components/contact/Communicate ";
import { ContactMe } from "@/components/contact/ContactMe";
import { Social } from "@/components/contact/Social";
import { getLocalData } from "@/lib/localdata";

const Contact = async() =>{
  const data = await getLocalData();
    return (
      <div>
        <ContactMe/>
        <Communicate/>
        <Social data={data}/>
      </div>
    )
  }
  export default Contact;
  