import * as fonts from '@/fonts/fonts';
export default function Welcome() {
    return (
        <div className="relative w-full  h-[80vh] px-6 mt-[70px] flex flex-col md:px-10 justify-center animate-appear">
            <div className={`${fonts.cairo.className} flex flex-col relative items-end animate-disappear [animation-timeline:scroll()]`}>
                <h1 id="software" className="relative text-black font-[800] text-6xl md:text-7xl xl:text-9xl">Software</h1>
                <h1 id="developer" className={`relative text-black font-[800] text-6xl md:text-7xl xl:text-9xl`}>Developer⁎</h1>
                <div className={`text-white text-sm font-[300] md:text-md text-right mt-6`}>
                    <p>[WELCOME TO MY PORTFOLIO 2024]</p>
                </div>
            </div>
        </div>

    )
}