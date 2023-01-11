import styled from "styled-components";
import cherry from '../images/desktop/image-graphic-design.jpg'
import Fruit_orange from '../images/desktop/image-photography.jpg'

export const MainGrid = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    
    .article_one {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 5rem 4rem;
            h2{
                width: 100%;
                max-width: 35rem;
                font-size: 2.7rem;
                font-family: var(--Besley);
                font-weight: 900;
                line-height: 4rem;
                color: var(--Very-dark-desaturated-blue);
            }
            p{
                width: 100%;
                max-width: 28rem;
                line-height: 1.6rem;
                font-family: var(--Barlow);
                font-size: 1.1rem;
                color: var(--Very-dark-grayish-blue);
            }

            button{
                width: 100%;
                max-width: 10rem;
                height: 2rem;
                font-size: 1rem;
                font-family: var(--Besley);
                background: linear-gradient(0deg, hsl(51, 100%, 49%) 0%, rgba(255,255,255,1) 42%);;
                border: none;
                transition: 0.5s;
                    &:hover{
                        background: var(--Yellow)
                    }
            }

        }
        .article_two{
            width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 5rem 4rem;
            h2{
                width: 100%;
                max-width: 35rem;
                font-size: 2.7rem;
                font-family: var(--Besley);
                font-weight: 900;
                line-height: 4rem;
                color: var(--Very-dark-desaturated-blue);
            }
            p{
                width: 100%;
                max-width: 28rem;
                line-height: 1.6rem;
                font-family: var(--Barlow);
                font-size: 1.1rem;
                color: var(--Very-dark-grayish-blue);
            }

            button{
                width: 100%;
                max-width: 10rem;
                height: 2rem;
                font-size: 1rem;
                font-family: var(--Besley);
                background: linear-gradient(0deg, hsl(7, 99%, 70%) 0%, rgba(255,255,255,1) 42%);
                border: none;
                transition: 0.5s;
                    &:hover{
                        background: var(--Soft-red)
                    }
            }
        }
        img{
            width: 100%;
            height: 40rem;
        }
        .graphic{
            height: 40rem;
            background: url(${cherry}) no-repeat;
            background-size: 100% 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
                h2{
                    color: var(--Dark-desaturated-cyan);
                    margin-bottom: 2rem;
                    font-size: 2.2rem;
                    font-weight: 700;
                    font-family: var(--Besley);
                }
                p{
                    width: 100%;
                    max-width: 25rem;
                    font-family: var(--Barlow);
                    color: var(--Dark-desaturated-cyan);
                    text-align: center;
                    font-size: 1.2rem;
                    margin-bottom: 2rem;
                }
        }
        .photography{
            height: 40rem;
            background: url(${Fruit_orange}) no-repeat;
            background-size: 100% 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
                h2{
                    color: var(--Dark-blue);
                    margin-bottom: 2rem;
                    font-size: 2.2rem;
                    font-weight: 700;
                    font-family: var(--Besley);
                }
                p{
                    width: 100%;
                    max-width: 25rem;
                    font-family: var(--Barlow);
                    color: var(--Dark-blue);
                    text-align: center;
                    font-size: 1.2rem;
                    margin-bottom: 2rem;
                }
        }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(1, 1fr);
        .article_one{
            text-align: center;
            align-items: center;
                h2{
                    font-size: 2rem;
                    max-width: 25rem;
                }
                p{
                    max-width: 20rem;
                }
        }
        .article_two{
            text-align: center;
            align-items: center;
                h2{
                    font-size: 2rem;
                    max-width: 25rem;
                }
                p{
                    max-width: 20rem;
                }
        }
        .graphic{
            height: 30rem;
            h2{
                font-size: 1.8rem;
            }
            p{
                max-width: 19rem;
                font-size: 0.9rem;
            }
        }
        .photography{
            height: 30rem;
            h2{
                font-size: 1.8rem;
            }
            p{
                max-width: 19rem;
                font-size: 0.9rem;
            }
        }
    }
`;

export const Egg = styled.image`
    width: 100%;
    max-width: 3rem;
`;