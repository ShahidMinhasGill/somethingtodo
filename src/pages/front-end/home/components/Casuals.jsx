import React from 'react'
import Slider from "react-slick";
import DateCard from '../../components/DateCard';
import { Col, Container, Row } from 'react-bootstrap';
import CustomButton from '../../../../components/form/CustomButton';
import { settings } from '../../../../config/helper';

const Casuals = () => {
    return (
        <div className="container">
            <Row>
                <Col xs={12} md={6}>
                    <div className="main-casual" style={{ marginTop: '8rem' }}>
                        <div className="casual-text">
                            <h2>NEW IN TOWN AND DON'T <br></br> ANYONE HERE YET?</h2>
                            <p>Meet Someone who can show you around a little bit</p>
                            <CustomButton text='See All Casual' />
                        </div>
                        <div className="date-cards">
                            <Slider {...settings}>
                                {
                                    [1, 2, 3, 4, 5, 6].map(item => (
                                        <DateCard />
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Casuals; 