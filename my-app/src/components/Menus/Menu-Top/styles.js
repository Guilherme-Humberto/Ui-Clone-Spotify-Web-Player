import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
    background: #000000;
    color: white;
`;
export const ButtonContainer = styled.div`
    > button {
        background: transparent;
        border: transparent;
        outline: none;
        border-radius: 50%;
        color: #b3b3b3;
        margin: 10px;
    }
    @media (max-width: 850px) {
        > button:nth-child(2) {
            display: none
        }
    }
`;
export const ButtonContainer2 = styled.div`
    > button:nth-child(1) {
        margin: 0 20px;
        background: transparent;
        border: transparent;
        outline: none;
        color: white;
        font-family: Hind;
        letter-spacing: 2px;
        font-size: 16px;
        font-weight: 600;
        padding: 6px 17px;
    }
    > button:nth-child(2) {
        background: white;
        border: transparent;
        outline: none;
        font-family: Hind;
        border-radius: 25px;
        letter-spacing: 2px;
        font-size: 16px;
        font-weight: 600;
        padding: 6px 37px;
    }

`;
