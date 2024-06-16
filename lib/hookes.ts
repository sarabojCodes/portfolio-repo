import { useAcitveSectionContext } from "@/context/active-section-context"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import type { SectionName } from "./types"


type useSelectionInViewProps = {
    sectionName:SectionName,
    threshold:number
}

export function useSectionInView({
    sectionName,
    threshold
}:useSelectionInViewProps) {
    const { ref, inView } = useInView({
        threshold: 0.5
    })
    const { setActiveSection, timeOfLastClick } = useAcitveSectionContext()

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName)
        }
    }, [inView, setActiveSection])

    return { ref }
}