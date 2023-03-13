import React, { Component } from 'react';

class Customer extends Component{
    render(){
        return(
            <tr>
                <td style={{ textAlign:"center" }}>1</td>
                <td>Silvan Moura</td>
                <td>exemplo@exemplo.com</td>
                <td>
                    <button className='mini ui blue button'>Editar</button>
                    <button className='mini ui red button'>Deletar</button>
                </td>
            </tr>
        )
    }
}

export default Customer;