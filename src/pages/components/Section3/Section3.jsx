import React from 'react'

export default function Section3(props) {

    return (
        <div className="container" style={{height:"auto"}}>
            <div className="section3">
                <div className="block__quote">
                    <img src="img/quote.png" alt="" />
                    <p className="quote__text">{props.data.textQuote}</p>
                    <div>
                        <h4 className="titleSec3">{props.data.nameOth}</h4>
                        <p className="textSec3">L{props.data.legende}</p>
                    </div>
                </div>

                <div className="bg">
                    <img src="img/Composed-layer-2.png" alt="" />
                </div>
            </div>
        </div>
    )
}
