import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Content from '../components/Content'
import '../components/content.css'

class Home extends Component {
    render() {
        return (
         <div className="body">   
            <Navbar/>
            <Content/>
            <Footer/> 
        </div>
        )
    }
}

export default Home