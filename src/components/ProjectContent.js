import { Player } from 'video-react';
import ReactPlayer from 'react-player/vimeo';
import 'video-react/dist/video-react.css'; // import css


const ProjectContent = ({name, description, movie, comingSoon}) => {

    const mobileVideo = name === 'Electric Savings';

    return (
    <div className='content-wrapper'>
        {movie ? <>
       
    <ReactPlayer url={movie} controls='true' />  
    <div style={{color: 'white', width: '60%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between'}}>
        <div style={{height: '20%', width: '85%'}}>{name}</div>
        <div style={{height: '80%', fontSize: '.65em', width:'85%'}}>{description}</div>
    </div>
    </> :
    <div style={{color: 'white', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <div style={{height: '20%', width: '50%', fontSize: '.65em'}}>{comingSoon}</div>
</div>
     }
     </div>)
}

export default ProjectContent;