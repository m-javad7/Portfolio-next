'use client'
import { Mainpage } from "@/components/mainpage/Mainpage";
import { Cardpic } from "@/components/mainpage/Cardpic";

export default function Home() {
  return (
      <div className="w-full h-screen mt-8 md:mt-0 flex flex-col justify-center items-center md:flex-row">
      <Mainpage/>
      <Cardpic/>
    </div>
  )
}
