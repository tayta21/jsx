import React from 'react';
import logo from './logo.svg';
import './App.css';
import morty from "./Morty.jpg"
import Video from "./video.mp4"
function App() {
  return (
    <div className="" >     
        <h1 className="title red block">Rick And Morty</h1>

      <div  style={{border: 'solid 1px white',}} className='images'> 
        <br />
        <img src="img/Rick.jpg" className='adjust' style={{ width:"350px",height:"400px"}}/>
        <br />
        <img src={morty} className='adjust' style={{ width:"350px",height:"400px"}}/>

       <video width="350px" height='400px' controls className='adjust'>
        <source src={Video} type="video/mp4" />
       </video>

      </div>

    </div>
  );
}

export default App;
