document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const message = document.getElementById('message').value;

    // Create a JSON object with the form data
    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        website: website,
        message: message
    };

    // Send the form data to the server using Fetch API
    fetch('https://automatedmail.onrender.com/goMail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
        console.log('Success:', data);
        alert('Form submitted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
