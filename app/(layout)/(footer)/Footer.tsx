import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
   <footer className=' md:bg-gradient-to-r from-gradient via-grads to-grad flex justify-between md:h-[150px] items-center px-[100px]'>
     <div className="icons flex md:hidden space-x-[18px] my-auto py-4 items-center">
              <Link target='_blank'  href='https://twitter.com/Emor__Musk'><Image  src='/twitter.svg' alt='' width={100} height={100} /></Link>
              <Link target='_blank'  href='https://www.linkedin.com/in/samuel-emorinken-401b10203/'><Image  src='/Linkedin.svg' alt='' width={100} height={100} /></Link>
              <Link target='_blank'  href='https://github.com/Sam10-debug'><Image  src='/Github.svg' alt='' width={100} height={100} /></Link>
              <Link target='_blank'  href='mailto:emorinkensam@gmail.com'><Image  src='/Mail.svg' alt='' width={100} height={100} /></Link>
            </div>
    <div className="hidden md:flex">
        <svg width="149" height="23" viewBox="0 0 149 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.48 22V2.2H14.91V5.35H4.29V10.51H13.5V13.42H4.29V18.82H14.94V22H0.48ZM17.4973 22V12.82V6.34H20.6773L20.5573 11.86H21.0073C21.6373 7.75 23.3173 5.92 26.0173 5.92C28.8673 5.92 30.2473 7.96 30.3373 11.83H30.7573C31.3873 7.72 33.2773 5.92 36.0073 5.92C40.4773 5.92 41.0173 10.87 41.0173 13.66V22H37.2073V14.11C37.2073 12.55 37.1473 9.25 34.6573 9.25C32.5873 9.25 31.2373 11.65 31.1173 15.4V22H27.3973V14.26C27.3973 12.73 27.3973 9.25 24.8173 9.25C22.7473 9.25 21.3973 11.62 21.3073 15.43V22H17.4973ZM51.5011 22.39C46.9111 22.39 43.7011 19.57 43.7011 14.14C43.7011 8.59 47.0311 5.92 51.4711 5.92C56.0011 5.92 59.2711 8.71 59.2711 14.2C59.2711 19.78 55.8811 22.39 51.5011 22.39ZM51.5911 19.51C53.6611 19.51 55.4311 18.1 55.4311 14.38C55.4311 10.54 53.5411 8.95 51.3511 8.95C49.3411 8.95 47.5411 10.36 47.5411 14.08C47.5411 17.92 49.3711 19.51 51.5911 19.51ZM62.1457 22V14.08V6.34H65.4157L65.2657 12.19H65.7457C66.1657 7.9 67.6657 5.95 70.3957 5.95C70.8757 5.95 71.3857 6.04 72.0157 6.25L71.8357 10.33C71.1757 10.03 70.4557 9.88 69.8557 9.88C67.5457 9.88 66.2857 11.92 65.9557 15.25V22H62.1457Z" fill="#090411"/>
            <path d="M74.4839 22V2.2H80.2739L85.7939 17.74H85.9139L91.3739 2.2H96.8639V22H93.2939L93.4439 6.04H93.2339L87.3539 22H83.9339L78.1139 6.04H77.9039L78.0539 22H74.4839ZM105.801 22.39C101.961 22.39 100.461 19.48 100.461 14.74V6.34H104.271V14.05C104.271 16.12 104.361 19.15 107.091 19.15C109.401 19.15 110.721 16.72 110.841 12.88V6.34H114.621V15.16L114.651 22H111.441L111.561 16.54H111.141C110.421 20.71 108.741 22.39 105.801 22.39ZM124.519 22.39C120.319 22.39 117.559 20.71 117.439 17.41L120.559 16.6C120.619 18.46 122.149 19.57 124.729 19.57C126.649 19.57 127.819 18.91 127.819 17.77C127.819 16.51 126.469 16.15 124.069 15.64C120.889 14.92 117.679 14.14 117.679 10.75C117.679 7.81 120.139 5.92 124.189 5.92C127.939 5.92 130.639 7.6 130.849 10.81L127.669 11.59C127.609 9.76 126.199 8.77 124.099 8.77C122.299 8.77 121.219 9.49 121.219 10.57C121.219 11.86 122.749 12.28 125.089 12.73C128.119 13.36 131.359 14.08 131.359 17.59C131.359 20.62 128.839 22.39 124.519 22.39ZM134.099 22V0.91H137.819V12.58C140.729 11.08 142.889 8.41 143.699 6.31H148.049C146.939 9.37 144.089 12.55 140.159 13.45V13.84C145.109 13.18 146.519 16.21 147.599 19.33L148.349 22H144.209L143.759 20.17C142.919 17.41 141.989 15.46 139.019 15.46H137.819V22H134.099Z" fill="white"/>
        </svg>
    </div>
    <ul className="hidden md:flex text-white justify-between space-x-10 items-center">
          <li className=""><Link href="#home">Home</Link></li>
          <li className=" whitespace-nowrap"><Link href="#about">About Me</Link></li>
          <li className=""><Link href="#projects">Projects</Link></li>
          <li className=" border-[2px] md:h-[30px] border-white w-[110px] md:flex items-center justify-center rounded-[5px]"><Link href="/resume_tech.pdf" target='_blank'>Resume</Link></li>
        </ul>
   </footer>
  )
}

export default Footer
