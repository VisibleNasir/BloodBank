document.getElementById("donorForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const donorData = new FormData();
    donorData.append("username", document.getElementById("username").value);
    donorData.append("password", document.getElementById("password").value);
    donorData.append("profilePic", document.getElementById("profilePic").files[0]);
    donorData.append("name", document.getElementById("name").value);
    donorData.append("age", document.getElementById("age").value);
    donorData.append("bloodType", document.getElementById("bloodType").value);
    donorData.append("contact", document.getElementById("contact").value);
    donorData.append("address", document.getElementById("address").value);

    try {
        const response = await fetch("http://localhost:3000/api/donors", {
            method: "POST",
            body: donorData,
        });
        const result = await response.json();

        if (result.success) {
            alert("Registration successful!");
        } else {
            alert("Registration failed. Try again.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
