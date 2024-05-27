import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import sred from '../assets/sred.png';
import smart from '../assets/smart.png';
import edenred from '../assets/edenred.png';
import jaibor from '../assets/jaibor.png';
import hoko from '../assets/hoko.png';

const projects = [
  {
    id: 1,
    title: 'SRED',
    description: 'Proyecto de DAW2, un gestor de recintos hecho con React y Boostrap',
    imageUrl: sred,
    demoLink: 'https://sred-pi.vercel.app/'
  },
  {
    id: 2,
    title: 'Smart Web Store',
    description: 'Un almacén automatizado en colaboración con Róbotica. Proyecto hecho con React y Tailwind',
    imageUrl: smart,
    demoLink: 'https://ferreteria-pi.vercel.app/'
  },
  {
    id: 3,
    title: 'Edenred',
    description: 'Proyecto hecho en Wordpress, trabajando para la agencia Rocket Digital',
    imageUrl: edenred,
    demoLink: 'https://mitarjetagasolina.es/'
  },
  {
    id: 4,
    title: 'Jaibor',
    description: 'Proyecto hecho en Shopify, trabajando para la agencia Rocket Digital',
    imageUrl: jaibor,
    demoLink: 'https://jaibor.com/'
  },
  {
    id: 4,
    title: 'Hoko',
    description: 'Proyecto hecho en Shopify, trabajando para la agencia Rocket Digital. Mantenimiento de la tienda online',
    imageUrl: hoko,
    demoLink: 'https://www.hokosport.com/'
  },
  // Añade más proyectos según sea necesario
];

const ProjectSection = () => {
  return (
    <section id="projectos" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Mis Proyectos</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map(project => (
            <Col key={project.id}>
              <Card className="h-100">
                <div style={{ minHeight: '200px', maxHeight: '300px', overflow: 'hidden' }}>
                  <Card.Img variant="top" src={project.imageUrl} style={{ minHeight: '200px', objectFit: 'cover' }} />
                </div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button href={project.demoLink} variant="secondary" target="_blank">Ver proyecto</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectSection;
