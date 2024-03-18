import {ContactForm} from './ContactForm'
const Contact = ({onScroll}) => {

    return (
      <div className='contact-wrapper'>
        <h3>Contact</h3>
        <div className='contacts'>
          <a href='http://www.github.com/wjal'><img href='http://www.github.com/wjal' className='contacts-icon' src='github-mark-white.png' alt='git hub'/></a>
          <a href='https://www.linkedin.com/in/james-little-378311269/' ><img className='contacts-icon' src='LI-In-Bug.png' alt='linkedin' /></a>
          <div onClick={onScroll} className='email-scroll-button'><img className='contacts-icon' src='emailGreen.png' alt='email' /></div>
        </div>
        
      </div>
    )
  }

  export default Contact;