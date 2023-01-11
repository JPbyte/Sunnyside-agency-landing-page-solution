import React from 'react';
import {MainGrid} from './style';
import Egg from '../images/desktop/image-transform.jpg';
import cop from '../images/desktop/image-stand-out.jpg';

function Container() {
    return (
        <MainGrid>
            <div className='article_one' gridArea="item1">
                <h2>Transform your brand</h2>
                    <p>We are a full-service creative agency specializing in
                    helping brands grow fast. Engage your clients through
                    compelling visuals that do most of the marketing for you.</p>
                        <button>LEARN MORE</button>
            </div>
            <img src={Egg} alt="egg"  gridArea="item2"/>
            <img src={cop} alt="cop"  gridArea="item3"/>
            <div className='article_two'  gridArea="item4">
                <h2>Stand out to the right audience</h2>
                    <p>Using a collaborative formula of designers, researchers, 
                    photographers, videographers, and copywriters, we'll
                    build and extend your brand in digital places.</p>
                        <button>LEARN MORE</button>
            </div>
            <div className='graphic'>
                <h2>Graphic Design</h2>
                    <p>Great design makes you memorable. We deliver artwork
                    that underscores your brand message and captures potential 
                    clients' attention</p>
            </div>
            <div className='photography'>
                <h2>Photography</h2>
                    <p>Increase your credibility by getting the most stunning, 
                    high-quality photos that improve your business image.</p>
            </div>
        </MainGrid>
    )
}


export default Container;