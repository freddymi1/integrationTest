import React from 'react'
import { IoMdCheckboxOutline } from 'react-icons/io'
import {BiMouse} from 'react-icons/bi'
import {TiArrowDown} from 'react-icons/ti'
import { HashLink } from 'react-router-hash-link'


export default function Homepage() {
    return (
        <div className="home__container ">
            <div className=" _grid">
                <div className="home__content _grid">
                    <div className="home__img">
                        <img src="img/banner-illustration.svg" alt="" />
                    </div>

                    <div className="home__data">
                        <h3 className="home__subtitle">hello, we are fincorp</h3>
                        <h1 className="home__title">Insurance<br/> made easy.</h1>
                        <HashLink to="#contact" className="button button--flex">
                            Get your free Quote
                        </HashLink>
                    </div>
                </div>
                <div className="home__scroll">
                    <HashLink to="#about" className="home__scroll-button button--flex">
                        <BiMouse className="home__scroll-mouse"/>
                        <span className="home__scroll-name">Allez vers le bas</span>
                        <TiArrowDown className="home__scroll-arrow"/>
                    </HashLink>
                </div>
            </div>
            <div className="home__contenu">
                <h2 className="home__title-contenu">A new take on insurance</h2>
                <h3 className="home__subtitle-contenu">Great for individuals and business</h3>

                <div className="home__bottom">
                    <div className="home__image">
                        <img src="img/health-family-1.png" alt="" />
                    </div>
                    <div className="home__bottom-contenu">
                        <h3 className="home__section-title">Monotonectally deploy seamless data and resource maximizing systems. </h3>
                        <h4 className="subtitle__home">
                            Great for individuals and small families up to 4 members.
                        </h4>
                        <p className="home__text">
                        A strong, up-to-date, employee benefits health insurance program is vital for attracting and retaining good employees. It takes diligence, creativity and attention to detail to ensure you are getting the best “bang for your buck” each and every year.
                        </p>
                        <div className="item-list">
                            <div className="items">
                                <div className="box__icon">
                                    <IoMdCheckboxOutline className="icon_item"/>
                                </div>
                                <div className="item-title">
                                    <h2 className="title__item">
                                        Comprehensive Insurance
                                    </h2>
                                    <h4 className="text-description">
                                    Dynamically repurpose e-business users rather than granular products.
                                    </h4>
                                </div>
                            </div>
                            <div className="items">
                                <div className="box__icon">
                                    <IoMdCheckboxOutline className="icon_item"/>
                                </div>
                                <div className="item-title">
                                    <h2 className="title__item">
                                        Support is just a call away
                                    </h2>
                                    <h4 className="text-description">
                                        Rapidiously customize value-added platforms compliant action items.
                                    </h4>
                                </div>
                            </div>
                            <div className="items">
                                <div className="box__icon">
                                    <IoMdCheckboxOutline className="icon_item"/>
                                </div>
                                <div className="item-title">
                                    <h2 className="title__item">
                                        Say goodbye to paperwork.
                                    </h2>
                                    <h4 className="text-description">
                                        Globally deliver economically sound communities relationships.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
