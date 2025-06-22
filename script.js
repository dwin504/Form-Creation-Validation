fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer <your_token>',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'New Data',
        description: 'Important information'
    }) // it should be changed to string
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); 
})
.then(data => {
    console.log('Success:', data);
})
.catch(error => {
    console.error('Error:', error);
});
Now try to write the above in async / await, before you see the implementation below.

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); 
    console.log('Success:', data); 
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();