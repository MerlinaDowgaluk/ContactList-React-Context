import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext.js";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const [ name, setName ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");
    const navigate = useNavigate();

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        const newContact = {
            full_name: name,
            address: address,
            phone: phone,
            email: email,
            agenda_slug: 'Merlina'
        };
        actions.createContact(newContact);
        navigate('/')
    }

    return (
        <div className="bg-light border-0">
            <h1 className="text-center mt-3">Add new Contact</h1>
            <form onSubmit={handleOnSubmit}>
                <div className="container">
                <div className="justify-content-center">
                <div className="m-3">
                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputFullName" aria-describedby="fullName" placeholder="Full Name" 
                    value={name} onChange={(e) =>{setName(e.target.value)}}/>
                </div>
                <div className="m-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter mail"
                    value={email} onChange={(e) =>{setEmail(e.target.value)}} />
                </div>
                <div className="m-3">
                    <label for="exampleInputEmail1" class="form-label">Phone</label>
                    <input type="number" className="form-control" id="exampleInputPhone" aria-describedby="phone" placeholder="Enter phone"
                    value={phone} onChange={(e) =>{setPhone(e.target.value)}}/>
                </div>
                <div className="m-3">
                    <label for="exampleInputEmail1" class="form-label">Adress</label>
                    <input type="text" className="form-control" id="exampleInputAdress" aria-describedby="adress" placeholder="Enter address"
                    value={address} onChange={(e) =>{setAddress(e.target.value)}}/>
                </div>
                <div class="justify-content-center d-flex">
                    <button type="submit" className="btn btn-success color-button m-3 col-4">Submit</button>
                </div>
                <Link className="m-3 text-dark" to="/"> or get back to contacts.</Link>
                </div>
                </div>
            </form>
            
        </div>
    )
}
