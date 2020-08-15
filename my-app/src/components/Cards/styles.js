import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 5px;
`;

export const Content = styled.div`
    background: #282828;
    width: 11.5rem;
    height: 16rem;
    margin: 20px 5px;
    border-radius: 6px;
    text-align: center;
    padding: 20px 0;

    > p {
        text-align: left;
        padding: 0 20px;
    }

    > p:nth-child(2) {
        margin: 10px 0;
        color: white;
        font-size: 16px;
        font-family: Roboto;
        font-weight: bolder;
    }
    > p:nth-child(3) {
        color: white;
        font-size: 12px;
        font-family: Hind;
        color: #cccc;
    }
    
`