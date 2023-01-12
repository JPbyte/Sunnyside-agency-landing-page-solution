import styled from "styled-components";

export const GalleryDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 30rem;
        .milk, .orange, .cone, .sugar{
            height: 100%;
            width: 100%;
        }

    @media (max-width: 800px){
        height: 61rem;
        grid-template-columns: repeat(2, 1fr);
        div{
            width: 100%;
            height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                }
        }
    }
    @media (max-width: 500px) {
        height: 32rem;
    }
    @media (max-width: 400px){
        height: 30rem;
        grid-template-columns: repeat(2, 1fr);
        div{
            width: 100%;
            height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                }
        }
    }
`;