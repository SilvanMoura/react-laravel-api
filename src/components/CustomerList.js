import React, { Component } from 'react';
import Customer from "./Customer";

class CustomerList extends Component{
    render(){
        return(
            <div className='data'>
                <table className='ui celled table'>
                    <thead>
                        <tr>
                            <th style={{ width:"50px", textAlign:"center" }}>#</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th style={{ width:"165px"}}>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        <Customer />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CustomerList;