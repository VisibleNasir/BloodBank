document.getElementById('patientLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const patientData = JSON.parse(localStorage.getItem(username));

    if (patientData && patientData.password === password) {
        window.location.href = 'PatientDashBoard.html';
    } else {
        document.getElementById('errorMessage').textContent = "Incorrect username or password.";
    }
});
