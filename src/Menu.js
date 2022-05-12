import React from 'react'
import Cadastro from './Cadastro'
import App from './App'





const Menu = (props ) => {
    
    const quantidade_itens = props.quantidade_itens
    const alteraTela = props.alteraTela

    require("./Menu.css")
    
    return(

    <div className="menu" >
            <div>
                <a href="#"><img width="50px "src="cat.png"></img></a>
            </div>

            <div className="carrinho">
                <a href="#">Carrinho <strong>{quantidade_itens}</strong></a>
            </div>

            <div>
                
                <a href='#'>Cadastro</a>
                <a href="#">Login</a>
                <a href="#" onClick={ () => alteraTela(<Cadastro alteraTela={alteraTela}/>)}>Pesquisar</a>
            </div>

    </div>


        );

}

export default Menu;