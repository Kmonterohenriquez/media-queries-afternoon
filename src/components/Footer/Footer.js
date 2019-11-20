import React from 'react'
import './Footer.css'

function Footer (){
    return(
       <footer className='Footer-container'>
        <div className=' Footer-grid-container sm-container'>
            <div className='box'>
                <p>Copyright © Your Website 2019</p>
            </div>
            <div className='box social-media'>
                <div className='circle'>
                    <i class="fab fa-twitter"></i>
                </div>
                <div className='circle'>
                    <i class="fab fa-facebook-f"></i>
                </div>
                <div className='circle'>
                    <i class="fab fa-linkedin-in"></i>
                </div>
            </div>
            <div className='box'>
                <a>Privacy Policy</a>
                <a>Terms of Use</a>
            </div>
        </div>
       </footer>
    )
}

export default Footer