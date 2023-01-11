import React from 'react';
import GlobalStyle from './styles/globalStyle';
import Header  from "./components/header/header";
import Orange from "./components/main orange/orange";
import Container from "./components/main/main";
import Testmunials from './components/Testmonials/Testmonials';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Orange />
      <Container />
      <Testmunials />
    </>
  );
};

export default App;
