import Project from './Project'
import { useState } from 'react';

const Projects = ({onChangeContent}) => {

    const [currOpen, setCurrOpen] = useState();
  
    return (
      <div className='projects'>
        <h3>Projects</h3>
        {portfolioProjects.map((project, i)=> <Project name={project.name} movie={project.movie} key={i} num={i} description={project.description} currOpen={currOpen} onOpen={setCurrOpen} imageSource={project.image} onChangeContent={onChangeContent} type={project.type} comingSoon={project.comingSoon}/>)}
    </div>
    )
  }

  export default Projects;


const portfolioProjects = [
{type: 'Project', name: 'Electric Savings', image: 'electricScreenShot.png', description: `Single page mobile app for calculating annual savings by using an electric vehicle vs the cost of gas for an ICE vehicle.`, movie: `https://player.vimeo.com/video/924532972?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`, comingSoon: 'COMING SOON'},
{type: 'Project', name: 'Get Weather', image: 'getWeatherScreenshot.png', description: `A react web application for searching for weather around the world.  Users can enable geolocation to automatically receive weather conditions for their current location`, movie: 'https://player.vimeo.com/video/924540918?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479', comingSoon: 'COMING SOON'},
{type: 'Project', name: 'Bill Splitter', image: 'proj3.png', description: 'Single page react application, which enables users to add friends, and split payments.', movie: null, comingSoon: 'COMING SOON'}
]
