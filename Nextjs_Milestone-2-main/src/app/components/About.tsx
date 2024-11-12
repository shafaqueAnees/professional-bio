import Link from 'next/link';
import React from 'react';
import { IoArrowBackCircle, IoArrowBackOutline } from "react-icons/io5";
import { Oldenburg, Caveat, Comme } from "next/font/google"
import { FaGithubSquare, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import Image from 'next/image';

const fontStyle = Caveat({ weight: '400', subsets: ['latin'] })
const fontHeading = Oldenburg({ weight: '400', subsets: ['latin'] })
const btnFont = Comme({ weight: '500', subsets: ['latin'] })


const About = () => {
    return (
        <div className=' w-screen flex  justify-center '>
            <div className='w-[85%]  flex flex-col items-center justify-center gap-5'>
                <Link href={"/"} className='text-blue-300 hidden sm:block text-4xl place-self-start mt-7 rounded-full transition-colors duration-300 hover:bg-gray-900  ' ><IoArrowBackOutline className='_text-Shadow' /></Link>
                <Link href={"/"} className='text-blue-300 sm:hidden block text-3xl place-self-start mt-7' ><IoArrowBackCircle className='_text-Shadow ' /></Link>
                <h1 className='text-center _text-Shadow  text-2xl sm:hidden'>ABOUT ME</h1>
                <div className='flex flex-col gap-8 items-center sm:flex-row sm:justify-center md:mt-5 lg:mt-10'>
                    <div className='sm:1/2'>
                        <Image src={'/dp.jpeg'} alt='' width={300} height={300} className='rounded-full sm:rounded-3xl lg:w-[350px]'></Image>
                    </div>
                    <div className={`${fontStyle.className} flex flex-col text-sm gap-1 sm:text-xs md:text-sm lg:text-lg text-justify sm:w-80 lg:w-1/2`}>
                        <h1 className={`${fontHeading.className} shadow-sm shadow-red-800 text-center   hidden sm:block text-3xl `}>ABOUT ME</h1>
                        <p className='lg:flex lg:flex-col mt-5'><span className={` lg:text-lg`}>Hello, I’m</span> <span className={`_text-Shadow  lg:text-4xl`}>Shafaque Anees</span> a Front-End Developer with a true passion for creating beautiful and functional websites. I specialize in HTML, CSS, JavaScript, TypeScript, Next.js, and Tailwind CSS, and I love bringing designs to life with clean, responsive code that works seamlessly on all devices.</p>
                        <p >Web development isn’t just my profession; it’s something I genuinely enjoy. I’m always excited to explore new tools, learn new techniques, and take on challenges that push my skills further. Every project is an opportunity for me to combine creativity with technical expertise, and I’m committed to delivering quality results that make a difference.</p>
                        <Link href='/contact' className={`${btnFont.className} place-self-start bg-blue-600 active:scale-95 hover:bg-blue-700 py-1 px-4 lg:py-2 lg:px-6 rounded-md text-black text-xs mt-2 lg:mt-4  transition-all`}>CONTACT</Link>
                    </div>
                    <div className='bg-[rgba(208,214,220,0.2)] flex sm:hidden text-2xl gap-3 py-1.5 px-4 rounded-full mb-7'>
                        <Link href="https://www.linkedin.com/in/shafaq-%D8%B2%D9%88%D8%AC%DB%81-%D8%B2%D9%88%DB%81%DB%8C%D8%A8-%D8%B5%D8%AF%DB%8C%D9%82%DB%8C-65490011b/" target='_blank'><FaLinkedinIn className='text-[#0077B5] p-1 bg-black rounded hover:scale-95' title='LinkedIn' /></Link>
                        <Link href="https://github.com/shafaqueAnees" target='_blank'><FaGithubSquare className=' rounded scale-95 text-[#d2c8c8]' title='GitHub' /></Link>
                        <Link href="https://shafqaness@gmail.com" target='_blank'><SiGmail className={`rounded scale-95 `} title='Gmail' /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

