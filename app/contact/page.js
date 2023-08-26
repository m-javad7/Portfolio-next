import { Communicate } from "@/Components/contact/Communicate ";
import { ContactMe } from "@/Components/contact/ContactMe";
import { Social } from "@/Components/contact/Social";
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
  