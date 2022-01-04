import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";


const Imagenes = () => {
    return(
<Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="./img/img1.jpg" thumbnail />
      <Button variant="outline-danger">Werty</Button>
    </Col>
    <Col xs={6} md={4}>
      <Image src="./img/img2.jpg" thumbnail />
      <br/>
      <Button variant="outline-danger">Gasty</Button>
    </Col>
    <Col xs={6} md={4}>
      <Image src="./img/img3.jpg" thumbnail />
      <Button variant="outline-danger">Nahue</Button>
    </Col>
  </Row>
</Container>
    )
}

export default Imagenes;