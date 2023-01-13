import React, {useState} from "react";
import logo from "../images/logo.svg";
import { HeaderDiv, List, ListLi} from "./styles";
import { RxTextAlignCenter } from "react-icons/rx";

function Header() {

    const [showMenu, setMenu] = useState(false);

    return(
        <HeaderDiv>
            <img src={logo} alt="logo"/>
                <List open={showMenu}>
                    <ListLi>
                        <button>About</button>
                    </ListLi>
                    <ListLi>
                        <button>Services</button>
                    </ListLi>
                    <ListLi>
                        <button>Projects</button>
                    </ListLi>
                    <ListLi>
                        <button>CONTACT</button>
                    </ListLi>
                </List>
                <div className="toggle">
                    <RxTextAlignCenter onClick={() => setMenu(!showMenu)} size="2.5rem" color="white" cursor={"pointer"}/>
                </div>
        </HeaderDiv>
    )
};

export default Header;