import React from 'react';
import Customer from "./Customer";

const CustomerList = (props) =>{
    
    let customers = props.customers.customers;

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
                    {
                        customers?.map( customers => {
                        return <Customer customer = {customers} key={customers.id} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CustomerList;