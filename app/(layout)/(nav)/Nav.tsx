"use client"

import { useRef } from 'react';
import Link from "next/link"


const Nav = () => {
  let myRef:any = useRef();
  const navRef:any= useRef<HTMLElement>()
	const first:any= useRef<SVGSVGElement>()
	const second:any= useRef<SVGSVGElement>()
	const third:any= useRef<SVGSVGElement>()

  const handleClick = () => {

    navRef?.current?.classList.toggle("showNav")
	first?.current?.classList.toggle("show")
	second?.current?.classList.toggle("remove")
	third?.current?.classList.toggle("showw")    
    myRef?.current.classList.toggle("show-nav")
  };

  return (
    <header className="md:py-8 md:px-[72px] px-[20px] py-[15px] md:flex justify-between items-center ">
      <div className="container mx-auto flex justify-between items-center">
      <svg width="149" height="22" viewBox="0 0 149 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.98 21.5V1.7H15.41V4.85H4.79V10.01H14V12.92H4.79V18.32H15.44V21.5H0.98ZM17.9973 21.5V12.32V5.84H21.1773L21.0573 11.36H21.5073C22.1373 7.25 23.8173 5.42 26.5173 5.42C29.3673 5.42 30.7473 7.46 30.8373 11.33H31.2573C31.8873 7.22 33.7773 5.42 36.5073 5.42C40.9773 5.42 41.5173 10.37 41.5173 13.16V21.5H37.7073V13.61C37.7073 12.05 37.6473 8.75 35.1573 8.75C33.0873 8.75 31.7373 11.15 31.6173 14.9V21.5H27.8973V13.76C27.8973 12.23 27.8973 8.75 25.3173 8.75C23.2473 8.75 21.8973 11.12 21.8073 14.93V21.5H17.9973ZM52.0011 21.89C47.4111 21.89 44.2011 19.07 44.2011 13.64C44.2011 8.09 47.5311 5.42 51.9711 5.42C56.5011 5.42 59.7711 8.21 59.7711 13.7C59.7711 19.28 56.3811 21.89 52.0011 21.89ZM52.0911 19.01C54.1611 19.01 55.9311 17.6 55.9311 13.88C55.9311 10.04 54.0411 8.45 51.8511 8.45C49.8411 8.45 48.0411 9.86 48.0411 13.58C48.0411 17.42 49.8711 19.01 52.0911 19.01ZM62.6457 21.5V13.58V5.84H65.9157L65.7657 11.69H66.2457C66.6657 7.4 68.1657 5.45 70.8957 5.45C71.3757 5.45 71.8857 5.54 72.5157 5.75L72.3357 9.83C71.6757 9.53 70.9557 9.38 70.3557 9.38C68.0457 9.38 66.7857 11.42 66.4557 14.75V21.5H62.6457Z" fill="url(#paint0_linear_87_685)"/>
        <path d="M74.9839 21.5V1.7H80.7739L86.2939 17.24H86.4139L91.8739 1.7H97.3639V21.5H93.7939L93.9439 5.54H93.7339L87.8539 21.5H84.4339L78.6139 5.54H78.4039L78.5539 21.5H74.9839ZM106.301 21.89C102.461 21.89 100.961 18.98 100.961 14.24V5.84H104.771V13.55C104.771 15.62 104.861 18.65 107.591 18.65C109.901 18.65 111.221 16.22 111.341 12.38V5.84H115.121V14.66L115.151 21.5H111.941L112.061 16.04H111.641C110.921 20.21 109.241 21.89 106.301 21.89ZM125.019 21.89C120.819 21.89 118.059 20.21 117.939 16.91L121.059 16.1C121.119 17.96 122.649 19.07 125.229 19.07C127.149 19.07 128.319 18.41 128.319 17.27C128.319 16.01 126.969 15.65 124.569 15.14C121.389 14.42 118.179 13.64 118.179 10.25C118.179 7.31 120.639 5.42 124.689 5.42C128.439 5.42 131.139 7.1 131.349 10.31L128.169 11.09C128.109 9.26 126.699 8.27 124.599 8.27C122.799 8.27 121.719 8.99 121.719 10.07C121.719 11.36 123.249 11.78 125.589 12.23C128.619 12.86 131.859 13.58 131.859 17.09C131.859 20.12 129.339 21.89 125.019 21.89ZM134.599 21.5V0.41H138.319V12.08C141.229 10.58 143.389 7.91 144.199 5.81H148.549C147.439 8.87 144.589 12.05 140.659 12.95V13.34C145.609 12.68 147.019 15.71 148.099 18.83L148.849 21.5H144.709L144.259 19.67C143.419 16.91 142.489 14.96 139.519 14.96H138.319V21.5H134.599Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linear_87_685" x1="-2.8287" y1="32.9638" x2="178.731" y2="3.93077" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9847FF"/>
        <stop offset="1" stopColor="#EF34FF"/>
        </linearGradient>
        </defs>
      </svg>

      </div>
      <nav ref={myRef} className=" text-white  md:flex">
        <ul className=" flex md:space-x-[55px] space-y-8 md:space-y-0">
          <li className=""><Link href="#home">Home</Link></li>
          <li className=" whitespace-nowrap"><Link href="#about">About Me</Link></li>
          <li className=""><Link href="#projects">Projects</Link></li>
          <li className=" md:border-[2px] md:h-[30px] md:border-gradient md:w-[110px] md:flex items-center justify-center md:rounded-[5px]"><Link target='_blank' href="/resume_tech.pdf" >Resume</Link></li>
        </ul>
      </nav>
      <div onClick={handleClick}  className='hamburger container  w-fit  flex md:hidden justify-between items-center'>
			<svg ref={first} width="21" className=" " height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.38647 1H19.3865" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
			<svg ref={second} width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.38647 1H19.3865" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
			<svg ref={third} width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.38647 1H19.3865" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</div>
    </header>
  )
}

export default Nav
