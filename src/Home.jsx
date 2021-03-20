import React from 'react'
import web from '../src/images/img.svg'

const Home = () => {
    return (
        <>
            <section className="header d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row">
                          <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 order-2 dheader d-flex justify-content-center flex-column ">
                            <h2>Grow your business <strong className="brandName">Web Development</strong></h2>
                            <h4>We are the team of developers</h4>
                            <div className="mt-3">
                                <a href="" className="btnStyle">Hire Me</a>
                            </div>
                          </div>
                          <div className="col-md-6 order-1 order-lg-2 headerImg">
                            <img src={web} className="img-fluid himg"/>
                          </div>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;