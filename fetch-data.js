async function fetchUserData() {
    
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const dataContainer = document.getElementById('api-data');

    try{
      
       const response = await fetch(apiUrl);
       
       const users = await response.json();
       
       dataContainer.innerHTML = '';
       
       const userList = document.createElement('ul');
    
       //loop through each users and add to list

       users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);

       });
      //adding <ul> list
       
      dataContainer.appendChild(userList);

    }catch(error) {

        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('error fetching user data:',error);

    }
         
}

document.addEventListener('DOMContentLoaded',fetchUserData)