'use client'

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import * as fonts from '@/fonts/fonts'
import { useLenis } from "lenis/react";
import { PiHamburger } from "react-icons/pi";


export default function Header() {
    const [menuOpen, setMenu] = useState(false);

    const lenisInstance = useLenis();
    const handleClick = (targetElement: string | number | HTMLElement) => {
        if (targetElement) {
            const scrollToOptions = {
                // Customize scroll options if needed
                offset: 0,
                lerp: 0.1,
                duration: 1.5,
                easing: (rawValue: number) => rawValue, // Example easing function
                immediate: false,
                lock: false,
                force: false,
            };

            lenisInstance?.scrollTo(targetElement, scrollToOptions);
        }
    }
    return (
        <>
            <div className={`max-md:hidden fixed top-0 left-0 w-full z-10 flex justify-between px-[6rem] py-6 text-white shadow-gray-300 md:text-lg lg:text-xl font-[300]`}>
                <div className="relative text-3xl flex gap-1">
                    <h1 className="relative animate-bouncing 3s">V</h1>
                    <h1 className="absolute animate-bouncing 3s left-[17px]">T</h1>
                    <div className="absolute left-[40px] top-[25px] w-2 h-2 bg-white rounded-full mt-auto animate-appear"></div>
                </div>
                <div className={`flex ${fonts.cairo.className} gap-6 items-end`}>
                    <Link onClick={() => handleClick("#welcome")} className=" hover:text-[#E55604]" href="#welcome">Welcome</Link>
                    <Link onClick={() => handleClick("#projects")} className=" hover:text-[#E55604]" href='#projects'>Projects</Link>
                    <Link onClick={() => handleClick("#about")} className=" hover:text-[#E55604]" href='#about'>About</Link>
                    <Link href="https://github.com/tomavasi" className="hover:text-[#E55604]"><FaGithub size={30} /></Link>
                    <Link href="https://www.linkedin.com/in/vasilis-tomaras-b16a3914a/" className="hover:text-[#E55604]"><FaLinkedin size={30} /></Link>
                </div>

            </div>
            {/* header  for small screen */}
            <div className="md:hidden fixed top-0 left-0 w-full z-10 flex p-4 justify-between bg-black text-white animate-appear">
                <div className="relative flex text-3xl">
                    <h1 className="relative animate-bouncing 3s">V</h1>
                    <h1 className="absolute animate-bouncing 3s left-[17px]">T</h1>
                    <div className="absolute left-[40px] top-[25px] w-2 h-2 bg-white rounded-full mt-auto animate-appear"></div>
                </div>
                <div onClick={() => setMenu(prev => !prev)}>
                    <PiHamburger className={`${menuOpen && "hidden"}`} size={35} />
                    <FaXmark className={`${!menuOpen && "hidden"}`} size={30} />
                </div>
                <div className={`${!menuOpen && "hidden"} ${fonts.cairo.className} duration-500 absolute top-[65px] z-100 left-0 h-[230px] w-full bg-black animate-appearFast`}>
                    <div className={`flex flex-col justify-center items-center text-xl gap-12 duration-700 mb-2`}>
                        <Link onClick={() => { setMenu(prev => !prev); handleClick("#welcome") }} className=" hover:text-[#E55604]" href="#welcome">Welcome</Link>
                        <Link onClick={() => { setMenu(prev => !prev); handleClick("#projects") }} className=" hover:text-[#E55604]" href='#projects'>Projects</Link>
                        <Link onClick={() => { setMenu(prev => !prev); handleClick("#about") }} className=" hover:text-[#E55604]" href='#about'>About</Link>
                    </div>
                    <div className="flex items-center justify-around w-full h-[50px] bg-black text-white pb-2">
                        <Link href="https://github.com/tomavasi" className=""><FaGithub size={30} /></Link>
                        <Link href="https://www.linkedin.com/in/vasilis-tomaras-b16a3914a/" className=""><FaLinkedin size={30} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}