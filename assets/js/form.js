console.log('starting Event Listener');
document.querySelector('.guestform').addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('pnumber').value,
        homeAddress: document.getElementById('addr').value,
        age: document.getElementById('age').value,
        creditCardBalance: document.getElementById('balance').value,
        identityCode: document.getElementById('icode').value,
        yearsInIndustry: document.getElementById('years').value,
        passwordLength: document.getElementById('plength').value
    };

    console.log(formData);

    // Format formData into a readable string
    let formDataString = '';
    for (let key in formData) {
        formDataString += `${key}: ${formData[key]}<br>`;
    }

    // Update the content of the span element
    document.getElementById('formdata').innerHTML = formDataString;
});
