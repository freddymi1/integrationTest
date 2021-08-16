/* eslint-disable array-callback-return */
import React from 'react'

export default function Section1(props) {
    return (
        <div className="_container">
            <div className="section__1">
                
                <div className="card">
                    <div className="icon__card">
                        <img src="img/home insurance-1.png" alt="" />
                    </div>
                    <div className="cart__content">
                        <h2 className="card__title">{props.data.title1}</h2>
                        <p className="descr__card">
                            {props.data.text}
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon__card1">
                        <img src="img/car-insurance-1.png" alt="" />
                    </div>
                    <div className="cart__content">
                        <h2 className="card__title">{props.data.title2}</h2>
                        <p className="descr__card">
                            {props.data.text}
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon__card2">
                        <img src="img/life-insurance-1.png" alt="" />
                    </div>
                    <div className="cart__content">
                        <h2 className="card__title">{props.data.title3}</h2>
                        <p className="descr__card">
                            {props.data.text}
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon__card3">
                        <img src="img/business-insurance-1.png" alt="" />
                    </div>
                    <div className="cart__content">
                        <h2 className="card__title">{props.data.title4}</h2>
                        <p className="descr__card">
                            {props.data.text}
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon__card4">
                        <img src="img/travel-insurance-1.png" alt="" />
                    </div>
                    <div className="cart__content">
                        <h2 className="card__title">{props.data.title5}</h2>
                        <p className="descr__card">
                            {props.data.text}
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon__card5">
                        <img src="img/other-insurance-1.png" alt="" />
                    </div>
                    <div className="cart__content">
                        <h2 className="card__title">{props.data.title6}</h2>
                        <p className="descr__card">
                            {props.data.text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
