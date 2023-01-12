import styled from "styled-components";

export const TestmunialsDiv = styled.div`

    height: 35rem;
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
                        img{
                            width: 100%;
                            max-width: 5rem;
                            border-radius: 50%;
                            transition: 0.4s;
                                &:hover{
                                    transform: scale(1.02);
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
                        img{
                            width: 100%;
                            max-width: 5rem;
                            border-radius: 50%;
                                &:hover{
                                    transform: scale(1.02);
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
                        img{
                            width: 100%;
                            max-width: 5rem;
                            border-radius: 50%;
                            transition: 0.4s;
                                &:hover{
                                    transform: scale(1.02);
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