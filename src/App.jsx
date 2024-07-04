import { useEffect } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Card from './components/Card'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import Card4 from './components/Card4'
import Card5 from './components/Card5'
import Special from './components/Special'

function App() {  
  useEffect(() => {
    const bodyy = document.getElementById('spclmsg');
    const main_div = document.querySelector('.main_div');
    

    if (bodyy) {
      bodyy.style.display = 'block';
    } else {
      console.error('Element with ID spclmsg not found');
    }

    const handleClick = () => {
      if (bodyy) {
        bodyy.style.display = 'none';
        main_div.style.display='block'
        main_div.style.display='flex'
        

      } else {
        console.error('Element with ID spclmsg not found on body click');
      }
    };

    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div id='spclmsg'><Special/></div>

      <div className='main_div'>

        <div className="div1">
          <Card/>
          <Card1 />
        </div>

        <div className="div1">
          <Card2/>
          <Card3/>
        </div>

        <div className="div1">
          <Card4/>
          <Card5/>
        </div>

      </div>
    </>
  );
}

export default App;
