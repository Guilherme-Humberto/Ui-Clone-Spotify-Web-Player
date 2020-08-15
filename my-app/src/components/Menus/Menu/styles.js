import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
`;
export const MenuContainer = styled.div`
  background: #000000;
  position: fixed;
  height: 100%;
  width: 15rem;
`;

export const Content = styled.div`
  color: white;
  padding: 20px 10px;

  > hr {
    margin: 0 10%;
    border-bottom: transparent;
    border-left: transparent;
    border-right: transparent;
  }
`;

export const Logo = styled.div`
  width: 130px;
  margin: 0 10px;
`;
export const Navs = styled.div`
  margin: 30px 0;
  width: 100%;
  flex-wrap: wrap;

  > button:nth-child(1) {
    width: 100%;
    background: #282828;
    border: transparent;
    outline: none;
    color: white;
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    padding: 20px;

    > p {
      padding: 0 10px;
      font-family: Hind;
      letter-spacing: 1px;
      font-weight: 600;
      font-size: 14px;
    }
  }

  > button:nth-child(2) {
    width: 100%;
    background: transparent;
    border: transparent;
    outline: none;
    color: white;
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    padding: 20px;

    > p {
      padding: 0 10px;
      color: #B3B3B3;
      letter-spacing: 1px;
      font-family: Hind;
      font-weight: 600;
      font-size: 14px;
    }
  }
  > button:nth-child(3) {
    width: 100%;
    background: transparent;
    border: transparent;
    outline: none;
    color: white;
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    padding: 20px;

    > p {
      padding: 0 10px;
      color: #B3B3B3;
      letter-spacing: 1px;
      font-family: Hind;
      font-weight: 600;
      font-size: 14px;
    }
  }
`;

export const NavsSecundary = styled.div`
   margin: 15px 0;
   display: flex;
   flex-wrap: wrap;

   > p {
     padding: 15px 20px;
     color: #B3B3B3;
     letter-spacing: 1px;
     font-size: 14px;
     font-family: Hind;
     font-weight: bold
   }

   > button:nth-child(2) {
     width: 100%;
     background: transparent;
     border: transparent;
     outline: none;
     color: white;
     display: flex;
     align-items: center;
     height: 40px;
     border-radius: 5px;
     padding: 23px 20px;
     
     > div {
       background: white;
       color: black;
       width: 32px;
       height: 32px;
       padding: 4px;
       display: flex;
       -webkit-box-align: center;
       align-items: center;
       -webkit-box-pack: center;
       justify-content: center;
       flex-shrink: 0;
     }
     > p {
       color: #B3B3B3;
       letter-spacing: 1px;
       padding: 0 10px;
       font-family: Hind;
       font-weight: 600;
       font-size: 14px;
     }
   }
   > button:nth-child(3) {
     width: 100%;
     background: transparent;
     border: transparent;
     outline: none;
     color: white;
     display: flex;
     align-items: center;
     height: 40px;
     border-radius: 5px;
     padding: 20px;

     > div {
       background: linear-gradient(135deg, #450af5, #c4efd9);
       width: 32px;
       height: 32px;
       padding: 4px;
       display: flex;
       -webkit-box-align: center;
       align-items: center;
       -webkit-box-pack: center;
       justify-content: center;
       flex-shrink: 0;
     }
     > p {
       color: #B3B3B3;
       letter-spacing: 1px;
       padding: 0 10px;
       font-family: Hind;
       font-weight: 600;
       font-size: 14px;
     }
}
`;

export const InfoContainer = styled.div`
  padding: 15px 20px;
  margin-top: 10rem;

  > p {
    font-family: Hind;
    color: #B3B3B3;
    font-size: 13px;
  }
`