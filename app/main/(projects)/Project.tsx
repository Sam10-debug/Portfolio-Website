"use client"

import  { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import Button from "@/app/(shared)/button/Button"

const Project = () => {

    useEffect(() => {
        AOS.init({
             duration: 2000,
        });
        AOS.refresh();
      }, []);

  return (
    <section className="">
        
        <div data-aos="zoom-in" className=" text-center space-y-8 flex flex-col justify-center items-center mt-8" id="projects">
            <h3 className=" text-[25px] md:text-[32px] lg:text-[50px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradient  to-grad">Projects</h3>
            <p className="text-[17.5px] md:w-3/4 md:text-center px-4 md:px-0 md:text-[19px] lg:text-[22.5px] font-medium leading-[32px] text-white">I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects</p>
        </div>
        <section className="mt-8 rounded-[10px] md:w-4/5 mx-auto bg-dark_gradient shadow-lg border-stroke border-[2px] py-4 md:px-8 px-4 space-y-10">
        <div data-aos="zoom-in" className=" rounded-[15px] bg-crappo flex flex-col lg:flex-row lg:space-x-12 p-8">
        <div className=" flex justify-center items-center">
                <Image
            src="/images/candleaf.png"
            width={400}
            height={400}
            alt="Picture of the Candleaf ecommerce website"
            
        />
        </div>
        <div className=" flex flex-col text-center lg:text-left mt-8 md:mt-0 md:space-y-4  justify-between">
            <h4 className="text-[22px] md:text-[26px] lg:text-[30px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradient  to-grad">Candleaf e-Commerce Website </h4>
            <p className="text-[17.5px] md:text-[19px] lg:text-[22.5px] font-medium leading-[32px] text-white">This is an ecommerce website i built out with NextJs and TailwindCSS</p>
            <Button target='_blank' href="https://candleaf-one.vercel.app/" text='View Live' className='bg-gradient-to-r from-gradient  to-grad text-white rounded-[5px] w-full  lg:w-[160px] h-[42.5px] flex justify-center items-center' />
        </div>
            </div>
        <div data-aos="zoom-in" className=" rounded-[15px] bg-crappo flex flex-col lg:flex-row lg:space-x-12 p-8">
        <div className=" flex justify-center items-center">
                <Image
            src="/images/Screenshot (112).png"
            width={400}
            height={400}
            alt="Picture of the getLinked hackathon website"
            
        />
        </div>
        <div className=" flex flex-col text-center lg:text-left mt-8 md:mt-0 md:space-y-4  justify-between">
            <h4 className="text-[22px] md:text-[26px] lg:text-[30px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradient  to-grad">getLinked Hackathon Website </h4>
            <p className="text-[17.5px] md:text-[19px] lg:text-[22.5px] font-medium leading-[32px] text-white">This is an hackathon i participated in and the project was built with NextJs13 and TailwindCSS</p>
            <Button target='_blank' href="https://get-linked-murex.vercel.app/" text='View Live' className='bg-gradient-to-r from-gradient  to-grad text-white rounded-[5px] w-full  lg:w-[160px] h-[42.5px] flex justify-center items-center' />
        </div>
            </div>
            <div data-aos="zoom-in" className=" rounded-[15px] bg-crappo flex flex-col lg:flex-row lg:space-x-12 p-8">
        <div className=" flex justify-center items-center">
                <Image
            src="/images/crappo.png"
            width={400}
            height={400}
            alt="Picture of the crappo web landing page"
            
        />
        </div>
        <div  className=" flex flex-col text-center lg:text-left mt-8 md:mt-0 md:space-y-4  justify-between">
            <h4 className="text-[22px] md:text-[26px] lg:text-[30px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradient  to-grad">Crappo Web Landing Page</h4>
            <p className="text-[17.5px] md:text-[19px] lg:text-[22.5px] font-medium leading-[32px] text-white">This is a crypto website built with the JavaScript library, React and the
            animation library AOS( animation on scroll)</p>
            <Button target='_blank' href="http://crappo-web-app.vercel.app/"  text='View Live' className='bg-gradient-to-r from-gradient  to-grad text-white rounded-[5px] w-full  lg:w-[160px] h-[42.5px] flex justify-center items-center' />
        </div>
            </div>
            <div data-aos="zoom-in" className=" rounded-[15px] bg-crappo flex flex-col lg:flex-row lg:space-x-12 p-8">
        <div className=" flex justify-center items-center">
                <Image
            src="/images/musica.png"
            width={400}
            height={400}
            alt="Picture of the musica web app"
            
        />
        </div>
        <div className=" flex flex-col text-center lg:text-left mt-8 md:mt-0 md:space-y-4  justify-between">
            <h4 className="text-[22px] md:text-[26px] lg:text-[30px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradient  to-grad">Musica Web App</h4>
            <p className="text-[17.5px] md:text-[19px] lg:text-[22.5px] font-medium leading-[32px] text-white">-  This a mock music app website built with NextJS and TailwindCss</p>
           
            <Button target='_blank' href="https://musica-app-two.vercel.app/" text='View Live' className='bg-gradient-to-r from-gradient  to-grad text-white rounded-[5px] w-full  lg:w-[160px] h-[42.5px] flex justify-center items-center' />
        </div>
            </div>
            <div className="flex justify-center items-center w-full">
                <Link className="  flex space-x-2" target='_blank' href="https://github.com/Sam10-debug"><span className=" text-white font-bold lg:text-[25px] md:text-[20px] text-sm">See More</span>
                <FontAwesomeIcon icon={faArrowRight} className="w-6 h-6 bg-white"  /></Link>
            </div>
            
        </section>
        <div data-aos="zoom-in-right" className=" mt-8 rounded-[10px] md:w-4/5 mx-auto bg-dark_gradient shadow-lg border-stroke border-[2px] py-4 md:px-8 px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className=" text-center md:text-left">
                <h3 className="text-white text-[28px] md:text-[32px] lg:text-[40px] font-semibold md:font-bold ">Have any project in mind?</h3>
                <p className=" text-gray text-[17.5px] md:text-[19px] lg:text-[22.5px]">I&apos;m available for freelancing</p>
            </div>
            <Button target='_blank' text='Email Me' href='mailto:emorinkensam@gmail.com' className='w-[249px] h-[56px] rounded-[5px] bg-gradient-to-r from-gradient  to-grad text-[20px] md:text-[22px] lg:text-[25px] font-bold text-white flex justify-center items-center' />
        </div>
    </section>
  )
}

export default Project
