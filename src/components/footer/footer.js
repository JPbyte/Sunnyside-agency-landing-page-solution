import React from "react";
import { FooterDiv } from "./style";
import Logo from "../images/logo.svg"
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";

export default function Footer(){
    return(
        <FooterDiv>
            <img src={Logo} alt="logo"/>
                <nav>
                    <ul>
                        <li>About</li>
                        <li>Services</li>
                        <li>Projects</li>
                    </ul>
                </nav>
                <div className="redes">
                    <ul>
                        <img src={Facebook} alt="Facebook"/>
                        <img src={Instagram} alt="Instagram"/>
                        <img src={Twitter} alt="Twitter"/>
                        <img src={Pinterest} alt="Pinterest"/>
                    </ul>
                </div>
        </FooterDiv>
    )
}