import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faPhp, faPython, faReact } from '@fortawesome/free-brands-svg-icons'; 
import { faShopify, faBootstrap } from '@fortawesome/free-brands-svg-icons';

const Technologies = () => {

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Mis Tecnologías</h2>
      <Row className="align-items-center mt-5">
        <Col md={3} sm={4} xs={6} className="mb-4 d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faHtml5} size="4x" />
          <p className="mt-3">HTML</p>
        </Col>
        <Col md={3} sm={4} xs={6} className="mb-4 d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faCss3Alt} size="4x" />
          <p className="mt-3">CSS</p>
        </Col>
        <Col md={3} sm={4} xs={6} className="mb-4 d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faJs} size="4x" />
          <p className="mt-3">JavaScript</p>
        </Col>
        <Col md={3} sm={4} xs={6} className="mb-4 d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faReact} size="4x" />
          <p className="mt-3">React</p>
        </Col>
        <Col md={3} sm={4} xs={6} className="mb-4 d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faPhp} size="4x" />
          <p className="mt-3">PHP</p>
        </Col>
        <Col md={3} sm={4} xs={6} className="mb-4 d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faPython} size="4x" />
          <p className="mt-3">Python</p>
        </Col>
        <Col md={3} sm={4} xs={6} className="mb-4 d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faShopify} size="4x" />
          <p className="mt-3">Liquid</p>
        </Col>
        <Col md={3} sm={4} xs={6} className="mb-4 d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faBootstrap} size="4x" />
          <p className="mt-3">Bootstrap</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Technologies;
