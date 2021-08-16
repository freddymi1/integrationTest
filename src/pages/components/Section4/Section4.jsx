import React from 'react'

export default function Section4(props) {
    return (
        <div className="_container _grid">
            <div className="section__4">
                <div className="icon_section">
                    <img src="img/shield-2.png" alt="" />
                </div>
                <div className="section4__content">
                    <div>
                        <h2 className="sect__title">
                            {props.data.title}
                        </h2>
                        <p className="sect-desc">
                            {props.data.text}
                        </p>
                    </div>
                    <button className="button__sec4">{props.data.textBtn}</button>
                   
                </div>
                
            </div>
        </div>
    )
}
