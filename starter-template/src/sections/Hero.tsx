"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });


import memojiAnimation from "@/assets/images/memojiAnimation.json";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import JsSvg from "@/assets/icons/jsnew.svg";
import ReactSvg from "@/assets/icons/reactnew.svg";
import CssSvg from "@/assets/icons/cssnew.svg";
import GoLang from "@/assets/icons/gonew.svg";
import SqlSvg from "@/assets/icons/sqlnew.svg";
import PythonSvg from "@/assets/icons/pynew.svg";
import MongoSvg from "@/assets/icons/mongonew.svg";

import { HeroOrbit } from "@/components/HeroOrbit";


export const HeroSection = () => {
  return (
  <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">

  <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">

    <div className="absolute inset-0 z-30 opacity-5" style={{
      backgroundImage: `url(${grainImage.src})`
      }}
      ></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
    <HeroOrbit size={800} rotation={-72}>
      <JsSvg className="size-20"/>
    </HeroOrbit>
    <HeroOrbit size={550} rotation={20}>
      <ReactSvg className="size-19 text-emerald"/>
    </HeroOrbit>
    <HeroOrbit size={590} rotation={98}>
      <CssSvg className="size-18 text-emerald"/>
    </HeroOrbit>
    <HeroOrbit size={430} rotation={-14}>
      <GoLang className="size-18 text-emerald"/>
    </HeroOrbit>
    <HeroOrbit size={440} rotation={79}>
      <SqlSvg className="size-18 text-emerald"/>
    </HeroOrbit>
    <HeroOrbit size={530} rotation={178}>
      <PythonSvg className="size-18 text-emerald"/>
    </HeroOrbit>
    <HeroOrbit size={710} rotation={144}>
      <MongoSvg className="size-18 text-emerald"/>
    </HeroOrbit>
    <HeroOrbit size={720} rotation={85}>
      <div className="size-3 rounded-full bg-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={520} rotation={-41}>
      <div className="size-2 rounded-full bg-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={650} rotation={-5}>
      <div className="size-3 rounded-full bg-emerald-300/20" />
    </HeroOrbit>

    </div>

    <div className="container">
      <div className="flex flex-col items-center">
    <div className="w-40 h-40 md:w-60 md:h-60">
     < Lottie animationData={memojiAnimation} loop={true} />
    </div>
   
    </div>
    <div className="max-w-lg mx-auto">
    <h1 className="font-serif text-5xl md:text-10xl text-center mt-8 tracking-wide">Atul Anand</h1>
    <p className="mt-4 text-center text-white/60 md:text-lg">
      I specialze in transforming designs into functional, high-performing 
      web applications. Let's discuss your next project.
    </p>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
      <button className="inline-flex items-center gap-2 border-white/15 px-6 h-12 rounded-xl">
        <span className="font-semibold">Explore My Work</span>
      </button>
      <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
        <span>👋</span>
        <span className="font-semibold">Let's Connect</span>
      </button>
    </div>
  </div>
  </div>
  );
};
