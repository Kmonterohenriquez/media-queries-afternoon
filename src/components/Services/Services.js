import React from 'react'
import './Services.css'

function Services(){
    return(
        <div className='Services-container'>
            <div className='Services sm-container'>
                <h1 className='Services-title'>Services</h1>
                <p className='Services-subtitle'>Lorem ipsum dolor sit amet consectetur.</p>
                <div className='Services-cards-container grid-container'>
                    <div className='Services-card'>
                        <div className='circle'>
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                        <h1>E-Commerce</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className='Services-card'>
                        <div className='circle'>
                            <i class="fas fa-laptop"></i>
                        </div>
                        <h1>Responsive Design</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className='Services-card'>
                        <div className='circle'>
                            <i class="fas fa-lock"></i>
                        </div>
                        <h1>Web Security</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
 export default Services;