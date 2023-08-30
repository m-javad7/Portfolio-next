import { ContactInput } from "./ContactInput";
import { ContactText } from "./ContactText";
import {Social} from "@/components/contact/Social";

export const Communicate = ({data}) => {
  return (
    <div className="w-5/6 mx-auto mt-24 flex flex-col lg:justify-evenly md:items-center lg:flex-row">
        <div className="flex flex-col">
            <ContactText/>
            <Social data={data}/>
        </div>
        <ContactInput/>
    </div>
  );
};
