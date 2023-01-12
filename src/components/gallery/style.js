import styled from "styled-components";

export const GalleryDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 28rem;
        .milk, .orange, .cone, .sugar{
            height: 100%;
            width: 100%;
        }
`;