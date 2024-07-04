import "./Card.css"
import song from './../../src/assets/Agar1.mp3'

const  Card3=(props) =>{  
  var audio = new Audio(song);
  const playy=()=>{
    
    audio.play();
    setButtonDisabled(true);
  }
  const pause=()=>{
    
    audio.pause();
    
  }


  return (
    <>
      <div className='card_container'>
          <div className='card'>
          <h4 className="text">You might have thought that 'I'm out with my friends I might be enjoying ' </h4>
          <hr />
          <div className="btn">
            <button className="button" onClick={playy}>Play</button>
            <button className="button" onClick={pause}>Pause</button>
          </div>
          </div>
          
      </div>
    </>
  )
}
export default Card3;