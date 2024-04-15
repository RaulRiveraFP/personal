import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import about from '../assets/about.png'
const AboutMe = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6} >
          <h2 className="mb-4">¡Hola! Soy Raul ...</h2>
          <p>
            Soy un estudiante en FP Llefà, cursando el grado superior de Desarrollo de Aplicaciones Web (DAW). Actualmente, también trabajo como desarrollador en la agencia Rocket Digital, donde me especializo en el desarrollo de tiendas en línea utilizando la plataforma Shopify.
          </p>
          <p>
            En Rocket Digital, tengo la oportunidad de aplicar mis conocimientos adquiridos en mi formación y también de aprender nuevas tecnologías y metodologías de desarrollo web. Disfruto trabajando en proyectos desafiantes y colaborando en equipos multidisciplinarios para ofrecer soluciones innovadoras a nuestros clientes.
          </p>
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <Image src={about} fluid rounded />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
