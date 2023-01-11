import React from 'react';
import GlobalStyle from './styles/globalStyle';
import Header  from "./components/header/header";
import Orange from "./components/main orange/orange";
import Container from "./components/main/main";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Orange />
      <Container />
    </>
  );
};

export default App;
