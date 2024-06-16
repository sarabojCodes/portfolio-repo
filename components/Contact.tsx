'use client'
import React from 'react'
import SectionHeading from './SectionHeading'
import { BiPaperPlane } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hookes'
import { sendEmail } from '@/actions/sendEmail'

const Contact = () => {
    const { ref } = useSectionInView({ sectionName: "Contact", threshold: 0.5 })

    
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1
            }}

            transition={{
                duration: 1
            }}

            viewport={{ once: true }}

            ref={ref}
            id='contact' className='mb-20 sm:mb-28  w-[min(100%,38rem)] text-center '>
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 -mt-6'>Please contact me directly at  {" "}
                <a className='underline' href="mailto:noemail@gmail.com">
                    Saraboj@gmail.com
                </a> {" "}
                or through this form
            </p>

            <form className='mt-10 flex flex-col'
                action={async formData => {
                    console.log(formData.get("senderEmail"))
                    await sendEmail(formData)
                }}
            >

                <input
                    name='senderEmail'
                    required maxLength={500} type="email" className='h-14 rounded-lg borderBlack px-4' placeholder='Your email' />
                <textarea

                    required maxLength={500} name="message" className='h-52 my-3 rounded-lg borderBlack p-4' placeholder="Your message"></textarea>
                <button type='submit' className='group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2' >
                    Submit <BiPaperPlane className='text-lg opacity-70  transition-all
                     group-hover:translate-x-1
                     group-hover:-translate-y-1
                    
                    ' />
                </button>

            </form>
        </motion.section>
    )
}

export default Contact