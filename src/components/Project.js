import { useState } from "react";
const Project = ({name, description, currOpen, onOpen, num, key, imageSource, onChangeContent, type, movie, comingSoon}) => {

    const [expand, setExpand] = useState(false);
    const isOpen = num === currOpen;
  
    function changeBackground(e, color) {
      e.target.style.color = color;
      e.target.style.transition = '.7s';
    }
    const handleExpand = () =>{
        
            if(isOpen){
                onOpen(null)
            }else{
                onOpen(num)
            }
        }
  
    return (
    <div className="project">
        
        <p  onClick={handleExpand} onMouseLeave={e => changeBackground(e, 'white')} onMouseEnter={e => changeBackground(e, 'rgb(21, 245, 36)')} >{name}</p>
        {isOpen && <>
        
        <div className="open-project">
            <div className="top-row-project">
                <img src={imageSource} alt="project" className="project-image" onClick={()=> onChangeContent({name: name, description: description, image: imageSource, type: type, movie: movie, comingSoon: comingSoon})}/>
                
                <div className='description'>
                {description}
            </div>
            </div>
            
            <div className='demo' onClick={()=> onChangeContent({name: name, description: description, image: imageSource, type: type, movie: movie, comingSoon: comingSoon})}>
                    <p>Click for a demo!</p>
                </div>
             
        </div>
        </>
        }
       
    </div>
  
    )
  }

  export default Project;