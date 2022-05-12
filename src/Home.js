import React from 'react';
import Menu from './Menu.js';
import Produtos from './Produtos.js';
import Painel from "./Painel.js";
import Rodape from "./Rodape.js";


const Home = (props) => {

    
    const [quantidade_itens, adiciona_item] = React.useState(0);
    


    return(

        <div>

            <Menu quantidade_itens={quantidade_itens}/>
        <div/>
    
    <div>

        <Painel/>
      
    </div>

    <div className="container">
    
     <Produtos adiciona_item = {adiciona_item} quantidade_itens = {quantidade_itens}/>

    </div>

    <div>

    <Rodape/>

    </div>

    
    </div>
    );

}
export default Home;