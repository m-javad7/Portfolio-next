import { ContactInput } from "./ContactInput";
import { ContactText } from "./ContactText";

export const Communicate = () => {
  return (
    <div className="w-5/6 mx-auto mt-28 flex flex-col md:flex-row">
            <ContactText/>
            <ContactInput/>
    </div>
  );
};
