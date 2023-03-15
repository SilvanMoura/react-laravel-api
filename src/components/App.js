import React, { useState, useEffect } from "react";
import axios from "axios";
import MyForm from "./MyForm";
import CustomerList from "./CustomerList";
import "./app.css";

const App = () => {

    const [customers, setCustomers] = useState([]);

    const url = "http://localhost:8000/api/index";

    const getCustomers = async () => {
        const customers = await axios.get(url);
        setCustomers({ customers: customers.data});
    }

    useEffect(() => {
        getCustomers();
    }, []);

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
                <MyForm />

                <CustomerList customers={customers} />
            </div>
        </div>
    )
}

/* class App extends Component{

    state = {
        customers: [],
        url: "http://localhost:8000/api/index"
    }

    getCustomers = async () => {
        const customers = await axios.get(this.state.url);
        this.setCustomers({ customers: customers.data});
    }

    componentDidMount(){
        this.getCustomers();
    }

    const [cutomers, setCustomers] = useState([]);

    render(){
        
    }
} */

export default App;