import React from 'react'
import mypic from '../src/images/ali2.jpg'

const About = () => {
    return (
        <>
            <section className="d-flex about align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 order-lg-1 order-2">
                                    <div className="picdiv">
                                        <img src={mypic} className="mypic" />
                                    </div>
                                </div>
                                <div className="col-md-6 order-lg-2 order-1">
                                    <h2 className="myname">Ali Raza</h2>
                                    <h6>A professional front end web developer .
            My expertise lies in HTML CSS , BOOTSTRAP and JAVASCRIPT </h6>
                                <a className="contactbtn">
                                Contact Me
                                </a>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;