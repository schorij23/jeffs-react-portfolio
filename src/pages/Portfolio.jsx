import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../components/Project'; // Adjust the path as per your project structure
import projects from '../utils/projects'
import '../components/Project.css'

function Portfolio() {
    return (
        <div className='sticky-footer-container'>
        <Container style={{ marginTop: '40px', paddingBottom: '60px'}}>
            <Row className='g-3'>
                {projects.map((project, index) => (
                <Col md={4} key={index}>
                    <ProjectCard  image={project.image} title={project.title}
                    url={project.url} github={project.github} />
                </Col>
                ))}
            </Row>
        </Container>
        </div>
    );
}

export default Portfolio;