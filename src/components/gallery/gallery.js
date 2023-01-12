import React from "react";
import { GalleryDiv } from './style';
import Milk from "../images/desktop/image-gallery-milkbottles.jpg";
import Orange from "../images/desktop/image-gallery-orange.jpg";
import Cone from  "../images/desktop/image-gallery-cone.jpg";
import Sugar from "../images/desktop/image-gallery-sugarcubes.jpg";

export default function Gallery() {
    return(
        <GalleryDiv>
            <div>
                <img className="milk" src={Milk} alt="milk-bottle"/>
            </div>
            <div>
                <img className="orange" src={Orange} alt="orange"/>
            </div>
            <div>
                <img className="cone" src={Cone} alt="cone"/>
            </div>
            <div>
                <img className="sugar" src={Sugar} alt="sugar"/>
            </div>
        </GalleryDiv>
    )
}