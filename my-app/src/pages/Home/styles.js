import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 15rem auto;
  grid-template-rows: 5rem auto;

  > section:nth-child(2) {
    grid-column-start: 2;
    grid-column-end: 2;

    position: sticky;
    top: 0;
    
  }
  > section:nth-child(3) {
    grid-column-start: 2;
    grid-column-end: 2;

    display: flex;
    justify-content: center;
    
  }
  > section:nth-child(4) {
    grid-column-start: 2;
    grid-column-end: 2;

    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
  }
  > section:nth-child(5) {
    grid-column-start: 2;
    grid-column-end: 2;

    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
  }
  > section:nth-child(6) {
    grid-column-start: 2;
    grid-column-end: 2;

    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
  }

@media (max-width: 1000px) {
  > section:nth-child(4) {
    
      > div:nth-last-child(1) {
        display: none
      }
  }
}
@media (max-width: 850px) {
  > section:nth-child(4) {
    
      > div:nth-last-child(2) {
        display: none
      }
  }
}
@media (max-width: 1000px) {
  > section:nth-child(6) {
    
      > div:nth-last-child(1) {
        display: none
      }
  }
}
@media (max-width: 850px) {
  > section:nth-child(6) {
    
      > div:nth-last-child(2) {
        display: none
      }
  }
}
`;
