import styled from "styled-components";

export const HeaderDiv = styled.div`
    background-color: rgb(0, 200, 255);
    width: 100%;
    height: 7rem;
    padding: 2.6rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .toggle {
        display: none;
    }
    
    @media (max-width: 1000px) {
    .toggle {
        display: block;
    }
    }
`;
export const List = styled.ul`
    width: 100%;
    max-width: 28rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
        li {
            width: 100%;
            max-width: 8rem;
        }
        li:nth-child(1){
            width: 100%;
            max-width: 4rem;
        }
        li:nth-child(2){
            width: 100%;
            max-width: 5rem;
        }
        li:nth-child(3){
            width: 100%;
            max-width: 5rem;
        }
        li:last-child button{
            width: 100%;
            height: 3rem;
            background-color: white;
            color: black;
            border-radius: 28px;
            font-size: 0.8rem;
            font-family: var(--Fraunces);
            font-weight: 700;
            transition: 0.3s ease-in-out;
                :hover{
                    color: rgb(0, 200, 255);
                }
        }

    @media (max-width: 1000px) {
        display: none;
    }
`;
export const ListLi = styled.li`
    button{
        color: var(--White);
        font-size: 1.1rem;
        background-color: rgb(0, 200, 255);
        border: none;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        :hover{
            color: black;
        }
    }
    
`;