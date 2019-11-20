import React from 'react'
import './Portfolio.css'

function Portfolio(){
    return(
        <div className='Portfolio'>
            <div className='sm-container'>
                <h1 className='Portfolio-title title'>Portfolio</h1>
                <p className='Portfolio-subtitle'>Lorem ipsum dolor sit amet consectetur.</p>
                <div className='grid-container'>
                    <div className='box'>
                        <div className='box-picture'>
                            <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/01-full.jpg' alt=''/>
                        </div>
                        <div className='box-info'>
                            <h1>Threads</h1>
                            <p> Illustration</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='box-picture'>
                            <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/02-full.jpg' alt=''/>
                        </div>
                        <div className='box-info'>
                            <h1>Explore</h1>
                            <p> Graphic Design</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='box-picture'>
                            <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/03-full.jpg' alt=''/>
                        </div>
                        <div className='box-info'>
                            <h1>Finish</h1>
                            <p> Illustration</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='box-picture'>
                            <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/04-full.jpg' alt=''/>
                        </div>
                        <div className='box-info'>
                            <h1>Lines</h1>
                            <p> Branding</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='box-picture'>
                            <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/05-full.jpg' alt=''/>
                        </div>
                        <div className='box-info'>
                            <h1>Southwest</h1>
                            <p> Website Design</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='box-picture'>
                            <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/06-full.jpg' alt=''/>
                        </div>
                        <div className='box-info'>
                            <h1>Window</h1>
                            <p> Photography</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Portfolio;