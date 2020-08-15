import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { 
  Container, 
  Content,
  ButtonContainer,
  ButtonContainer2
} from './styles'

function Menu_Top() {
  return (
    <>
      <Container>
        <Content>
          <ButtonContainer>
              <button><IoIosArrowBack size={25}/></button>
              <button><IoIosArrowForward size={25}/></button>
          </ButtonContainer>
          <ButtonContainer2>
              <button>Inscreva-se</button>
              <button>Entrar</button>
          </ButtonContainer2>
        </Content>
      </Container>
    </>
  );
}

export default Menu_Top;