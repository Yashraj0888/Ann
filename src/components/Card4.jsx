import "./Card.css"
import song from './../../src/assets/Agar.mp3'

const  Card4=(props) =>{  

  var audio = new Audio(song);

  const playy=()=>{   
    audio.play();
    setButtonDisabled(false);
  }

  const pause=()=>{   
    audio.pause();  
  }

  return (
    <>
      <div className='card_container'>
          <div className='card'>
          <h4 className="text">You always ask abt my plan abt us so i want say that....</h4>  
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
export default Card4;