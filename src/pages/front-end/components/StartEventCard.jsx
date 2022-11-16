import React, { useEffect, useState } from 'react'
import { FaCalendarCheck } from "react-icons/fa";
import { MdLocationOn, MdLocationPin } from 'react-icons/md';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsChatLeftDots, BsChatSquare } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import readyImg from '../../../assets/ready.png';
import dateicon from '../../../assets/dateicon.svg';
import { Card, Col, Row } from 'react-bootstrap';
import User from "../../../assets/nouser.png";
import CustomButton from '../../../components/form/CustomButton';


const StartEventCard = () => {
    return (
        <>
            <Card className='start-event-card-style'>
                <div className='card-custom-Body'>
                    <Row>
                        <Col lg={6}>
                            <Card.Img variant="" src={readyImg} />
                        </Col>
                        <Col lg={6}>
                            <Card.Body>
                                <Card.Title>LOREM IPSUM DOLOR SIT AMET</Card.Title>
                                <Card.Text className='desc'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </Card.Text>
                                <p className="event"> Event Starts in </p>
                                <Row>
                                    <Col lg={2}>
                                        <div className="box">
                                            <span>01</span>
                                            <hr />
                                            <p>DAYS</p>
                                        </div>
                                    </Col>
                                    <Col lg={2}>
                                        <div className="box">
                                            <span>01</span>
                                            <hr />
                                            <p>DAYS</p>
                                        </div>
                                    </Col>
                                    <Col lg={2}>
                                        <div className="box">
                                            <span>01</span>
                                            <hr />
                                            <p>DAYS</p>
                                        </div>
                                    </Col>
                                    <Col lg={2}>
                                        <div className="box">
                                            <span>01</span>
                                            <hr />
                                            <p>DAYS</p>
                                        </div>
                                    </Col>
                                    <Col lg={2}>
                                        {/* <CustomButton text='Join Now' /> */}
                                    </Col>


                                </Row>
                                <p className='address'>
                                    <MdLocationPin />Address
                                </p>
                                <div className="bottom-sec">
                                    <img src={readyImg} alt="dateicon" className='profile-img' />
                                    <Row>

                                        <Col lg={6}>
                                            <div className="event-card-chat">
                                                <div>
                                                    <p className='chat'>
                                                        <BsChatSquare />Live Chat
                                                    </p>
                                                    <div className="last-content">
                                                        {[1, 2, 3, 4, 5].map(item => (
                                                            <img className="user-img-2" src={User} alt="user" />
                                                        ))}
                                                        <p className="others text-muted">& 12 others {">"}</p>
                                                    </div>
                                                </div>


                                            </div>
                                        </Col>
                                        <Col lg={2} >
                                            <p className='address '>
                                                <img src={dateicon} alt="dateicon" />Date
                                            </p>
                                        </Col>
                                        <Col >
                                            <p className='address'>
                                                <MdLocationPin />paid by host
                                            </p>
                                        </Col>
                                        <p className="price-txt text-end">
                                            $45
                                        </p>
                                    </Row>
                                </div>


                            </Card.Body>
                        </Col>
                    </Row>

                </div>
            </Card>

            {/* <div class="card item-card  card-block">
                <img src={vanueImg} alt="" className='card-img' />
                <div className="row dcard-row">
                    <div className="col-12" >
                        <div className="row justify-content-between">
                            <div className="col-2  d-flex justify-content-center for-color" >
                                <div className='mt-3' >
                                    <p className='m-0 cdate1' >12</p>
                                    <p className='m-0 cdate2' >MARCH</p>
                                    <p className='m-0 cdate3' >2020</p>
                                </div>
                            </div>
                            <div className="col-10" style={{ position: "relative" }}>
                                <div className="row"></div>
                                <div className="card-content1">
                                    <p className="dhead">
                                        LOREM IPSUM DOLOR SIT
                                    </p>
                                    <p className="dhead-2 text-muted pb-3 mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                    </p>
                                    <div className="dcard-content mt-2">
                                        <div className="row">
                                            <div className="col-6">
                                                <MdLocationOn /><span className='address mt-0'>Address</span>
                                            </div>
                                            <div className="col-6 ">
                                                <FaCalendarCheck className="sub" />
                                                <span className="cdate">
                                                    Date

                                                </span>
                                                <span className="cpaid mx-2">
                                                    <AiFillDollarCircle className="sub2 " />
                                                    Paid by host
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <img className="user-img" src={vanueImg} alt="user" />
                                    <div className="event-card-chat">
                                        <div className="chatOptionDiv" >
                                            <div>
                                                <div className="row1">
                                                    <BsChatLeftDots /><span style={{ marginLeft: "8px", fontSize: "9px" }}>Live Chat</span>
                                                </div>
                                                <div className="last-content">
                                                    <img className="user-img-2" src={vanueImg} alt="user" />
                                                    <img className="user-img-2" src={vanueImg} alt="user" />
                                                    <img className="user-img-2" src={vanueImg} alt="user" />
                                                    <img className="user-img-2" src={vanueImg} alt="user" />
                                                    <p className="others text-muted">& 12 others<IoIosArrowForward style={{ color: "#64E2FF", fontSize: "12px" }} /></p>

                                                </div>
                                            </div>
                                            <div>
                                                <div className="set-pd">
                                                    <p className="price-txt">
                                                        $99
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default StartEventCard