import React from 'react';
import Menu from '../../components/Menus/Menu/index'
import MenuTop from '../../components/Menus/Menu-Top';
import MenuBottom from '../../components/Menus/MenuBottom';
import { Container } from './styles'
import Cards from '../../components/Cards';

import data from '../../components/data/index'
import Shortcut from '../../components/Shortcut';

function Home() {
  return (
      <>
        <Container>
          <section><Menu /></section>
          <section><MenuTop /></section>
          <section>
            <Shortcut 
              title="Foco"
              desc="Músicas para ajudar na concentração"
            />
          </section>
          <section>
            <div>
            <Cards 
              img={data[2].card1}
              title="Trabalhando..."
              desc="Uma seleção de hits pra te acompanhar no home..."
            />
            </div>
            <div>
            <Cards 
              img={data[2].card2}
              title="Foco com Energia"
              desc="Beats instrumentais para te ajudar a focar mantendo o..."
            />
            </div>
            <div>
            <Cards 
              img={data[2].card3}
              title="Home Office"
              desc="Uma seleção good vibes pra você trabalhar de boa!"
            />
            </div>
            <div>
            <Cards 
              img={data[2].card4}
              title="Foco no Estudo"
              desc="Piano instrumental para ajudar sua concentração n..."
            />
            </div>
            <div>
            <Cards 
              img={data[2].card5}
              title="Lo-Fi Beats"
              desc="Beats to relax and focus."
            />
            </div>
            <div>
            <Cards 
              img={data[2].card6}
              title="Peaceful Piano"
              desc="Relax and indulge with beautiful piano pieces"
            />
            </div>
          </section>
          <section>
            <Shortcut 
              title="Playlists de podcasts"
            />
          </section>
          <section>
            <div>
              <Cards 
                img={data[2].card7}
                title="Podcasts que V"
                desc="Querendo descobrir novos podcasts? Então essa é a..."
              />
            </div>
            <div>
            <Cards 
              img={data[2].card8}
              title="Podcasts com A"
              desc="Podcasts com episódios curtinhos para entreter e..."
            />
            </div>
            <div>
            <Cards 
              img={data[2].card9}
              title="Os Melhores Po"
              desc="Os melhores episódios dos últimos 7 dias. Atualizada..."
            />
            </div>
            <div>
            <Cards 
              img={data[2].card10}
              title="Acalmando a M"
              desc="Tire um tempinho para cuidar de você."
            />
            </div>
            <div>
            <Cards 
              img={data[2].card11}
              title="Crime e Suspense"
              desc="Você vai se arrepiar com essas histórias de crime..."
            />
            </div>
            <div>
            <Cards 
              img={data[2].card12}
              title="Rindo Alto"
              desc="Abra um sorriso e anime seu dia com esses..."
            />
            </div>
          </section>
        </Container>
        <MenuBottom />
      </>
  );
}

export default Home;