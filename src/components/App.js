import React, { useState, useEffect } from "react";
import axios from "axios";
import MyForm from "./MyForm";
import CustomerList from "./CustomerList";
import "./app.css";

const App = () => {

    const [customers, setCustomers] = useState([]);
    const [record, setRecord] = useState([]);

    const url = "http://localhost:8000/api/index";

    const getCustomers = async () => {
        const customers = await axios.get(url);
        setCustomers({ customers: customers.data});
    }

    useEffect(() => {
        getCustomers();
    }, []);

    const onEdit = (customer)=>{
        setRecord(customer);
    }

    return(
        <div>
            <div className="ui fixed inverted menu">
                <div className="ui container">
                    <a href="/#" className="header item">
                        Api usando laravel e react
                    </a>
                </div>
            </div>

            <div className="ui main container">
                <MyForm userRegistration={record} />

                <CustomerList userInfo={customers} onEdit={(customer)=>onEdit(customer)} />
            </div>
        </div>
    )
}

export default App;