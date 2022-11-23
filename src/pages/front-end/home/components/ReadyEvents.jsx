import React, { useEffect, useState } from "react";
import { MdDateRange, MdLocationPin } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { BsChatSquare } from "react-icons/bs";
import { FcNext } from "react-icons/fc";
import { AiFillDollarCircle } from "react-icons/ai";
import { Col, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import readyImg from '../../../../assets/ready.png'
import { settings, settings3 } from '../../../../config/helper'
import DateCard from '../../components/DateCard'
import StartEventCard from '../../components/StartEventCard'
import CustomButton from "../../../../components/form/CustomButton";
import vanueImg from '../../../../assets/Rectangle 11.jpg';
import dateicon from '../../../../assets/datewhiteicon.svg';
import currncyicon from '../../../../assets/currnecywhiteicon.svg';

export default function ReadyEvents() {
    return (
        <>
            <div className="container-fluid main-readyEvent">
                <Row >
                    <div className="col-lg-4 col-md-4 col-4 p-0 d-flex align-items-center  ">
                        <Row className="justify-content-end">
                            <Col lg={9} className=" d-none d-md-block d-lg-block">
                                <h2> READY TO GO! </h2>
                            </Col>
                            <Col lg={9} className="align-items-start d-none d-md-block d-lg-block">
                                <p>
                                    Don't miss these events which are <br /> starting very soon!
                                </p>
                                <CustomButton text="view all" />
                            </Col>
                        </Row>
                    </div>
                    <div className="col-lg-8 col-md-8 col-8 p-0 ready-card   d-none d-md-block d-lg-block ">
                        <Slider {...settings3}>
                            {
                                [1, 2, 3, 4, 5, 6].map(item => (
                                    <StartEventCard />
                                ))
                            }
                        </Slider>
                    </div>

                </Row>
                <div className="row justify-content-center d-sm-block d-md-none  small-screen-start-event">
                    <div className="col-8 text-center">
                        <h2> READY TO GO! </h2>
                        <p>
                            Don't miss these events which are <br /> starting very soon!
                        </p>
                        <CustomButton text="view all" />
                    </div>
                </div>
                <div className="row d-flex small-screen-start-event d-sm-block d-md-none ">
                    <hr />
                    <div className="col-4" >
                        <img className="img-fluid" src={readyImg} alt="simple" />
                    </div>
                    <div className="col-8">
                        <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                        <div className="row d-flex date-time align-items-center justify-content-center">
                            <div className="col-3 align-self-center">
                                <p>0-1</p>
                                <p className="span-2">DAYS  </p>

                            </div>
                            <div className="col-3">
                                <p>22</p>
                                <p className="span-2">HOURS</p>
                            </div>
                            <div className="col-3">
                                <p>0-1</p>
                                <p className="span-2">MINUTES</p>
                            </div>
                            <div className="col-3">
                                <p>0-1</p>
                                <p className="span-2">SECONDS</p>
                            </div>
                            <div className='address'>
                                <MdLocationPin className='loction-icon' /><span>Address</span>
                            </div>
                        </div>

                        <div className="date-host">
                            <p className=''>
                                <img src={dateicon} alt="dateicon" />Date
                            </p>
                            <p className=''>
                                <img src={currncyicon} alt="dateicon" />Paid by host
                            </p>
                            <p className=''>
                                <CustomButton text='JOIN NOW' />
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid power-up" style={{ overflowX: "hidden" }}>
                <p data-aos="fade-right"> POWER UP! </p>
            </div>
        </>
    )
}
