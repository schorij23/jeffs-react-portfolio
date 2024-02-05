import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Project.css'
import PropTypes from 'prop-types';
// ProjectCard component displays project information with title, image, GitHub link, and deployment link.
export default function ProjectCard({ title, image, github, url }) {
  // Function to open a URL in a new tab when a button is clicked
    const handleButtonClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        // Bootstrap Card component to display project details 
        <Card style={{ width: '30 rem' }}>
          {/* Card image displayed as a background image */}
            <div className='card-image' style ={{ backgroundImage: `url(${image})`}}></div>
          <Card.Body>
            {/* Project title and text */}
            <Card.Title>{title}</Card.Title>
            <Card.Text className='card-text'>
            </Card.Text>
            {/* Button to open the GitHub repository and deployed link in a new tab */}
            <Button className='card-button' variant="primary" size="sm" 
            onClick={() => handleButtonClick(github)} style={{ marginRight: '10px'}}>Github</Button>
            <Button className='card-button' variant="primary" size="sm" 
            onClick={() => handleButtonClick(url)} style={{ marginLeft: '10px'}}>Deployed</Button>
          </Card.Body>
        </Card>
      );
}
// PropTypes validation for the props received by ProjectCard.
ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};