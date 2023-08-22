import { Experience } from "@/Components/about/Experience";
import { Skills } from "@/Components/about/Skills";
import { getLocalData } from "@/lib/localdata";

const About = async () => {
  const data = await getLocalData();

  return (
    <div>
      <h1 className="text-center mt-11 text-6xl">درباره <span className="text-green-600">من</span></h1>
      <div className="flex pr-32 mt-12">
        <div className="w-1/2">
          <h3>خلاصه فعالیت های من</h3>
          <p className="mt-5">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
          </p>
        </div>
        <div className="w-1/2 pr-5 mt-12">
        <Experience data={data}/>
        </div>
      </div>
      <Skills data={data}/>
    </div>
  );
};
export default About;