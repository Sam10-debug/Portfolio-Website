"use client"
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";

interface buttonProps {
    text: string;
    className:string;
    href:string;
  }
  

const Button:React.FC<buttonProps> = ({text,className,href}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;

    // Define the hover animation
    const hoverAnimation = gsap.to(button, {
      scale: 1.05, // Increase the scale on hover
     
      duration: 0.3,
      ease: 'power2.out',
    });

    // Define the unhover animation (reverse of hover animation)
    const unhoverAnimation = gsap.to(button, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.in',
    });

    // Create a timeline for the animations
    const tl = gsap.timeline({ paused: true });
    tl.add(hoverAnimation);
    tl.add(unhoverAnimation);

    // Add mouse enter and leave event listeners
    button?.addEventListener('mouseenter', () => {
      tl.play();
    });

    button?.addEventListener('mouseleave', () => {
      tl.reverse();
    });

    // Cleanup: Remove event listeners when the component unmounts
    return () => {
      button?.removeEventListener('mouseenter', () => {
        tl.play();
      });

      button?.removeEventListener('mouseleave', () => {
        tl.reverse();
      });
    };
  }, []);
  return (
    <Link target='_blank' href={`${href}`} className={`${className}`}>
      <button ref={buttonRef}  >
        {text}
    </button>
    </Link>
  )
}

export default Button

// <Button className='lg:w-[176px] md:w-[120px] lg:h-[45px] h-[45px] hover:text-gradient rounded-sm border-[1px] border-gradient text-white font-semibold flex justify-center items-center' text='Projects' href='#projects' />
