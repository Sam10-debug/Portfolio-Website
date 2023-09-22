"use client"

import  { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Icon from '@/app/(shared)/icons/Icon';


const imgPrperties=[
    {src:'/Group 14.svg',alt:'NextJs logo'},
    {src:'/Group 16.svg',alt:'HTML logo'},
    {src:'/Group 48.svg',alt:'CSS logo'},
    {src:'/Group 49.svg',alt:'Javascript logo'},
    {src:'/Group 50.svg',alt:'React logo'},
    {src:'/Group 51.svg',alt:'TailwindCss logo'},
]
const mapped=imgPrperties.map(elem=>(<Icon src={elem.src} alt={elem.alt} key={elem.src} />))

const SuperPowers=()=>{

    useEffect(() => {
        AOS.init({
             duration: 2000,
        });
        AOS.refresh();
      }, []);

    return (
        <section className="">
            <h3 data-aos="zoom-in" className="text-[20px] md:text-[30px] text-supText font-bold text-center my-8">My Superpowers</h3>
            <div data-aos="zoom-in-right"  className=" flex flex-wrap lg:space-y-0 space-y-4 space-x-4 md:space-x-8 lg:space-x-16 justify-center rounded-[10px] border-stroke bg-dark_gradient border-[1px] w-[90%] md:w-4/5 mx-auto py-8">
                {mapped}
            </div>
        </section>
    )
}

export default SuperPowers;