import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../static/images/img1.PNG';
import img2 from '../../static/images/img2.PNG';
import img3 from '../../static/images/img3.PNG';
import img4 from '../../static/images/img4.PNG';

function Card1() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} nextLabel={null} prevLabel={null} style={{ height: "auto", width: "auto", maxHeight: "650px", transitionDuration: "0.2s" }}>
            <Carousel.Item interval={4000} style={{ height: "auto", width: "auto", maxHeight: "650px", transitionDuration: "0.2s" }}>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item interval={4000} style={{ height: "auto", width: "auto", maxHeight: "650px", transitionDuration: "0.2s" }}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item interval={4000} style={{ height: "auto", width: "auto", maxHeight: "650px", transitionDuration: "0.2s" }}>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />
            </Carousel.Item>

            <Carousel.Item interval={4000} style={{ height: "auto", width: "auto", maxHeight: "650px", transitionDuration: "0.2s" }} >
                <img
                    className="d-block w-100"
                    src={img4}
                    alt="Fourth slide"
                />
            </Carousel.Item>

        </Carousel>
    );
}

export default Card1
