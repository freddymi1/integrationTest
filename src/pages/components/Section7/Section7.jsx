import React from 'react'

export default function Section7(props) {
    return (
        <div className="_container">
            <div className="section__1">
                <div className="cardss">
                    <div className="cart__content">
                        <h2 className="card__title">{props.data.title1}</h2>
                        <ul className="descr__cardsa">
                            <li className="sect5__contenu">
                                {props.data.lot}
                            </li>

                            <li className="sect5__contenu">
                                {props.data.ville}
                            </li><br />

                            <li className="sect5__contenu">
                                {props.data.fone}
                            </li><br />
                            
                            <li className="sect5__contenu">
                                {props.data.email}
                            </li><br />
                        </ul>
                    </div>
                </div>
                <div className="cardss">
                    <div className="cart__content">
                        <h2 className="card__title">{props.data.title2}</h2>
                        <ul className="descr__cardsa">
                            <li className="sect5__contenu">
                                {props.data.tw}                            
                            </li><br />
                            <li className="sect5__contenu">
                                {props.data.fb}
                            </li><br />
                            <li className="sect5__contenu">
                                {props.data.in}
                            </li><br />
                            
                            <li className="sect5__contenu">
                                {props.data.inst}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cardss">
                    <div className="cart__content">
                        <h2 className="card__title">{props.data.title3}</h2>
                        <p className="descr__card">
                        {props.data.textAbout}
                        </p>
                    </div>
                </div>
                
            </div>
            <div className="copy">
                {props.data.copyR}
            </div>
        </div>
    )
}
