import React from "react";
import logo from "../images/logo.svg";
import { HeaderDiv, List, Achor, Last} from "./styles";


function Header() {
    return(
        <HeaderDiv>
            <img src={logo} alt="logo"/>
                <List>
                    <Achor>
                        <button>About</button>
                    </Achor>
                    <Achor>
                        <button>Services</button>
                    </Achor>
                    <Achor>
                        <button>Projects</button>
                    </Achor>
                    <Achor>
                        <button>Contact</button>
                    </Achor>
                </List>
        </HeaderDiv>
    )
};

export default Header;