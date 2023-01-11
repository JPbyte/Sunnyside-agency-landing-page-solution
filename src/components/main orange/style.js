import styled from "styled-components";
import bgdesk from "../images/desktop/image-header.jpg";

export const DivOrange = styled.div`
    width: 100%;
    height: 35rem;
    background: url(${bgdesk}) center no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    h1{
        color: var(--White);
        font-size: 2.7rem;
        margin-bottom: 8rem;
        margin-top: 3rem;
        letter-spacing: 0.6rem;
    }
    
    img{
        height: 8rem;
        animation: float 2.5s infinite ease-in-out;
    }

    @media (max-width: 1000px) {

        h1{
            text-align: center;
            font-size: 2rem;
        }
    }
`;
