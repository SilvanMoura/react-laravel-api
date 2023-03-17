import React, { useState } from 'react';
import axios from 'axios';

const Customer = ({customer, onStatus})=>{
    
    const {id, firstName, lastName, email} = customer;

    //const [arrayRecord, setArrayRecord] = useState([id, firstName, lastName, email]);

    const onDelete = async ()=>{ 
        const ret = await axios.delete("http://localhost:8000/api/delete/"+id);
        
        if (ret.status === '200') window.location.reload();
    };

    const onEdit = ()=>{
        axios.get("http://localhost:8000/api/show/"+id)
        .then( response => {
            onStatus(response.data);
        });
        
    }

    return(
        <tr>
            <td style={{ textAlign:"center" }}>{id}</td>
            <td>{firstName} {lastName}</td>
            <td>{email}</td>
            <td>
                <button className='mini ui blue button' onClick={ () => onEdit() }>Editar</button>
                <button className='mini ui red button' onClick={ () => onDelete() }>Deletar</button>
            </td>
        </tr>
    )
    
}

export default Customer;