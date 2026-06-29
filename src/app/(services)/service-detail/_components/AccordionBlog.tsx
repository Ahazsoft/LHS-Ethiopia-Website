"use client"
import { Accordion } from "react-bootstrap"
import { accordiondata } from "@/constant/alldata";

const AccordionBlog = () =>{
    return(
        <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
            {accordiondata.map((data, i) => (
                <Accordion.Item eventKey={data.key} key={i} className="wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.7s">
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>
                        {data.answer}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}
export default AccordionBlog;