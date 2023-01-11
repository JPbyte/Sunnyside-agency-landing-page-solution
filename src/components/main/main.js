import React from 'react';
import {MainGrid} from './style'
import Egg from '../images/desktop/image-transform.jpg'

function Container() {
    return (
        <MainGrid>
            <div className='article'>
                <h2>Transform your brand</h2>
                    <p>We are a full-service creative agency specializing in
                    helping brands grow fast. Engage your clients through
                    compelling visuals that do most of the marketing for you.</p>
                        <button>LEARN MORE</button>
            </div>
            <img src={Egg} alt="egg"/>
        </MainGrid>
    )
}


export default Container;