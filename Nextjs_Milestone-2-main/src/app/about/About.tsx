import Link from 'next/link';
import React from 'react';
import { IoArrowBackCircle, IoArrowBackOutline } from "react-icons/io5";
import { Oldenburg, Caveat, Comme } from "next/font/google";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import Image from 'next/image';

const fontStyle = Caveat({ weight: '400', subsets: ['latin'] });
const fontHeading = Oldenburg({ weight: '400', subsets: ['latin'] });
const btnFont = Comme({ weight: '500', subsets: ['latin'] });

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-content'>
                <Link href={"/"} className='back-link-sm hidden-sm'><IoArrowBackOutline className='icon-shadow' /></Link>
                <Link href={"/"} className='back-link hidden-lg'><IoArrowBackCircle className='icon-shadow' /></Link>
                <h1 className='title hidden-lg'>ABOUT ME</h1>
                <div className='about-flex-container'>
                    <div className='image-container'>
                        <Image src={'/dp.jpeg'} alt='' width={300} height={300} className='about-image'></Image>
                    </div>
                    <div className={`about-text ${fontStyle.className}`}>
                        <h1 className={`heading ${fontHeading.className}`}>ABOUT ME</h1>
                        <p className='description'>
                            <span className='description-greeting'>Hello, I’m</span> 
                            <span className='name'>Shafaque Anees</span> 
                            a Front-End Developer with a true passion for creating beautiful and functional websites. I specialize in HTML, CSS, JavaScript, TypeScript, Next.js, and Tailwind CSS, and I love bringing designs to life with clean, responsive code that works seamlessly on all devices.
                        </p>
                        <p className='description'>Web development isn’t just my profession; it’s something I genuinely enjoy. I’m always excited to explore new tools, learn new techniques, and take on challenges that push my skills further. Every project is an opportunity for me to combine creativity with technical expertise, and I’m committed to delivering quality results that make a difference.</p>
                        <Link href='/contact' className={`contact-button ${btnFont.className}`}>CONTACT</Link>
                    </div>
                    <div className='social-links hidden-lg'>
                        <Link href="https://www.linkedin.com/in/shafaq" target='_blank'><FaLinkedinIn className='linkedin-icon' title='LinkedIn' /></Link>
                        <Link href="https://github.com/shafaqueAnees" target='_blank'><FaGithubSquare className='github-icon' title='GitHub' /></Link>
                        <Link href="https://shafqaness@gmail.com" target='_blank'><SiGmail className='gmail-icon' title='Gmail' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
