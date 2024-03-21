import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext.js";

export const UpdateContact = () => {
    const { store, actions } = useContext(Context);
    const [ name, setName ] = useState(store.currentContact.full_name);
    const [ address, setAddress ] = useState(store.currentContact.address);
    const [ phone, setPhone ] = useState(store.currentContact.phone);
    const [ email, setEmail ] = useState(store.currentContact.email);
    const [ status, setStatus ] = useState(store.currentStatus.status)
    const navigate = useNavigate();

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        const contact = {
            full_name: name,
            address: address,
            phone: phone,
            email: email,
            agenda_slug: 'Merlina'
        };
        actions.actualiceContact(contact);
        actions.handleActualiceStatusContact(store.currentContact.id, status)
        navigate('/')
    }

    return (
        <div className="bg-light border-0">
            <h1 className="text-center mt-3">Modify Contact</h1>
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
                <div className="m-3">
                <p className="form-label">Status client</p>
                <select className="form-select" value={status} onChange={e => setStatus(e.target.value)}>
					<option value="Cliente potencial de ventas">Cliente potencial de ventas</option>
					<option value="Cliente potencial">Cliente potencial</option>
					<option value="Cliente">Cliente</option>
				</select>
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