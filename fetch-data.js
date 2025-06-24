async function fetchUserData() {
    
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const datacontainer = document.getElementById('api-data');

    try{
      
       const response = await fetch(apiUrl);
       
       const users = await response.json();
       
       datacontainer.innerHTML = '';
       
       const userlist = document.createElement('ul');
    
       //loop through each users and add to list

       users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userlist.appemdchild(listItem);

       });
      //adding <ul> list
       datacontainer.appendChild(userlist);

    }catch(error) {

        datacontainer.innerHTML = '';
        datacontainer.textContent = 'failed to load user data.';
        console.error('error fetching user data:',error);

    }
         
}

document.addEventListener('DOMContentLoaded',fetchUserData)