"use client"

import Link from 'next/link'
import  { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image"
import Form from "./Form"


const Contact = () => {

  useEffect(() => {
    AOS.init({
         duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <section className=" flex flex-col md:flex-row my-24 md:space-x-8 w-[90%] md:w-4/5 mx-auto" id="contacts">
        <div data-aos="fade-right" className=" flex-1 text-center md:text-left space-y-4">
            <h2 className="text-[25px] md:text-[32px] lg:text-[50px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradient  to-grad ">Get in Touch</h2>
            <p className="text-[17.5px] md:text-[19px] lg:text-[22.5px] font-medium leading-[32px] text-white">For business and partnership inquiry please contact me below!</p>
            <div className="hidden  md:flex items-center space-x-[18px] ">
            <Link target='_blank' href='https://twitter.com/Emor__Musk'><Image  src='/twitter.svg' alt='' width={30} height={30} /></Link>
              <Link target='_blank' href='https://www.linkedin.com/in/samuel-emorinken-401b10203/'><Image  src='/Linkedin.svg' alt='' width={30} height={30} /></Link>
              <Link target='_blank' href='https://github.com/Sam10-debug'><Image  src='/Github.svg' alt='' width={30} height={30} /></Link>
              <Link target='_blank' href='mailto:emorinkensam@gmail.com'><Image  src='/Mail.svg' alt='' width={30} height={30} /></Link>
            </div>
        </div>
       <Form  />
    </section>
  )
}

export default Contact
