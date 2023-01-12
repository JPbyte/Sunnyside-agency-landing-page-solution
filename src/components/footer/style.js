import styled from "styled-components";

export const FooterDiv = styled.div`
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: hsl(168, 66%, 66%);
        img{
            width: 100%;
            max-width: 11rem;
            filter: brightness(0) saturate(100%) invert(27%) sepia(32%) saturate(667%) hue-rotate(116deg) brightness(92%) contrast(89%);
        }
        nav{
            width: 100%;
            max-width: 20rem;
                ul{
                    list-style: none;
                    display: flex;
                    justify-content: space-between;
                        li{
                            color: var(--Dark-desaturated-cyan);
                            font-size: 1.4rem;
                            font-weight: 900;
                            cursor: pointer;
                            transition: 0.4s;
                                &:hover{
                                    color: var(--Dark-moderate-cyan);
                                }
                        }
                }
        }
        .redes{
            width: 100%;
            display: flex;
            justify-content: center;
            ul{
                width: 100%;
                max-width: 10rem;
                display: flex;
                justify-content: space-between;
            }
            img{
                width: 100%;
                max-width: 1.5rem;
                cursor: pointer;
                transition: 0.4s;
                    &:hover{
                        transform: translateY(-0.2rem);
                    }
            }
        }
    @media (max-width: 800px) {
        nav{
            max-width: 15rem;
                ul{
                    li{
                        font-size: 1.2rem;
                    }
                }
        }
    }
`;