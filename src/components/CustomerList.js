import React from 'react';
import Customer from "./Customer";

const CustomerList = ({userInfo, onEdit}) =>{
    
    let customers = userInfo.customers;

    const showStatus = (customer)=>{
        onEdit(customer);
    }

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
                        customers?.map( (customers, key) => {
                        return <Customer customer = {customers} key={key} onStatus={(customer)=>showStatus(customer)}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CustomerList;