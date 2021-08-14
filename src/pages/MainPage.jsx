import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import Homepage from './components/Home/Homepage'
import NavBar from './Navbar/Navbar'
import Section1 from './components/Section1/Section1'
import Section3 from './components/Section3/Section3'
import Section2 from './components/Section2/Section2'
import Section4 from './components/Section4/Section4'
import Section5 from './components/Section5/Section5'
import Section6 from './components/Section6/Section6'
import Section7 from './components/Section7/Section7'
export default function MainPage() {
   
    const detectScroll = ()=>{
        const scrollUp = document.getElementById("scroll-up")
        if(window.scrollY >= 560){
            scrollUp.classList.add("show__scrollUp")
        }else{
            scrollUp.classList.remove("show__scrollUp")
        }
    }

    window.addEventListener('scroll', detectScroll)
    return (
        <div>
            <NavBar/>
            <main className="main">
                <section className="home sectionHome" id="home">
                    <Homepage/>
                </section>
                <section className="section1 section" id="section1">
                    <h2 className="section__title">Choose your Insurance</h2>
                    <span className="section__subtitle">Keep Your Life Smile, Safe, and Wealthy</span>
                    <Section1/>
                </section>
                <section className="section2 section" id="section2">
                    <h2 className="section__title">Simplified Claims</h2>
                    <span className="section__subtitle">Easy as One, Two, Three</span>
                    <Section2 />
                </section>
                <section className="section3 section" id="section3">
                    <Section3/>
                </section>
                <section className="section4 section" id="section4">
                    <Section4/>
                </section>
                <section className="section5 section" id="section5">
                    <div className="imgBg">
                        <img src="img/bg-image4.png" alt="" />
                    </div>
                    <h2 className="section__title">Honest Pricing</h2>
                    <span className="section__subtitle">imple & honest pricing. No hidden fees.</span>
                    <Section5/>
                </section>
                <section className="section6 section" id="section6">
                    <Section6/>
                </section>
                <section className="section7 section" id="section6">
                    <Section7/>
                </section>
            </main>
            <footer></footer>
            <a href="#home" className="scrollup" id="scroll-up">
                <FaArrowUp className="scrollup__icon"/>
            </a>
        </div>
    )
}
