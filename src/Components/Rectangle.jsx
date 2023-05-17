
import Icon from './Icon.jsx'
import './Rectangle.css'

function Rectangle(props) {
  return (
    
<div className="parent">  

    <img src={props.src} className="rect" />
       <div className="txt">
         {props.txt1}
         {props.txt2}
         {props.txt3}
         <h3>{props.title}</h3>
       </div>
     <div className="icon">
     <Icon/>
    </div>
    </div>
    
  )
}

export default Rectangle