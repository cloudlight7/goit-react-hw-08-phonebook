import axios from 'axios';

axios.defaults.baseURL = `https://657a24e21acd268f9afac3d2.mockapi.io/`;


export const getContacts = async () => {

    const response = await axios.get(`contacts`, {
    });
    return response.data;

};

export const addContact = async contactData => {

    const response = await axios.post(`contacts`, contactData,{
    });
    return response.data;

};

export const deleteContact = async contactId => {

    //const ID = Number(contactId);
    //console.log(contactId);
    const response = await axios.delete(`contacts/${contactId}`, { 
    });
    return response.data;

};


/*
fetch('https://PROJECT_TOKEN.mockapi.io/tasks', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(tasks => {
  // Do something with the list of tasks
}).catch(error => {
  // handle error
})




const newTask = {
  content: 'Check out mockapi.io',
  completed: false,
};

fetch('https://PROJECT_TOKEN.mockapi.io/tasks', {
  method: 'POST',
  headers: {'content-type':'application/json'},
  // Send your data in the request body as JSON
  body: JSON.stringify(newTask)
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // do something with the new task
}).catch(error => {
  // handle error
})

fetch('https://<PROJECT_TOKEN.mockapi.io/tasks/1', {
  method: 'DELETE',
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with deleted task
}).catch(error => {
  // handle error
})
*/