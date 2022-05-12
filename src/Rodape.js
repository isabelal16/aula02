import React from 'react';

const Rodape = () => {
 
    require("./Rodape.css")

return(

    <div className='rodape'>
        <div>

            <h1>Serviços</h1>
            <p>Pronta-entrega</p>
            <p>Delivery</p>
            <p>Encomenda</p>
            <p>Loja Física</p>

        </div>
       

        <div>

            <h1>Encomendas para</h1>
            <p>Casamentos</p>
            <p>Festas</p>
            <p>Aniversários</p>
            <p>Entre outros</p>
        </div>

        <div>

            <h1>Lojas físicas em:</h1>
            <p>São Carlos</p>
            <p>São Paulo</p>
            <p>Ribeirão Preto</p>
            <p>Rio de Janeiro</p>

        </div>

        <div>

            <h1>Contatos</h1>
            <p>Donutsisa@gmail.com</p>
            <p>donuts_gourmet</p>
            <p>Donuts Isa</p>
            <p>(16) 99345-5969</p>

        </div>

    </div>


);
}

export default Rodape;