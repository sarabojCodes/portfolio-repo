"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
// import resume from '@/public/CV.pdf'
const Intro = () => {
    return (
        <section id='home' className='mb-2 max-w-[50rem] text-center  sm:mb-0  scroll-mt-[100rem]'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2
                        }}
                    >
                        <Image src={"https://media.istockphoto.com/id/1393872009/photo/african-american-man-with-african-hairstyle-standing-over-isolated-pink-background.jpg?s=1024x1024&w=is&k=20&c=5jRHEBBh0dF4s5rgqEo3e09eZktMZc_EOiv9IoZYszg="} alt='Saraboj portrait'
                            width={"192"}
                            height={"192"}
                            quality={"95"}
                            priority={true}
                            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                        />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}
                        className='text-4xl absolute bottom-0 right-0'>
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.h1
                className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Saraboj.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">3 years</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>.
            </motion.h1>
            <motion.div className='flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium'

                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1
                }}
            >
                <Link href={"#contact"}
                    className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
                    outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition
                     group
                    '
                >
                    Contact me here
                    <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                </Link>

                <a className='bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition
                     group cursor-pointer  border border-black/10' href='/CV.pdf' download>
                    Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
                </a>
                <a className="bg-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition
                     group cursor-pointer  border border-black/10">
                    <BsLinkedin />
                </a>
                <a className="bg-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition
                     group cursor-pointer  border border-black/10 text-[1.35rem]">
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}

export default Intro