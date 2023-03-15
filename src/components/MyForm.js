import React from "react";

const MyForm = ()=>{
    return(
        <form className="ui form">
            <div className="fields">

                <div className="four wide field">
                    <label>Nome:</label>
                    <input type="text" name="firstName" placeholder="Digite seu nome" />
                </div>

                <div className="four wide field">
                    <label>Sobrenome:</label>
                    <input type="text" name="lastName" placeholder="Digite seu sobrenome" />
                </div>

                <div className="four wide field">
                    <label>E-mail:</label>
                    <input type="email" name="email" placeholder="example@example.com" />
                </div>

                <div className="four wide field">
                    <button className="ui primary button submit-button">Salvar</button>
                </div>

            </div>
        </form>
    )
    
}

export default MyForm;