import React, {useState} from "react";
import axios from "axios";

const MyForm = ({userRegistration})=>{

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const actionEdit = ()=>{

        const userInfo = [firstName, lastName, email]; 

        axios.put("http://localhost:8000/api/update/"+userRegistration.id, userInfo)
    }

    const actionCreate = (e)=>{

        const userInfo = [firstName, lastName, email]; 

        axios.post("http://localhost:8000/api/store/", userInfo)
    }
        
    return(
        <form className="ui form">

            { userRegistration != '' &&
            <div className="fields">
            
                <div className="four wide field">
                    <label>Nome atual:</label>
                    <input type="text" id="firstName" name="firstName" placeholder="Digite seu nome" value={userRegistration.firstName} readOnly />
                </div>
                

                <div className="four wide field">
                    <label>Sobrenome atual:</label>
                    <input 
                        type="text" name="lastName" placeholder="Digite seu sobrenome" value={userRegistration.lastName} readOnly />
                </div>

                <div className="four wide field">
                    <label>E-mail atual:</label>
                    <input type="email" name="email" placeholder="example@example.com" value={userRegistration.email} readOnly />
                </div>
            
            </div>
            }

            <div className="fields">
            
                <div className="four wide field">
                    <label>Novo nome:</label>
                    <input type="text" id="firstName" name="firstName" placeholder="Digite seu nome" value={firstName} onChange={(event)=>{setFirstName(event.target.value)}} />
                </div>
                

                <div className="four wide field">
                    <label>Novo sobrenome:</label>
                    <input 
                        type="text" name="lastName" placeholder="Digite seu sobrenome" value={lastName} onChange={(event)=>{setLastName(event.target.value)}} />
                </div>

                <div className="four wide field">
                    <label>Novo e-mail:</label>
                    <input type="email" name="email" placeholder="example@example.com" value={email} onChange={(event)=>{setEmail(event.target.value)}} />
                </div>

                { userRegistration == '' 
                    ?   
                    <div className="four wide field">
                        <button className="ui primary button submit-button" onClick={(e)=>actionCreate(e)} >Salvar</button>
                    </div>
                    :
                    <div className="four wide field">
                        <button className="ui orange button submit-button" onClick={()=>actionEdit()}>Editar</button>
                    </div>
                }
                

                
            
            </div>
        </form>
    )
    
}

export default MyForm;