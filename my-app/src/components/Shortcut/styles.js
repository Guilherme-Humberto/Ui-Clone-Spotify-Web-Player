import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 0 4%;

  > p {
      color: #ccc;
      font-size: 14px;
      font-family: Roboto;
  }
  
`;
export const ContentText = styled.div`
    > p:nth-child(1) {
        color: white;
        font-family: Roboto;
        font-weight: bold;
        font-size: 25px;
        padding: 10px 0;
    }
    > p:nth-child(2) {
        color: #ccc;
        font-family: Roboto;
        font-size: 14px;
    }
`;
