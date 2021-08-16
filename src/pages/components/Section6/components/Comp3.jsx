import React, { useRef, useState } from 'react'
import { MdKeyboardArrowRight} from 'react-icons/md'

export default function Comp3(props) {
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
                        <h1 className="skills__title">{props.data.titleC}</h1>
                        {/* <span className="skills__subtitle">Environ 10 mois</span> */}
                    </div>
                    <MdKeyboardArrowRight className={`skills__arrow ${rotate}`}/>
                </div>
                <div ref={content} style={{maxHeight:`${height}`}} className="skills__list _grid accordion_content">
                    <p className="textComp">
                    {props.data.text}
                    </p>
                    
                </div>
            </div> 
        </div>
    )
}
