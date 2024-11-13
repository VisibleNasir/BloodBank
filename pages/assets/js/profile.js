// Sample donor data
const donorData = {
    name: "Nasir A Rajak Nadaf",
    bloodGroup: "O+",
    email: "nasir7777786@gmail.com",
    phone: "7822259525",
    address: "123 Main St, Solapur",
    lastDonation: "October 30, 2024",
    numDonations: 1
};

// Back button with confirmation
document.getElementById("backButton").addEventListener("click", function () {
    window.location.href = "DashBoard.html";
});

// Function to open modal and pre-fill profile data for editing
function editProfile() {
    document.getElementById("emailEdit").value = donorData.email;
    document.getElementById("phoneEdit").value = donorData.phone;
    document.getElementById("addressEdit").value = donorData.address;
    document.getElementById("editProfileModal").style.display = "flex";
}

// Function to save profile changes
function saveProfileChanges() {
    const updatedEmail = document.getElementById("emailEdit").value;
    const updatedPhone = document.getElementById("phoneEdit").value;
    const updatedAddress = document.getElementById("addressEdit").value;

    document.getElementById("email").innerText = updatedEmail;
    document.getElementById("phone").innerText = updatedPhone;
    document.getElementById("address").innerText = updatedAddress;

    donorData.email = updatedEmail;
    donorData.phone = updatedPhone;
    donorData.address = updatedAddress;

    closeModal("editProfileModal");
}

// Function to show donation history modal
function showDonationHistory() {
    document.getElementById("donationHistory").innerText = "Fetching history...";

    setTimeout(() => {
        document.getElementById("donationHistory").innerText = 
            "• Blood Donation on October 30, 2024\n• Blood Donation on April 15, 2024";
    }, 1000);

    document.getElementById("donationHistoryModal").style.display = "flex";
}

// Utility function to close modals
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modals on outside click
window.onclick = function(event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};
