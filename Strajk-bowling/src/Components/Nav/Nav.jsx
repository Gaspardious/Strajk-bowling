import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <h1>Nav</h1>
        <ul>    
            <li><Link to="/">Home</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/confirmation">Confirmation</Link></li>
        </ul>


    </div>
  )
}

export default Nav