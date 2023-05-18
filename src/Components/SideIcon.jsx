
import { Link } from 'react-router-dom'

function SideIcon(props) {
  return (
    <div className='side'>
    <Link to = {props.Link}> <img src= {props.ico}  /> </Link>

    </div>
  )
}

export default SideIcon