import "./Card.css"
import song from './../../src/assets/Gone.mp3'

const  Card5=(props) =>{
  
  var audio = new Audio(song);

  const playy=()=>{
    
    audio.play();

  }

  const pause=()=>{
    
    audio.pause();
    
  }
  return (
    <>
      <div className='card_container'>
          <div className='card'>
          <h4 className="text">And in last let me finish your never lasting question 'what have i done to you '</h4>
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
export default Card5;
