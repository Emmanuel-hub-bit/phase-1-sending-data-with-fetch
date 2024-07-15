function submitData(name, email) {
    // Create the data object to be sent in the body
    const data = {
        name: name,
        email: email
    };

    // Use fetch to make a POST request
    return fetch('http://localhost:3000/users', {
        method: 'POST', // Specify the request method
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
            'Accept': 'application/json' // Set the accept header to JSON
        },
        body: JSON.stringify(data) // Convert the data object to a JSON string
    })
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        // Log the response data
        console.log('Success:', data);
        // Access the newly assigned id and append it to the DOM
        const newId = data.id;
        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${newId}`;
        document.body.appendChild(idElement);
    })
    .catch(error => {
        // Log any errors
        console.error('Error:', error);
        // Access the error message and append it to the DOM
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessage);
    });
}

// Example usage:
submitData('John Doe', 'john.doe@example.com');
