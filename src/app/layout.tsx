
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import SmoothScoller from "@/components/smooth-scroll";
import * as fonts from '@/fonts/fonts'
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Portofolio | Vasilis Tomaras",
  description: "my portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en" className="">
      <body className={`${inter.className} relative`}>
        <SmoothScoller root>
          <Header />
          <div className="absolute top-0 left-1/2 max-md:-translate-x-1/2 md:left-[27%] h-screen w-full md:w-[73%] flex justify-center">
            <div className='fixed top-2/3 max-md:left-[50px] max-md:z-10 md:top-[90%] md:translate-x-1/2 md:right-[50px] max-md:rotate-90 md:-rotate-90'>
              <div className='absolute left-0 translate-x-[300%] h-[50px] w-[10px] bg-white -rotate-45 shadow-lg shadow-black' />
              <div className='absolute left-0 h-[50px] w-[10px] bg-white rotate-45 shadow-lg shadow-black' />
              <div className='absolute left-[60px] translate-x-[300%] h-[50px] w-[10px] bg-white -rotate-45 shadow-lg shadow-black' />
              <div className='absolute left-[60px] h-[50px] w-[10px] bg-white rotate-45 ' />
            </div>
            <div className="md:container md:px-20 md:mx-auto">
            {children}
            </div>
          </div>
          <div className="fixed max-md:hidden top-[78px] md:top-[0] left-0 md:h-[60%] md:w-[27%] border-b border-t border-black bg-[#E55604] animate-appearRed">
            <div className="animate-[appear_5s_ease]">
              <div className="absolute -translate-y-[50%] left-full -translate-x-[50%] w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] rounded-full border-[10px] border-white shadow-[5px_-5px_10px_rgba(0,0,0,0.5)_inset] animate-moveDown [animation-timeline:scroll()] [animation-range:0_100%]"></div>
              <div className="absolute top-full -translate-y-[50%] -translate-x-[50%] w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] border-[10px] border-white shadow-[-5px_5px_20px_rgba(0,0,0,0.3)_inset] animate-moveUp [animation-timeline:scroll()] [animation-range:0_100%]"></div>
              <div className="absolute top-[calc(50%-78px)] left-1/2 -translate-x-1/2 translate-y-[calc(50%-78px)] -z-50 w-[100px] h-[200px] dots animate-spinNscale origin-left [animation-timeline:scroll()] [animation-range:0_100%]" />
            </div>
          </div>
          <div className="fixed bottom-0 z-50 md:top-[60%] w-full md:w-[27%] h-[10vh] md:h-[40vh] left-0 flex justify-center items-center bg-[#E55604] md:bg-[#7b7b7b] animate-appearBlack">
            <div className={`${fonts.cairo.className}  animate-appear p-2`}>
              <h1 data-text={'Vasilis Tomaras'} id='name' className="relative text-black font-[700] text-xl text-center md:text-2xl lg:text-3xl">Vasilis Tomaras</h1>
              <p className="text-xs text-center font-[300] md:text-lg text-white lg:text-xl">[BASED IN AMSTERDAM]</p>
            </div>
          </div>
        </SmoothScoller>
      </body>
    </html>
  );
}
