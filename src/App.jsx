
import './App.css'
import image from './assets/i1.jpg'
import image1 from './assets/i2.jpg'
import image2 from './assets/i3.jpg'
import Rectangle from './Components/Rectangle'
import Square from './Components/Square'
import Vertical from './Components/Vertical.jsx'



function App() {


  return (
    <>
    
    <div><input type="search"  placeholder='🔎 Search for movies or TV Series' className='input' /></div>
      
      <Vertical/>
      <div className="toop">
       <div className='trending'> <h2>Trending</h2> </div>
      <div className='top'>
         <div> <Rectangle
          src={image}
          txt1={"2019"}
          txt2={"Movie"}
          txt3={"PG"}
          title={"Beyond Earth"}
        /></div>

        <div> <Rectangle
          src={image1}
          txt1={"2021"}
          txt2={"Movie"}
          txt3={"PG"}
          title={"Bottom Gear"}
        /></div>
        <div><Rectangle
          src={image2}
          txt1={"2019"}
          txt2={"TV Series"}
          txt3={"E"}
          title={"Undiscovered Cities"}
        /></div>
        
      </div></div>
      <div className='Recommended'><h2>Recommended for you</h2> </div>
      
      <div className='bot'>
        <Square
          src={image}
          txt1={"2019"}
          txt2={"Movie"}
          txt3={"PG"}
          title={"Beyond Earth"}
        />
        <Square
          src={image1}
          txt1={"2019"}
          txt2={"Movie"}
          txt3={"PG"}
          title={"Beyond Earth"}
        />
        <Square
          src={image2}
          txt1={"2019"}
          txt2={"Movie"}
          txt3={"PG"}
          title={"Beyond Earth"}
        />
        <Square
          src={image}
          txt1={"2019"}
          txt2={"Movie"}
          txt3={"PG"}
          title={"Beyond Earth"}
        />
        <Square
          src={image}
          txt1={"2019"}
          txt2={"Movie"}
          txt3={"PG"}
          title={"Beyond Earth"}
        />
        <Square
          src={image1}
          txt1={"2019"}
          txt2={"Movie"}
          txt3={"PG"}
          title={"Beyond Earth"}
        />
      </div>
      
    </>
  )
}

export default App
