import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import readyImg from '../../../../assets/ready.png'
import { settings } from '../../../../config/helper'
import DateCard from '../../components/DateCard'
import StartEventCard from '../../components/StartEventCard'
export default function ReadyEvents() {
    return (
        <>
            <div className="container-fluid main-readyEvent">

                {/* <Row className='ready-togo'>

                    <Col lg={4} md={2}>
                        <h1> READY TO GO! </h1>
                        <p>
                            Don't miss these events which are starting very soon!
                        </p>
                    </Col>
                    <Col lg={8} md={12}>
                        <div className="start-event-card">
                            <StartEventCard />
                        </div>
                    </Col>
                </Row> */}
                {/* <div className="col-lg-4 col-12 ready-togo">
                        
                        <p className="dont">
                            Don't miss these events which are starting very soon!
                        </p>
                        <button className="view-but">VIEW ALL</button>
                    </div> */}

            </div>
            <div className="container-fluid power-up" style={{ overflowX: "hidden" }}>
                <p data-aos="fade-right"> POWER UP! </p>
            </div>
        </>
    )
}
