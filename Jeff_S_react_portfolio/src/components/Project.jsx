import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Project.css'
import PropTypes from 'prop-types';
export default function ProjectCard({ title, image, github, url }) {
    const handleButtonClick = (url) => {
        window.open(url, '_blank');
    };

    return ( 
        <Card style={{ width: '30 rem' }}>
            <div className='card-image' style ={{ backgroundImage: `url(${image})`}}></div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {/* Some quick example text to build on the card title and make up the
              bulk of the cards content. */}
            </Card.Text>
            {/* <div style={{ paddingBottom: '20%' }}></div> */}
            <Button variant="primary" size="sm" 
            onClick={() => handleButtonClick(github)} style={{ marginRight: '10px'}}>Github</Button>
            <Button variant="primary" size="sm" 
            onClick={() => handleButtonClick(url)} style={{ marginLeft: '10px'}}>Deployed</Button>
          </Card.Body>
        </Card>
      );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};