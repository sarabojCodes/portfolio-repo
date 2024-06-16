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

            <VerticalTimeline>
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                visibility: "visible",
                                background: "#f3f4f6",
                                boxShadow: "none",
                                border: "1px solid rgba(0,0,0,0.05)",
                                textAlign: "center",
                                padding: "1.3rem 2rem"
                            }}
                            contentArrowStyle={{
                                visibility: "visible",
                                borderRight: "0.4rem solid #9ca3af"

                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                visibility: "visible",
                                background: "white",
                                fontSize: "1.5rem"


                            }}
                        >
                            <h3 className='font-semibold capitalize' >{item.title}</h3>
                            <p className='font-normal !mt-0'>{item.location}</p>
                            <p className='!mt-1 !font-normal text-gray-700'>{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    )
}

export default Experience