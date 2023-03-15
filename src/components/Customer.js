import React from 'react';
import axios from 'axios';

const Customer = (props)=>{
    
    const {id, firstName, lastName, email} = props.customer;

    const onDelete = async ()=>{ 
        const ret = await axios.delete("http://localhost:8000/api/delete/"+id);
        
        if (ret.status == 200) window.location.reload();
    };

    /* const onEdit = async ()=>{
        const ret = await axios.put("http://localhost:8000/api/update/"+id, props.customer);
        console.log(ret);
    } */

    return(
        <tr>
            <td style={{ textAlign:"center" }}>{id}</td>
            <td>{firstName} {lastName}</td>
            <td>{email}</td>
            <td>
                <button className='mini ui blue button' /* onClick={ () => onEdit() } */>Editar</button>
                <button className='mini ui red button' onClick={ () => onDelete() }>Deletar</button>
            </td>
        </tr>
    )
    
}

export default Customer;