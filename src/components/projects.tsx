'use client'

import { FaHeadphones, FaTransgender, FaAppleWhole, FaArrowRight } from "react-icons/fa6";
import ProjectCard from "./project-cards";
import * as fonts from '@/fonts/fonts';



export default function Projects() {

  return (
    <div className={`relative bg-[#EBE4D1] ${fonts.cairo.className} p-2 border-r text-black shadow shadow-black rounded-lg min-h-[70%] w-[100%] flex flex-col justify-evenly items-center scale-0 animate-appear2 [animation-timeline:scroll()] [animation-range:0%_50%]`}>
      <h2 data-text={"My Work"} className='font-[700] text-white z-[10] relative after:w-full mt-3 after:z-[-1] after:content-[attr(data-text)] after:absolute after:left-[3px] after:top-[6px] after:text-black text-2xl md:text-3xl xl:text-[42px] pt-1 pb-3'>
        My Work
      </h2>
      <div className='h-[25%] w-[80%] lg:w-[70%]'>
        <ProjectCard title="Weathify" react css typescript icon={<FaHeadphones />} text='Log in with your Spotify account search for a city of your choice and listen related music depending on the weather!' urlGit='https://github.com/tomavasi/weather-app' urlWebsite='https://tomavasi.github.io/weather-app/' />
      </div>
      <div className='h-[25%] w-[80%] lg:w-[70%]'>
        <ProjectCard title="LQS" react css icon={<FaTransgender />} text='My first attempt in Web Developement. Choose your products and put them in the cart. Fill in the forms and many more' urlGit='https://github.com/tomavasi/lqs-project' urlWebsite='https://tomavasi.github.io/lqs-project/' />
      </div>
      <div className='h-[25%] w-[80%] lg:w-[70%]'>
        <ProjectCard title="ShootUp" java icon={<FaAppleWhole />} text="My first game in Java! Shoot the apples to get points and avoid to touch them. Don't shoot the bombs!!" urlGit='https://github.com/tomavasi/shootUp' />
      </div>
      <div className='h-[25%] w-[80%] lg:w-[70%]'>
        <ProjectCard title="Back-end project" node icon={<FaAppleWhole />} text="A back-end implementation meant for the LQS-project. User authentication by log in. Possibility to sign up and delete user. Connection with MongoDB" urlGit='https://github.com/tomavasi/backend-project' />
      </div>
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] dotsOrange" />
    </div>

  )
}