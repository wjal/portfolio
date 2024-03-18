import { useTypeWriter } from '../hooks/useTypeEffect';
const TypeWriter = ()=> {
    const text = useTypeWriter(`I'm a fullstack software developer, with experience in mobile applications and DevOps`, 50);
  return(
    
    <p>{text}<span className='blink'>|</span></p>
  )
  
  };

  export default TypeWriter;