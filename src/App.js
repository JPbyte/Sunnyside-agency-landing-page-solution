import React from 'react';
import GlobalStyle from './styles/globalStyle';
import Header  from "./components/header/header";
import Orange from "./components/main orange/orange";
import Container from "./components/main/main";
import Testmunials from './components/Testimonials/Testmonials';
import Gallery from './components/gallery/gallery';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Orange />
      <Container />
      <Testmunials />
      <Gallery />
      <Footer />
    </>
  );
};

export default App;
