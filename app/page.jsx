'use client'
import { About } from "@/components/mainpage/About";
import { Cardpic } from "@/components/mainpage/Cardpic";

export default function Home() {
  return (
      <div className="flex flex-col h-full mt-20 justify-center items-center md:flex-row md:justify-normal md:items-start md:mt-16">
      <About/>
      <Cardpic/>
    </div>
  )
}
