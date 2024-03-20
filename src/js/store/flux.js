const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: 'https://playground.4geeks.com/apis/fake/contact',
			agenda: 'Merlina',
			user:[],
			currentId: '',
			statusClient: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getContacts: async () =>{
				const url = getStore().baseUrl + '/agenda/' + getStore().agenda;
				const options = {
					method: 'GET',
				};
				const response = await fetch(url, options);
				if (response.ok){
					const data = await response.json();
					console.log(data);
					setStore({user: data});
					getActions().handleStatusContact()
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			handleStatusContact: () =>{
				let arr = []
				getStore().user.map(i =>{
					arr.push({'id': i.id, 'status': 'Cliente potencial'})
				})
				setStore({statusClient: arr});
				localStorage.setItem('status', JSON.stringify(arr))
			},
			createContact: async(newContact) =>{
				const url = getStore().baseUrl;
				const options = {
					method: "POST",
            		headers: {
                		"Content-Type": "application/json",
            		},
            		body: JSON.stringify(newContact)
				}
				const response = await fetch(url, options);
				if (response.ok){
					const data = await response.json();
					getActions().getContacts();
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			getcurrentId: (id) =>{
				setStore({currentId: id})
			},
			actualiceContact: async (contact) =>{
				const url = getStore().baseUrl + '/' + getStore().currentId;
				const options = {
					method: 'PUT',
            		headers: {
                		"Content-Type": "application/json",
            		},
            		body: JSON.stringify(contact)
				}
				const response = await fetch(url, options);
				if (response.ok){
					const data = await response.json();
					getActions().getContacts();
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			deleteAgenda: async() =>{
				const url = getStore().baseUrl + '/agenda/' + getStore().agenda;
				console.log(url);
        		const options = {
            		method: 'DELETE',
        		};
        		const response = await fetch(url, options);
				console.log(response);
        		if (response.ok){
            		//const data = await response.json();
					//getActions().getContacts();
					setStore({user: []})
				} else {
           			 console.log('Error: ', response.status, response.statusText)
        		}
				
			},
			deleteContact: async(id) =>{
				const url = getStore().baseUrl + '/' + id;
        		const options = {
            		method: "DELETE"
        		};
        		const response = await fetch(url, options);
        		if (response.ok){
            		const data = await response.json();
            		console.log(data);
					getActions().getContacts();
				} else {
           			 return ('Error: ', response.status, response.statusText)
        		}
			}

		}
	};
};

export default getState;
