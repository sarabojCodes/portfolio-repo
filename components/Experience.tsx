'use client'
import React from 'react'
import SectionHeading from './SectionHeading'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hookes';

const Experience = () => {
    const { ref } = useSectionInView({ sectionName: "Experience", threshold: 0.5 })
    return (
        <section ref={ref} id='experience' className='mb-28 max-w-[45rem] text-center leading-8 sm:mb40 scroll-mt-28'>
            <SectionHeading>My Experience</SectionHeading>
            <div className='sm:w-[40rem] flex gap-3 flex-col'>
                {
                    experiencesData.map((items, index) => (
                        <div
                         key={index}
                            className='p-3 w-full border border-gray/[0.8] rounded-md'
                        >
                            <h3 className='text-xl font-medium'>{items.title}</h3>
                            <p className='text-gray-800' >{items.location}</p>
                            <p className='text-sm italic text-gray-500'>{items.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Experience