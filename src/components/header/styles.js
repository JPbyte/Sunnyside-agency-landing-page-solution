import styled from "styled-components";

export const HeaderDiv = styled.div`
    background-color: rgb(0, 200, 255);
    width: 100%;
    height: 7rem;
    padding: 2.6rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const List = styled.ul`
    width: 100%;
    max-width: 22rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
`;
export const Achor = styled.li`
    button{
        color: var(--White);
        font-size: 1.1rem;
        background-color: rgb(0, 200, 255);
        border: none;
        transition: 0.4s ease-in-out;
        cursor: pointer;
        :hover{
            color: black;
        }
    }
    
`;
