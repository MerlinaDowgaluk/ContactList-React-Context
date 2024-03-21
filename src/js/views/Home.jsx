import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const handleDelete = (id) => {
		actions.deleteContact(id)
	};

	const handleActualice = (id) => {
		actions.getcurrentId(id);
		navigate('/update-contact')
	}

	return (
	store.statusClient.length < 1 ?
	<div class="spinner-border" role="status">
  		<span class="visually-hidden">Loading...</span>
	</div>
	:
	<div className="text-center mt-5 m-4">
			  {store.user.map((item, index) => {
                return <div className="row g-0 m-2 justify-content-center">
						<div className="col-8 border rounded border-4 d-flex p-2">
						<div className="col-md-3 ms-5 mt-2">
						  <p className="bg-dark rounded-circle pt-4" style={{borderRadius: '50%', width: '100px', height: '100px'}}>{item.full_name[0]}</p>
						</div>
						<div className="col-md-5">
						  <div className="card-body text-start">
							<h4 className="card-title m-1">{item.full_name}</h4>
							<h5 className="card-text m-1 text-secondary">{store.statusClient[index].status}</h5>
							<p className="card-text m-1 text-secondary"><i class="fas fa-map-pin pe-2"></i>{item.address}</p>
							<p className="card-text m-1 text-secondary"><i class="fas fa-phone pe-2"></i>{item.phone}</p>
							<p className="card-text m-1 text-secondary"><i class="fas fa-envelope pe-2"></i>{item.email}</p>
						  </div>
						</div>
						<div className="col-md-3 text-end mt-2 border-0">
							<span type="button" onClick={()=>{handleActualice(item.id)}} className="border-0 text-dark bg-white"><i className="far fa-edit fa-lg p-2 pe-4"></i></span>
							<span type="button" onClick={()=>{handleDelete(item.id)}} className="border-0 text-dark bg-white"><i className="fas fa-trash-alt fa-lg p-2 ps-4"></i></span>
						</div>
						</div>
				  		</div>
                    })}
			<div className="justify-content-center d-flex p-2">
			<span className="list-group-item bg-light text-end fw-lighter col-8 m-2 p-2 border-3 rounded">
                        {store.user.length === 0 ? "No contacts, add one please" : store.user.length + " contacts."}
            </span>
			</div>
	</div>
	
)}
