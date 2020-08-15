import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-image: linear-gradient(90deg,#af2896,#509bf5);
  height: 10%;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;

    > button {
        margin: 0 20px;
        background: white;
        border: transparent;
        outline: none;
        color: purple;
        font-family: Hind;
        letter-spacing: 2px;
        border-radius: 25px;
        font-size: 13px;
        font-weight: 600;
        padding: 6px 47px;
    }
`
export const Texts = styled.div`
    margin: 0 10px;
    > p:nth-child(1) {
        color: white;
        font-family: Montserrat;
        font-size: 12px;
        padding-bottom: 5px;
    }
    > p:nth-child(2) {
        color: white;
        font-family: Hind;
        font-weight: bold;
        font-size: 14px;
        padding-bottom: 5px;
    }
`
