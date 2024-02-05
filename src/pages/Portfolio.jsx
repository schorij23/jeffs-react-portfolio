import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../components/Project';
import projects from '../utils/projects'
import '../components/Project.css'

function Portfolio() {
    return (
        <div className='sticky-footer-container'>
        <Container style={{ marginTop: '40px', paddingBottom: '60px'}}>
            {/* Row for displaying a grid of project cards */}
            <Row className='g-3'>
                {/* Map through the 'projects' array to render ProjectCard components */}
                {projects.map((project, index) => (
                <Col md={4} key={index}>
                    {/* Render ProjectCard component with project data */}
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