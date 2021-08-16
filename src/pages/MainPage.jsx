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

import db from '../firebase'
import { useEffect } from 'react'
import { useState } from 'react'


export default function MainPage() {
    const [header , setHeader] = useState([]);
    const [homepage , setHome] = useState([]);
    const [homepage1 , setHome1] = useState([]);
    const [homepage2 , setHome2] = useState([]);
    const [section1 , setSection1] = useState([]);
    const [section2 , setSection2] = useState([]);
    const [section3 , setSection3] = useState([]);
    const [section4 , setSection4] = useState([]);
    const [section5 , setSection5] = useState([]);
    const [section6 , setSection6] = useState([]);
    const [section7 , setSection7] = useState([]);
   
    const detectScroll = ()=>{
        const scrollUp = document.getElementById("scroll-up")
        if(window.scrollY >= 560){
            scrollUp.classList.add("show__scrollUp")
        }else{
            scrollUp.classList.remove("show__scrollUp")
        }
    }

    window.addEventListener('scroll', detectScroll)

    useEffect(()=>{
        Fetchdata()
        FetchdataSection1()
        FetchdataSection2()
        FetchdataSection3()
        FetchdataSection4()
        FetchdataSection5()
        FetchdataSection6()
        FetchdataSection7()
    },[])

    // FETCHING HOMEPAGE DATA
    const Fetchdata = ()=>{
        db.collection("header").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setHeader(data);
                  
            });
        })
        db.collection("homepage").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setHome(data);
                  
            });
        })
        db.collection("homeSection").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setHome1(data);
                  
            });
        })
        db.collection("listHome").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setHome2(data);
                  
            });
        })
    }

    // FETCHING SECTION1
    const FetchdataSection1 = ()=>{
        db.collection("section1").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setSection1(data);
                  
            });
        })
    }

    // FETCHING SECTION2
    const FetchdataSection2 = ()=>{
        db.collection("sec2").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setSection2(data);
                  
            });
        })
    }

    // FETCHING SECTION3
    const FetchdataSection3 = ()=>{
        db.collection("sec3").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setSection3(data);
                  
            });
        })
    }

    // FETCHING SECTION4
    const FetchdataSection4 = ()=>{
        db.collection("sec4").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setSection4(data);
                  
            });
        })
    }

    // FETCHING SECTION5
    const FetchdataSection5 = ()=>{
        db.collection("sec5").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setSection5(data);
                  
            });
        })
    }


    // FETCHING SECTION6
    const FetchdataSection6 = ()=>{
        db.collection("sec6").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setSection6(data);
                  
            });
        })
    }

    // FETCHING SECTION6
    const FetchdataSection7 = ()=>{
        db.collection("footer").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setSection7(data);
                  
            });
        })
    }

    
    return (
        <div>
            <NavBar header={header}/>
            <main className="main">
                <section className="home sectionHome" id="home">
                    <Homepage data={homepage} homepage1={homepage1} homepage2={homepage2}/>
                </section>
                <section className="section1 section" id="section1">
                    <h2 className="section__title">{section1.bigTitle}</h2>
                    <span className="section__subtitle">{section1.subtitle}</span>
                    <Section1  data={section1}/>
                </section>
                <section className="section2 section" id="section2">
                    <h2 className="section__title">{section2.bigtitle}</h2>
                    <span className="section__subtitle">{section2.subtitle}</span>
                    <Section2 data={section2}/>
                </section>
                <section className="section3 section" id="section3">
                    <Section3 data={section3}/>
                </section>
                <section className="section4 section" id="section4">
                    <Section4 data={section4}/>
                </section>
                <section className="section5 section" id="section5">
                    <div className="imgBg">
                        <img src="img/bg-image4.png" alt="" />
                    </div>
                    <h2 className="section__title">{section5.bigTitle}</h2>
                    <span className="section__subtitle">{section5.subtitle}</span>
                    <Section5 data={section5}/>
                </section>
                <section className="section6 section" id="section6">
                    <Section6 data={section6}/>
                </section>
                <section className="section7 section" id="section6">
                    <Section7 data={section7}/>
                </section>
            </main>
            <footer></footer>
            <a href="#home" className="scrollup" id="scroll-up">
                <FaArrowUp className="scrollup__icon"/>
            </a>
        </div>
    )
}
