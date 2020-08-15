import React from 'react';
import { Container, Content } from './styles';

function Cards(props) {
  return (
      <>
        <Container>
            <Content>
              {props.img}
              <p>{props.title}</p>
              <p>{props.desc}</p>
              
            </Content>
        </Container>
      </>
  );
}

export default Cards;