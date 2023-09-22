"use client"
import  { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
     // useEffect(() => {
     //      AOS.init({
     //           duration: 2000,
     //      });
     //      AOS.refresh();
     //    }, []);
  return (
    <section data-aos="zoom-in" data-aos-delay="500" className=" bg-body_colour py-12 border-t-2 border-t-body_colour" id="about">
        <section className=" text-center rounded-[10px] md:w-4/5 mx-auto bg-dark_gradient shadow-lg border-stroke border-[2px] py-4 md:px-8 px-4 space-y-10">
        <div className="" data-aos="fade-left">
            <h2 className=" text-[25px] md:text-[32px] lg:text-[50px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradient  to-grad ">About Me</h2>
            <p className=" text-[17.5px] md:text-[19px] lg:text-[22.5px] font-medium leading-[32px] text-white">Hello, I&apos;m Samuel Emorinken, a dedicated front-end developer with a strong passion for open-source collaborations and a knack for crafting beautiful and user-friendly websites. With a background in Mechanical Engineering and a knack for design, I thrive on turning ideas into digital reality.</p>
        </div>
       <div className="" data-aos="fade-right">
            <h3 className="text-[20px] md:text-[24px] lg:text-[30px] font-bold text-supText">Passion and Interests</h3>
            <p className=" text-white font-medium text-[17.5px] md:text-[19px] lg:text-[22.5px] leading-[32px]">I&apos;m passionate about creating web experiences that not only look great but also provide real value to users. I&apos;m particularly interested in the intersection of design and development, where user-centered design principles meet cutting-edge technologies.</p>
       </div>
       <div className="" data-aos="fade-up-right">
            <h3 className="text-[20px] md:text-[24px] lg:text-[30px] font-bold text-supText">Personal Touch</h3>
            <p className=" text-white font-medium text-[17.5px] md:text-[19px] lg:text-[22.5px] leading-[32px]">Beyond the world of coding, I have a few passions that keep me inspired and balanced. I thoroughly enjoy writing articles on a variety of topics, where I can share my thoughts and insights with the world. Whether it&apos;s tech-related trends, personal development, or the latest in anime culture, you&apos;ll often find me expressing my ideas through the written word. Anime is another realm where I find solace and creativity. Exploring captivating storylines, diverse characters, and the artistry of animation is not just a pastime for me—it&apos;s a source of inspiration and a way to unwind after a day of coding challenges.</p>
       </div>
       <div className="" data-aos="fade-up-right">
            <h3 className="text-[20px] md:text-[24px] lg:text-[30px] font-bold text-supText">What Do I Offer</h3>
            <p className=" text-white font-medium text-[17.5px] md:text-[19px] lg:text-[22.5px] leading-[32px]">I offer a wide range of services including programming and teaching.</p>
       </div>
    </section>
    </section>
  )
}

export default About
