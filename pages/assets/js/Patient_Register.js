document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve input values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const age = document.getElementById("age").value.trim();
    const bloodGroup = document.getElementById("bloodGroup").value.trim();
    const disease = document.getElementById("disease").value.trim();
    const doctorName = document.getElementById("doctorName").value.trim();
    const address = document.getElementById("address").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const profilePic = document.getElementById("profilePic").files.length;

    // Display error if any field is empty
    const errorMessage = document.getElementById("registerMessage");
    if (!firstName || !lastName || !username || !password || !age || !bloodGroup || !disease || !doctorName || !address || !mobile || profilePic === 0) {
        errorMessage.textContent = "Please fill in all fields.";
        errorMessage.style.display = "block";
        errorMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
        errorMessage.style.display = "none";
        alert("Registration successful!");
        document.getElementById("registerForm").reset();
    }
});
