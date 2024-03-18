import '../App.css'
import TypeWriter from './TypeWriter'
const Home = () => {
  
    return (
    <div className='Header-wrapper '>
      <div>
        <div className='header-top'>
          <h5 className='header-text'>Hi, I'm</h5>
          <h1 className='name'>James Little</h1>
          <h4 className='subtitle-text'>Software Developer</h4>
        </div>
        <div className='stack'>
        <TypeWriter />
        </div>
      </div>
    </div>
      )
  }

  export default Home;