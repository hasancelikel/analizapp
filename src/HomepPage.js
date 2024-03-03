import React, {useState} from 'react'

import Musteri from './usehistory/Musteri'
import './Home.css'

import Addmalzeme from './Addmalzeme'
import Malzemelist from './Malzemelist'





const HomepPage = () => {
  
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(true);
  };
  const handleClickFalse = () => {
    setShowDiv(false);
  };
  
  return (
  
    <div className='link-comp'> 
    <div className='musteri'>
    <Malzemelist />
    <Musteri />
    <br/>
    <br/>
    <button  onClick={handleClick}> Göster</button>
    {showDiv && (
      
    <div style={{display:"block"} } >
      <button onClick={handleClickFalse} >Gizle</button>
    <Addmalzeme />
    </div>)}
    </div>

    
      
    
    </div>
    
   
  )
}

export default HomepPage