import React , {Component} from 'react'
import './navbar.css'
import Logo from './logo.png'

class Navbar extends Component {
    render (){
        return (
            
            <div className="navbar">
                <div><img src={Logo} alt="fuck this shit iam out" className="img"/></div>
                <div className="navbar-position ">
                    <a href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        )
    }
}

export default Navbar;

