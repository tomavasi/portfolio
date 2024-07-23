'use client'

import { StaticImageData } from "next/image";
import { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaCss3, FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

interface ProjectCardProps {
    title: string;
    icon: ReactNode;
    text: string;
    images?: StaticImageData[];
    urlWebsite?: string;
    urlGit?: string;
    react?: boolean,
    typescript?: boolean,
    css?: boolean,
    java?: boolean,
    node?: boolean
}

export default function ProjectCard(props: ProjectCardProps) {

    const [appearLink, setAppearLink] = useState<boolean>(false);

    const images = props.images?.map(image => {
        return (
            <Image key={image.src} src={image} alt="" width={30} style={{ objectFit: 'cover' }} />
        )
    })

    return (
        <>
            <div className={`h-[80%] relative z-10 w-[100%] flex flex-col justify-evenly items-start max-md:p-1 p-4`}>
                {!!props.urlWebsite ? <Link href={props.urlWebsite}>
                    <div className="flex relative w-[150px]">
                        <div className="absolute max-md:hidden w-[10%] h-[2px] bg-black top-1/2 -translate-y-1/2 -left-[30%]" />
                        <h1 data-text={props.title} onMouseEnter={() => setAppearLink(prev => !prev)} onMouseLeave={() => setAppearLink(prev => !prev)} className="relative font-[700] text-lg text-[#26577C] hover:text-[#E55604] md:text-xl lg:text-2xl xl:text-3xl">{props.title}<div className={`absolute h-[2px] w-[20px] -right-[25px] top-1/2 bg-black -rotate-45 ${!appearLink && 'hidden'} .arrow before:arrowA-B after:arrowA-B before:arrowB after:arrowA animate-appearArrow`} /></h1>
                    </div></Link> :
                    <div className="flex relative w-[150px]">
                        <div className="absolute max-md:hidden w-[10%] h-[2px] bg-black top-1/2 -translate-y-1/2 -left-[30%]" />
                        <h1 className="relative font-[700] text-lg md:text-xl lg:text-2xl xl:text-3xl">{props.title}</h1>
                    </div>}
                <p className="text-xs md:text-base lg:text-lg ">{props.text}</p>
                <div className="flex text-xs md:text-base lg:text-lg xl:text-xl gap-2 items-center justify-between">
                    {props.react ? <FaReact /> : null} {props.java ? <FaJava /> : null} {props.css ? <FaCss3 /> : null} {props.typescript ? <SiTypescript /> : null} {props.node ? <FaNodeJs/> : null}
                    {" | "}
                    {!!props.urlGit ? <Link href={props.urlGit} className="hover:text-[#E55604]"><FaGithub /></Link> : null}
                </div>
            </div>
        </>
    )
}