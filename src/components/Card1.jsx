import "./Card.css"
import song from './../../src/assets/Tu.mp3'

const  Card1=(props) =>{  
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
          <h4 className="text">Ever wondered how I feel whenever I'm with you?</h4>
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
export default Card1;