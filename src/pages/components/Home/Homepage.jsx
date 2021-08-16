import React from 'react'
import { IoMdCheckboxOutline } from 'react-icons/io'
import {BiMouse} from 'react-icons/bi'
import {TiArrowDown} from 'react-icons/ti'
import { HashLink } from 'react-router-hash-link'


export default function Homepage(props) {
    return (
        <div className="home__container " id="home">
            <div className=" _grid">
                <div className="home__content _grid">
                    <div className="home__img">
                        <img src="img/banner-illustration.svg" alt="" />
                    </div>

                    <div className="home__data">
                        <h3 className="home__subtitle">{props.data.title}</h3>
                        <h1 className="home__title">{props.data.title1}</h1>
                        <h1 className="home__title">{props.data.title11}</h1>
                        <button className="button button--flex">
                        {props.data.textBtn}
                        </button>
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
                <h2 className="home__title-contenu">{props.homepage1.title}</h2>
                <h3 className="home__subtitle-contenu">{props.homepage1.subtitle}</h3>

                <div className="home__bottom">
                    <div className="home__image">
                        <img src="img/health-family-1.png" alt="" />
                    </div>
                    <div className="home__bottom-contenu">
                        <h3 className="home__section-title">{props.homepage1.title1}</h3>
                        <h4 className="subtitle__home">
                        {props.homepage1.subtitle1}
                        </h4>
                        <p className="home__text">
                        {props.homepage1.text}
                        </p>
                        <div className="item-list">
                            <div className="items">
                                <div className="box__icon">
                                    <IoMdCheckboxOutline className="icon_item"/>
                                </div>
                                <div className="item-title">
                                    <h2 className="title__item">
                                        {props.homepage2.title}
                                    </h2>
                                    <h4 className="text-description">
                                        {props.homepage2.text}
                                    </h4>
                                </div>
                            </div>
                            <div className="items">
                                <div className="box__icon">
                                    <IoMdCheckboxOutline className="icon_item"/>
                                </div>
                                <div className="item-title">
                                    <h2 className="title__item">
                                        {props.homepage2.title1}
                                    </h2>
                                    <h4 className="text-description">
                                        {props.homepage2.text1}
                                    </h4>
                                </div>
                            </div>
                            <div className="items">
                                <div className="box__icon">
                                    <IoMdCheckboxOutline className="icon_item"/>
                                </div>
                                <div className="item-title">
                                    <h2 className="title__item">
                                        {props.homepage2.title2}
                                    </h2>
                                    <h4 className="text-description">
                                        {props.homepage2.text2}
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
