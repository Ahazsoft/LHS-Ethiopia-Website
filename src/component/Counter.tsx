"use client"
import { countupdata } from "../constant/alldata";
import CountUp from "react-countup"

function Counter() {
    return (
        <>
            <section className="content-inner-3 bg-secondary background-blend-multiply bg-img-fix" 
                // style={{ backgroundImage: `URL(${IMAGES.bg2.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right center' }}
            >
                <div className="container">
                    <div className="row align-items-sm-center">
                        <div className="col-lg-3 col-12 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="text-white font-20 m-b0 fw-medium">4K+ Case Queries</h2>
                        </div>
                        {countupdata.map((data, i) => (
                            <div className="col-lg-3 col-4 m-b30 d-flex wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                <div className="content-bx style-1 mx-auto">
                                    <span className="content-text text-white">
                                        <CountUp end={data.countup} duration={5} />                                        
                                        {data.span}
                                    </span>
                                    <h3 className="title text-white m-b0">{data.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Counter;