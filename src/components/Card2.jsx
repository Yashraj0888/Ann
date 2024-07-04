import "./Card.css"
import song from './../../src/assets/Haan.mp3'

const  Card2=(props) =>{  
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
          <h4 className="text">When ever you say 'where were you all day don.t you miss me '<br /></h4>
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
export default Card2;