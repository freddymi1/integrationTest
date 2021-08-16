import React from 'react'
import { FaCheck } from 'react-icons/fa'

export default function Section5(props) {
    return (
        <div className="_container">
            <div className="section__1">
                <div className="carde">
                    <h2 className="card__title-host">{props.data.titleA}</h2>
                    <div className="icon__cards">
                        <h1 className="title__sec5"><sup className="symbolDo">$</sup>9</h1>
                    </div>
                    <div className="cart__content">
                        <div className="descr__cards">
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                {props.data.text1}
                            </div>
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                {props.data.text2}
                            </div>
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                {props.data.text3}
                            </div>
                            
                        </div>
                        <button className="btn__sect5">{props.data.textBtn}</button>
                    </div>
                </div>
                <div className="carde">
                    {/* <div className="cardBadge">
                        <FaStar className="star__icon" size="2rem"/>
                    </div> */}
                    <h2 className="card__title-host1">{props.data.titleB}</h2>
                    <div className="badge">
                        <p className="badge__text">{props.data.textBS}</p>
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
                                {props.data.text1}
                            </div>
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                {props.data.text2}
                            </div>
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                {props.data.text3}
                            </div>
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                {props.data.text4}
                            </div>
                            
                        </div>
                        <button className="btn__sect51">{props.data.textBS}</button>
                    </div>
                </div>
                <div className="carde">
                    <h2 className="card__title-host2">{props.data.titleC}</h2>
                    <div className="icon__cards2">
                        <h1 className="title__sec52"><sup className="symbolDo">$</sup>49</h1>
                    </div>
                    <div className="cart__content">
                        <div className="descr__cards">
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                {props.data.text1}
                            </div>
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                {props.data.text2}
                            </div>
                            <div className="sect5__contenu">
                                <div className="box_icon">
                                    <FaCheck className="sect5__icon"/>
                                </div>
                                {props.data.text3}
                            </div>
                            
                        </div>
                        <button className="btn__sect52">{props.data.textBS}</button>
                    </div>
                </div>
                
            </div>
            <p className="text__footer5">{props.data.textBot}</p>
        </div>
    )
}
