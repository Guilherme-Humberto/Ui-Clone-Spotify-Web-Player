import React from 'react';

import { Container, ContentText } from './styles';

function Shortcut(props) {
  return (
      <>
        <Container>
            <ContentText>
                <p>{props.title}</p>
                <p>{props.desc}</p>
            </ContentText>
            <p>VER TUDO</p>
        </Container>
      </>
  );
}

export default Shortcut;