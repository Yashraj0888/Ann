import "./Card.css"
import song from './../../src/assets/Mat.mp3'

const  Card=(props) =>{
  
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
          <h4 className="text"> Me all Day thinking.... </h4>
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
export default Card;
