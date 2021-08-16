import { HashLink } from "react-router-hash-link";

import {FaRegUser} from 'react-icons/fa';
import {AiOutlineHome, AiOutlineCloseCircle, AiOutlineAppstore} from 'react-icons/ai';
import { useState } from "react";

export default function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false)
    
    const navMenu = document.getElementById('nav-menu');
    const navLink = document.querySelectorAll(".nav__link")

    const navLinkMenu = () => {
        const navMenu = document.getElementById('nav-menu');
        setIsOpen(false)
        navMenu.classList.remove('show__menu')
    }

    navLink.forEach(n=>n.addEventListener('click', navLinkMenu))

    const handleOpen = (e)=>{
        e.preventDefault()
        setIsOpen(true)
    }

    const handleClose = (e)=>{
        e.preventDefault()
        setIsOpen(false)
        navMenu.classList.remove('show__menu')
    }

    if(isOpen){
        navMenu.classList.add('show__menu')
    }

    const detectScroll = ()=>{
        const scrollUp = document.getElementById("header")
        if(window.scrollY >= 80){
            scrollUp.classList.add("headB")
        }else{
            scrollUp.classList.remove("headB")
        }
    }

    window.addEventListener('scroll', detectScroll)

    return(
        <header className="header" id="header">
            <nav className="_nav _container">
                <HashLink to="#" className="nav__logo">{props.header.logo}</HashLink>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list _grid">
                        <li className="nav__item">
                            <HashLink to="#home" className="nav__link">
                                <AiOutlineHome className="nav__icon"/> {props.header.title1}
                            </HashLink>
                        </li>
                        <li className="nav__item">
                            <HashLink to="#section1" className="nav__link">
                                <FaRegUser className="nav__icon"/> {props.header.title2}
                            </HashLink>
                        </li> 
                           
                    </ul>
                    <AiOutlineCloseCircle className="nav__close" id="nav-close" onClick={(e)=>handleClose(e)}/>
                </div>
                <div className="nav__btns">
                    <div className="nav__toggle" id="nav-toggle" onClick={(e)=>handleOpen(e)}>
                        <AiOutlineAppstore/>
                    </div>
                </div>
            </nav>
        </header>
    )
}