import React, { useRef, useState } from 'react'
import { MdKeyboardArrowRight} from 'react-icons/md'

export default function Comp2() {
    const [active, setActive] = useState("")
    const [height, setHeight] = useState("0px")
    const [rotate, setRotate] = useState("accordion_icon")
    const content = useRef();

    function toggleAccordion(){
        setActive(active === "" ? "active" : "")
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
        setRotate(active === "active" ? "accordion_icon" : "accordion_icon rotate")
    }
    return (
        <div>
            <div className="skills_content">
                <div className="skills__header"  onClick={toggleAccordion}>
                    <div>
                        <h1 className="skills__title">Which are the network hospitals in your vicinity?</h1>
                        {/* <span className="skills__subtitle">Environ 5 mois</span> */}
                    </div>
                    <MdKeyboardArrowRight className={`skills__arrow ${rotate}`}/>
                </div>
                <div ref={content} style={{maxHeight:`${height}`}} className="skills__list _grid accordion_content">
                    <p className="textComp">
                        A pre-authorization form is required in case of cashless claims which are to be submitted to the TPA. Other documents might also be required and you should have the knowledge of the required documents.
                    </p>
                    
                </div>
            </div>
        </div>
    )
}
