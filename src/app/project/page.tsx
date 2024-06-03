'use client'

import Image from "next/image";
import { Carousel, Flowbite } from "flowbite-react";
import weathify from '/public/weathify.png'
import lqs from '/public/lqs.png'
import shoot from '/public/shootUp.png';
import { Chakra_Petch } from "next/font/google";
import react from '/public/React.png'
import typescript from '/public/Typescript.png'
import CSS3 from '/public/CSS3.png'
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: "normal"
});

const customTheme = {
  carousel: {
    root: {
      base: "relative h-full w-full",
      leftControl: "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl: "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"
    },
    indicators: {
      active: {
        off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-white dark:bg-gray-800"
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    item: {
      base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-full flex-shrink-0 transform cursor-default snap-center",
        on: "w-full flex-shrink-0 transform cursor-grab snap-center"
      }
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-black group-hover:bg-fuchsia-900 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-hidden scroll-smooth rounded-lg",
      snap: "snap-x"
    }
  }
}

export default function Projects() {
  return (
    <div className={`relative h-[90vh] w-full ${chakra.className} overflow-x-hidden`}>
      <Flowbite theme={{ theme: customTheme }}>
        <Carousel slide={true} indicators={false} slideInterval={4000} pauseOnHover>
          <div className="flex justify-center rounded-full text-white bg-black h-[800px] shadow-md shadow-fuchsia-900 w-[800px] px-8">
            <div className="flex flex-col justify-between items-center px-6 py-12">
              <h1 className={`text-5xl font-bold p-12`}>
                Weathify
              </h1>
              <div className="flex gap-4">
                <Image src={react} alt="react logo" width={40} style={{ objectFit: 'cover' }}/>
                <Image src={typescript} alt="typescript logo" width={40} style={{ objectFit: 'cover' }}/>
                <Image src={CSS3} alt="CSS3 logo" width={40} style={{ objectFit: 'cover' }}/>
              </div>
              <div className="text-xl/5 font-[500]">
                <h2>Do you wanna check the weather and lister to Spotify? Weathify is here for you.
                  Log in in your Spotify account and search your favorite city. Get related content depending on the weather of that city and enjoy!</h2>
              </div>
              <div>
                <Link className="flex items-center p-2" href="https://tomavasi.github.io/weather-app/">Go to Weathify <FaArrowRight/> </Link>
              </div>
            </div>
            {/* <div className="flex flex-col justify-between items-center flex-1 px-4 py-12"> */}
              {/* <div className="relative whitespace-nowrap w-[800px] overflow-x-hidden">
                <div className="inline-flex animate-slide">
                  <Image className="max-w-full px-2 h-[150px]" src={weathify} alt='lqs pictrue' style={{ objectFit: 'cover' }} />
                  <Image className="max-w-full px-2 h-[150px]" src={lqs} alt='lqs pictrue' style={{ objectFit: 'cover' }} />
                  <Image className="max-w-full px-2 h-[150px]" src={shoot} alt='lqs pictrue' style={{ objectFit: 'cover' }} />
                </div>
                <div className="inline-flex animate-slide">
                  <Image className="max-w-full px-2 h-[150px]" src={weathify} alt='lqs pictrue' style={{ objectFit: 'cover' }} />
                  <Image className="max-w-full px-2 h-[150px]" src={lqs} alt='lqs pictrue' style={{ objectFit: 'cover' }} />
                  <Image className="max-w-full px-2 h-[150px]" src={shoot} alt='lqs pictrue' style={{ objectFit: 'cover' }} />
                </div>
              </div> */}
            {/* </div> */}
          </div>
          <div className="flex h-full items-center justify-center">
            Slide 2
          </div>
          <div className="flex h-full items-center justify-center">
            Slide 3
          </div>
        </Carousel>
      </Flowbite>
    </div>

  )
}