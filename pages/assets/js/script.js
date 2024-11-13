

function registerAsDonor() {
    window.location.href = "BloodBank-Chaincare/Donor/menu/Login_Donor.html";
}


function requestBlood() {
    window.location.href = "BloodBank-Chaincare/patient/menu/Patient_Login.html"; 
}


document.getElementById('donor-button').addEventListener('click', registerAsDonor);
document.getElementById('patient-button').addEventListener('click', requestBlood);



// Admin Login 
const adminUsername = "VisibleNasir";
const adminPassword = "visible123"; 


const loginForm = document.getElementById('adminLoginForm');
const errorMessage = document.getElementById('message');


loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    

    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;


    if (username === adminUsername && password === adminPassword) {

        console.log("Login successful! Redirecting...");
        window.location.href = 'admin_Dashboard.html';
    } else {

        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Invalid username or password.';
    }
});


