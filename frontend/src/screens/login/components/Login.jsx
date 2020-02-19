import React from 'react';

import Header from '../../../components/Header/Header'
import Parallax from '../../../components/Parallax/Parallax'
import GridContainer from '../../../components/Grid/GridContainer'
import GridItem from '../../../components/Grid/GridItem'


const Login = () => {
  console.log('show me login page')
  return (
    <div>
      {/* <h2>Login</h2>
       */}
       <Header 
       color="transparent" 
       brand="LIGHTHOUSE LABS"
       fixed
      />
      <Parallax 
      filter image={require("../../../assets/img/miami-bg.jpg")}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>




          </GridItem>
        </GridContainer>
      </Parallax>
    </div>
  );
};

export default Login;
