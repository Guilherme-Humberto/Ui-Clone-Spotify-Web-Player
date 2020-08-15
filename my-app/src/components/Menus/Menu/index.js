import React from "react";
import { FaHeart, FaPlus } from 'react-icons/fa'

import {
  Container,
  MenuContainer,
  Content,
  Logo,
  Navs,
  NavsSecundary,
  InfoContainer
} from "./styles";

import data from '../../data/index'

function Menu() {
  return (
    <Container>
      <MenuContainer>
        <Content>
          <Logo>
            {data[0].logo}
          </Logo>
          <Navs>
            <button>{data[1].nav1}<p>Início</p></button>
            <button>{data[1].nav2}<p>Buscar</p></button>
            <button>{data[1].nav3}<p>Sua Biblioteca</p></button>
          </Navs>
          <NavsSecundary>
            <p>PLAYLISTS</p>
            <button>
              <div><FaPlus size={20}/></div>
              <p>Criar playlist</p>
            </button>
            <button>
              <div><FaHeart /></div>
              <p>Músicas Curtidas</p>
            </button>
          </NavsSecundary>
          <hr />
          <InfoContainer>
            <p>Cookies</p>
            <p>Privacidade</p>
          </InfoContainer>
        </Content>
      </MenuContainer>
    </Container>
  );
}

export default Menu;
