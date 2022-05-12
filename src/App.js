import React from 'react';
import {useState} from 'react'

import Home from './Home.js';
import Cadastro from './Cadastro.js';



const App  = (props) => {

  
    
    require("./App.css")

    const [ tela, alteraTela] =  useState(0);


     if (tela == 0) {
      alteraTela (<Home alteraTela = {alteraTela} />)}

  
  return (
   
  <div>


   
      {tela}

    

  </div>

  );
}

export default App;
