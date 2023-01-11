import styled from "styled-components";

export const MainGrid = styled.div`
    width: 100%;
    height: 37rem;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    
    .article {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 5rem 4rem;

        h2{
            width: 100%;
            max-width: 35rem;
            font-size: 3rem;
            font-family: var(--Besley);
            font-weight: 900;
            line-height: 4rem;
            color: var(--Very-dark-desaturated-blue);
        }

        p{
            width: 100%;
            max-width: 28rem;
            font-size: 1.2rem;
            color: var(--Very-dark-grayish-blue);
        }

        button{
            width: 100%;
            max-width: 10rem;
            height: 2rem;
            background-color: white;
            border: none;
        }

    }
    img{
        width: 100%;
    }
`;

export const Egg = styled.image`
    width: 100%;
    max-width: 3rem;
`;