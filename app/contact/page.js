import { Communicate } from "@/components/contact/Communicate ";
import { ContactMe } from "@/components/contact/ContactMe";
import { getLocalData } from "@/lib/localdata";

const Contact = async() =>{
  const data = await getLocalData();
    return (
      <>
        <ContactMe/>
        <Communicate data={data}/>
      </>
    )
  }
  export default Contact;
  