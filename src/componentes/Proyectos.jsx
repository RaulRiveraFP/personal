import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import sred from '../assets/sred.png'
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
    imageUrl: 'https://via.placeholder.com/150',
    demoLink: 'https://tuproyecto2demo.com'
  },
  // Añade más proyectos según sea necesario
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Mis Proyectos</h2>
        <Row>
          {projects.map(project => (
            <Col key={project.id} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={project.imageUrl} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button href={project.demoLink} variant="secondary" target="_blank">Demo</Button>
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
