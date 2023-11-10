"use client"

import { gsap } from "gsap";
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react';
import Button from '@/app/(shared)/button/Button'


const Hero = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const elementRef1 = useRef<HTMLDivElement | null>(null);
  const tl = gsap.timeline();
  useEffect(() => {
    gsap.set([elementRef.current, elementRef1.current], { opacity: 0, y: 50 });

    tl.to(elementRef.current, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: 'power4.out',
    });

    tl.to(
      elementRef1.current,
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power4.out',
      },
      '-=0.5'
    );

    // Cleanup: Cancel the animation when the component unmounts
    return () => {
      tl.kill();
    };
  });
  return (
    <section  className="  hero flex flex-col md:flex-row justify-between md:w-4/5 md:space-x-4 items-center mx-auto px-4 md:px-0" id='hero'>
        <section ref={elementRef} className=" flex-1 ">
            <h3 className="lg:text-[40px] md:text-[28px] xl:text-[46px] text-[22.5px] text-center md:text-left font-semibold text-white">Hello, I&apos;m</h3>
            <h1 className=" lg:text-[80px] md:text-[56px] xl:text-[100px] text-[45px] text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-gradient  to-grad font-bold leading-[auto]">Emor Musk</h1>
            <p className="  font-medium lg:text-[20px] md:text-[18px] text-[17.5] text-center md:text-left xl:text-[25px] leading-[150.6%] text-white flex-1 justify-center items-center">I&apos;m a dedicated front-end developer with over 3 years of experience in crafting stunning web experiences. I specialize in creating responsive and <br />pixel-perfect websites.</p>
            <div className=" md:space-x-8 py-8 flex flex-col md:flex-row space-y-2 md:space-y-0">
            <Button className='lg:w-[176px] md:w-[120px] lg:h-[45px] h-[45px] hover:text-gradient rounded-sm border-[1px] border-gradient text-white font-semibold flex justify-center items-center' text='Projects' href='#projects' target='' />
            <Button className='lg:w-[176px] lg:h-[45px] md:w-[120px] h-[45px] hover:bg-light_gradient  rounded-sm  bg-gradient-to-r from-gradient  to-grad text-white font-semibold flex justify-center items-center' text='Hire Me' href='#contacts' target='' />
            </div>
        </section>
        <section ref={elementRef1} className=" flex-1 flex justify-center items-center">
            <Image
            src="/images/profile_picture.png"
            width={400}
            height={400}
            alt="Picture of the Developer"
        />
        </section>
    </section>
  )
}

export default Hero
