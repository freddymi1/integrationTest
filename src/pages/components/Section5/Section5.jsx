import React from 'react'
import { FaCheck } from 'react-icons/fa'

export default function Section5() {
    return (
        <div className="_container">
            <div className="section__1">
                <div className="carde">
                    <h2 className="card__title-host">BASIC</h2>
                    <div className="icon__cards">
                        <h1 className="title__sec5"><sup className="symbolDo">$</sup>9</h1>
                    </div>
                    <div className="cart__content">
                        <div className="descr__cards">
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                Rapidiously strategize value
                            </div>
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                Progressively visualize leadership
                            </div>
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                Equity invested supply chains.
                            </div>
                            
                        </div>
                        <button className="btn__sect5">Choose plan</button>
                    </div>
                </div>
                <div className="carde">
                    {/* <div className="cardBadge">
                        <FaStar className="star__icon" size="2rem"/>
                    </div> */}
                    <h2 className="card__title-host1">Professional</h2>
                    <div className="badge">
                        <p className="badge__text">SAVE 20%</p>
                    </div>
                    <div className="icon__cards1">
                        <h1 className="title__sec51"><sup className="symbolDo">$</sup>19</h1>
                    </div>
                    <div className="cart__content">
                        <div className="descr__cards">
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                Rapidiously strategize value
                            </div>
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                Progressively visualize leadership
                            </div>
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                Equity invested supply chains.
                            </div>
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                Proactively leverage
                            </div>
                            
                        </div>
                        <button className="btn__sect51">Choose plan</button>
                    </div>
                </div>
                <div className="carde">
                    <h2 className="card__title-host2">PREMIUM</h2>
                    <div className="icon__cards2">
                        <h1 className="title__sec52"><sup className="symbolDo">$</sup>49</h1>
                    </div>
                    <div className="cart__content">
                        <div className="descr__cards">
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                Rapidiously strategize value
                            </div>
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                Progressively visualize leadership
                            </div>
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                Equity invested supply chains.
                            </div>
                            
                        </div>
                        <button className="btn__sect52">Choose plan</button>
                    </div>
                </div>
                
            </div>
            <p className="text__footer5">*Prices shown per month if paid annually</p>
        </div>
    )
}
