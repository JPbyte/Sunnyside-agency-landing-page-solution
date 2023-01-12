import { createGlobalStyle  } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        width: 100%;
        min-height: 100vh;
        font-family: var(--Fraunces);
    }
    button{
        cursor: pointer;
    }
    :root {
        --Soft-red: hsl(7, 99%, 70%);
        --Yellow: hsl(51, 100%, 49%);
        --Dark-desaturated-cyan: hsl(167, 40%, 24%);
        --Dark-blue: hsl(198, 62%, 26%);
        --Dark-moderate-cyan: hsl(168, 34%, 41%);
        --Very-dark-desaturated-blue: hsl(212, 27%, 19%);
        --Very-dark-grayish-blue: hsl(213, 9%, 39%);
        --Dark-grayish-blue: hsl(232, 10%, 55%);
        --Grayish-blue: hsl(210, 4%, 67%);
        --White: hsl(0, 0%, 100%);
        --Barlow: 'Barlow', sans-serif;
        --Besley:'Besley', sans-serif;
    }
    @keyframes float {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(20px);
        }
        100% {
            transform: translateY(0);
        }
    }
    @keyframes rotate {
        to{
            transform: rotate(0deg);
        }
        from{
            transform: rotate(360deg);
        }
    }
`;

export default GlobalStyle;