import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Card2({ c }) {
    return (
        <>
            <Card style={{ width: '22rem', height: "26em", margin: "0.5em", top: "0em", textAlign: "center" }}>
                <Card.Title style={{ textAlign: "center", padding: "0.5em", fontSize: "20px" }}>{c.cardTitle}</Card.Title>
                <div style={{ display: "grid", gridTemplateColumns: "130px 130px", gridColumnGap: "1em", gridRowGap: "0em", alignItems: "center", justifyContent: "center" }}>
                    <div>
                        <Card.Img variant="top" src={c.cardImg1File} style={{ border: "3px solid #f2f2f2", width: "130px", height: "130px" }} />
                        <p style={{ fontSize: "10px", textAlign: "start" }}>{c.cardImg1Text}</p>
                    </div>
                    <div>
                        <Card.Img variant="top" src={c.cardImg2File} style={{ border: "3px solid #f2f2f2", width: "130px", height: "130px" }} />
                        <p style={{ fontSize: "10px", textAlign: "start" }}>{c.cardImg2Text}</p>
                    </div>
                    <div>
                        <Card.Img variant="top" src={c.cardImg3File} style={{ border: "3px solid #f2f2f2", width: "130px", height: "130px" }} />
                        <p style={{ fontSize: "10px", textAlign: "start" }}>{c.cardImg3Text}</p>
                    </div>

                    <div>
                        <Card.Img variant="top" src={c.cardImg4File} style={{ border: "3px solid #f2f2f2", width: "130px", height: "130px" }} />
                        <p style={{ fontSize: "10px", textAlign: "start" }}>{c.cardImg4Text}</p>
                    </div>

                </div>
                <Card.Body style={{ textAlign: "start", margin: "0em", paddingTop: "0em" }} >
                    <a href="#" style={{ color: "#007185", alignItems: "flex-start", textDecoration: "none" }}>view all products</a>
                </Card.Body>
            </Card>
        </>
    )
}

export default Card2
