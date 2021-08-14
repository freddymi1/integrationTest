import React from 'react'
import Comp1 from '../Section6/components/Comp1'
import Comp2 from '../Section6/components/Comp2'
import Comp3 from '../Section6/components/Comp3'
import Comp4 from '../Section6/components/Comp4'

export default function Section6() {
    return (
        <div className="_container ">
            <div className="imgBg1">
                <img src="img/family-illustration-1.png" alt="" />
            </div>
            <div className="sec6__content">
                <div>
                    {/* Skills 1 */}
                        <Comp1/>
                    {/* Skills 2 */}
                        <Comp2/>

                </div>
                <div>
                    {/* Skills 3 */}
                        <Comp3/>
                    {/* Skills 4 */}
                        <Comp4/>
                </div>
            </div>
            <div className="section__6">
                <div className="icon_section">
                    <img src="img/shield-2.png" alt="" />
                </div>
                <div className="section6__content">
                    <div>
                        <h2 className="sect__title">
                            Insurance made easy.
                        </h2>
                        <p className="sect-desc">
                        We offer no questions asked refund policy for 14 days from the policy date.
                        </p>
                    </div>
                    <button className="button__sec4">Get your free Quote</button>
                   
                </div>
                
            </div>
        </div>
    )
}
