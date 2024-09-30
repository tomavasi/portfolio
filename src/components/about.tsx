'use client'
import * as fonts from '@/fonts/fonts';
import Link from "next/link";
import photo from '/public/photo.jpg'
import Image from 'next/image';

export default function About() {

  return (
    <div className={`relative ${fonts.cairo.className} bg-[#EBE4D1] rounded-lg text-black md:p-4 shadow-sm shadow-black min-h-[70%] w-[100%] flex flex-col justify-around items-center gap-8 scale-0 animate-appear2 [animation-timeline:scroll()] [animation-range:30%_100%]`}>
      <h2 data-text={"About me"} className='font-[700] text-white z-[10] relative after:w-full after:z-[-1] after:content-[attr(data-text)] after:absolute after:left-[3px] after:top-[6px] after:text-black text-2xl md:text-3xl xl:text-[42px] pt-1 pb-3'>
        About me
      </h2>
      <div className="lg:hidden relative z-10 h-[100px] md:h-[150px] bg-white w-[100px] border-black">
          <Image className='absolute top-0 left-0 w-full h-full' src={photo} alt="myPhoto" style={{ objectFit: 'cover' }} />
          <div className="absolute -z-10 h-full w-full top-[10px] left-[15px] border border-white" />
        </div>
      <div className="pb-10 flex max-lg:flex-col max-lg:gap-8 items-center justify-evenly">
        <div className="max-lg:hidden relative z-10 h-[250px] bg-white w-[200px] mx-12 border-black">
          <Image className='absolute top-0 left-0 w-full h-full' src={photo} alt="myPhoto" style={{ objectFit: 'cover' }} />
          <div className="absolute -z-10 h-full w-full top-[10px] left-[15px] border border-white" />
        </div>
        <div className=" w-[80%] lg:w-[40%]">
          <h3 className="font-[700] text-base md:text-xl lg:text-2xl">
            Hello! I am Vasilis a software developer currently diving into the world of DevOps engineering!
          </h3>
          <p className="text-justify  mt-2 text-xs md:text-base">
          I grew up in Greece and have been living in Amsterdam for the past eight years. While I’ve always been passionate about technology, it wasn’t until recently that I fully embraced the world of software development. My journey began with various online courses, including mobile app development and the Meta Front-End Developer course. These experiences ultimately led me to Qquest, where I completed a two-month IT traineeship. Now, I’m excited to embark on my software development journey and am actively seeking a challenging project where I can apply and grow my skills.
          </p>
          {/* <p className=" text-justify mt-2 text-xs md:text-base lg:text-lg">
            Do you have or know any fitting project? Contact <Link className="text-[#26577C] hover:text-[#E55604] font-[600] relative" href='mailto: tomaras.vasi@outlook.com'>me</Link> or directly <Link className="relative text-[#26577C] hover:text-[#E55604] font-[600]" href='https://www.qquest.nl/sales-contact/'>Qquest!</Link>
          </p> */}
        </div>
      </div>
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full w-[100px] h-[100px] dotsOrange" />
    </div>

  )
}