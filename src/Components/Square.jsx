import Icon from './Icon.jsx'
import './Square.css'
function Square(props) {
  return (
    <div className='carddd'>
      <img src={props.src} className="square" />
      <div className="txts">
        {props.txt1}
        {props.txt2}
        {props.txt3}
        <h3>{props.title}</h3>
      </div>
      <div className="ico">
        <Icon />
      </div>
    </div>
  )
}

export default Square