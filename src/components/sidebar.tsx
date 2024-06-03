'use client'

import Link from "next/link"
import { useEffect, useState } from "react";
import { FaCopy, FaGithub, FaLinkedin } from "react-icons/fa6"

export default function Sidebar() {
  const [copy, setCopy] = useState(false);

  async function copyToClip() {
    await navigator.clipboard.writeText(location.href);
    setCopy(prev => !prev);
    setTimeout(() => {
      setCopy((prev) => !prev)
    }, 1500);
  }


  return (
    <div className="fixed flex flex-col justify-center max-md:hidden z-10 items-center top-0 gap-16 left-0 w-[8%] h-screen bg-[#e61b1f] border-r border-black text-white animate-appearRed">
      <Link href="https://github.com/tomavasi" className=""><FaGithub size={30} /></Link>
      <Link href="https://www.linkedin.com/in/vasilis-tomaras-b16a3914a/" className=""><FaLinkedin size={30} /></Link>
      <div className="relative" onClick={copyToClip}>
        <FaCopy className="cursor-pointer" size={30} />
        <div className={`absolute ${!copy && "hidden"} mt-3 p-1 border-2 rounded-md shadow-sm`}>Coppied</div>
      </div>
    </div>
  )
}