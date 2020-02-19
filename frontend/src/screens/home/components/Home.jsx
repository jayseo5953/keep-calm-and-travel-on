import React from 'react';
import SearchBar from './SearchBar'
import Header from '../../../components/Header/Header'
import Parallax from '../../../components/Parallax/Parallax'


const Home = () => {
  return (
    <div>
      <Header 
       color="transparent" 
       brand="J.T.P"
       fixed
       changeColorOnScroll={{
         height: 400,
         color: "white"
       }}
      />
      <Parallax filter image={require("../../../assets/img/landing-bg.jpg")}>
        <main>
          <h1>Keep calm and carry on.</h1>
          <h4>Enter where you want to go or set your budget and
              we'll pick the destination for you!</h4>
        <SearchBar />
      </main>

      </Parallax>
      
    </div>
  );
};

export default Home;
