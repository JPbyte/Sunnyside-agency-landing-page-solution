import styled from "styled-components";

export const TestmunialsDiv = styled.div`

    height: 55rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
        h3{
            font-size: 1.4rem;
            letter-spacing: 0.6rem;
            font-family: var(--Besley);
            color: var(--Grayish-blue);
        }
        .perfil_geral{
            width: 100%;
            max-width: 80rem;
            display: flex;
            justify-content: space-between;
                .perfil_1{
                    width: 100%;
                    max-width: 23rem;
                    height: 18rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                        p{
                            text-align: center;
                            font-size: 1.1rem;
                            font-family: var(--Barlow);
                            font-weight: 700;
                            color: var(--Very-dark-grayish-blue);
                        }
                        .image-P1{
                            position: relative;
                                &::after{
                                content: "";
                                left: -0.1rem;
                                top: -0.1rem;
                                height: 5.2rem;
                                width: 5.2rem;
                                position: absolute;
                                background: rgb(25,83,107);
                                background: linear-gradient(193deg, hsl(7, 99%, 70%) 50%, hsl(51, 100%, 49%) 48%);
                                border-radius: 50%;
                                z-index: -1;
                                animation: rotate 1s infinite ease-in-out;
                            }
                            img{
                                width: 100%;
                                max-width: 5rem;
                                border-radius: 50%;
                                transition: 0.4s;
                                &:hover{
                                    transform: scale(1.02);
                                }
                            }
                        }
                        h4{
                            text-align: center;
                            font-size: 1.3rem;
                            font-family: var(--Besley);
                        }
                        span{
                            color: var(--Grayish-blue);
                        }
                }
                .perfil_2{
                    width: 100%;
                    max-width: 23rem;
                    height: 18rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    transition: 0.4s;
                        p{
                            text-align: center;
                            font-size: 1.2rem;
                            font-family: var(--Barlow);
                            font-weight: 700;
                            color: var(--Very-dark-grayish-blue);
                        }
                        .image-P2{
                            position: relative;
                                &::after{
                                content: "";
                                left: -0.1rem;
                                top: -0.1rem;
                                height: 5.2rem;
                                width: 5.2rem;
                                position: absolute;
                                background: rgb(25,83,107);
                                background: linear-gradient(193deg, hsl(7, 99%, 70%) 50%, hsl(51, 100%, 49%) 48%);
                                border-radius: 50%;
                                z-index: -1;
                                animation: rotate 1s infinite ease-in-out;
                            }
                            img{
                                width: 100%;
                                max-width: 5rem;
                                border-radius: 50%;
                                transition: 0.4s;
                                &:hover{
                                    transform: scale(1.02);
                                }
                            }
                        }
                        h4{
                            text-align: center;
                            font-size: 1.3rem;
                            font-family: var(--Besley);
                        }
                        span{
                            color: var(--Grayish-blue);
                        }
                    }
                    .perfil_3{
                    width: 100%;
                    max-width: 23rem;
                    height: 18rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                        p{
                            text-align: center;
                            font-size: 1.2rem;
                            font-weight: 700;
                            font-family: var(--Barlow);
                            color: var(--Very-dark-grayish-blue);
                        }
                        .image-P3{
                            position: relative;
                                &::after{
                                content: "";
                                left: -0.1rem;
                                top: -0.1rem;
                                height: 5.2rem;
                                width: 5.2rem;
                                position: absolute;
                                background: rgb(25,83,107);
                                background: linear-gradient(193deg, hsl(7, 99%, 70%) 50%, hsl(51, 100%, 49%) 48%);
                                border-radius: 50%;
                                z-index: -1;
                                animation: rotate 1s infinite ease-in-out;
                            }
                            img{
                                width: 100%;
                                max-width: 5rem;
                                border-radius: 50%;
                                transition: 0.4s;
                                &:hover{
                                    transform: scale(1.02);
                                }
                            }
                        }
                        h4{
                            text-align: center;
                            font-size: 1.3rem;
                            font-family: var(--Besley);
                        }
                        span{
                            color: var(--Grayish-blue);
                        }
                }
        }
    @media (max-width: 1000px) {
        height: 75rem;
        h3{
            text-align: center;
            font-size: 1.2rem;
        }
        .perfil_geral{
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 61rem;
        }
    }
`;