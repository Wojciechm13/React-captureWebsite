import styled from 'styled-components';


export const SAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

export const SDescription = styled.div`
    flex:1;
    padding-right:5rem;
    font-weight:lighter;
`;

export const SImage = styled.div`
    flex:1;
    overflow:hidden;
    img{
        width:100%;
        height:80vh;
        object-fit:cover;
    }
`;

export const SHide = styled.div`
    overflow:hidden;
`;

