import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../components/Project'; // Adjust the path as per your project structure
import projects from '../utils/projects'
import '../components/Project.css'

function Portfolio() {
    return (
        <Container style={{ marginTop: '20px'}}>
            <Row className='g-3'>
                {projects.map((project, index) => (
                <Col md={4} key={index}>
                    <ProjectCard  image={project.image} title={project.title}
                    url={project.url} github={project.github} />
                </Col>
                ))}
                {/* <Col md={4}><ProjectCard /></Col>
                <Col md={4}><ProjectCard /></Col>
                <Col md={4}><ProjectCard /></Col>
                <Col md={4}><ProjectCard /></Col>
                <Col md={4}><ProjectCard /></Col> */}
                {/* Add more ProjectCard components as needed */}
            </Row>
        </Container>
    );
}

export default Portfolio;