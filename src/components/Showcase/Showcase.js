import React, { Component } from 'react'
import showcasePic from '../../img/header-bg.jpg'
import './Showcase.css'

class Showcase extends Component {
    state = {  }
    render() {
        return (
            <div className='Showcase'>
                <img className='Showcase-pic' src={showcasePic} alt='Showcase'/>
                <div className='Showcase-content'>
                    <h2>Welcome to our Studio!</h2>
                    <h1>It's nice to meet you</h1>
                    <button>Tell me more</button>
                </div>
            </div>
        );
    }
}

export default Showcase;