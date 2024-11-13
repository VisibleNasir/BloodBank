// Sample data for all blood types
const bloodStockData = [
    { bloodType: "A+", amountInStock: 15, totalDonors: 45, approvedRequests: 10, totalBloodUnits: 15 },
    { bloodType: "O-", amountInStock: 10, totalDonors: 30, approvedRequests: 5, totalBloodUnits: 10 },
    { bloodType: "B+", amountInStock: 20, totalDonors: 50, approvedRequests: 12, totalBloodUnits: 20 },
    { bloodType: "AB+", amountInStock: 8, totalDonors: 20, approvedRequests: 3, totalBloodUnits: 8 },
    { bloodType: "A-", amountInStock: 5, totalDonors: 15, approvedRequests: 2, totalBloodUnits: 5 },
    { bloodType: "O+", amountInStock: 25, totalDonors: 70, approvedRequests: 15, totalBloodUnits: 25 },
    { bloodType: "B-", amountInStock: 12, totalDonors: 35, approvedRequests: 7, totalBloodUnits: 12 },
    { bloodType: "AB-", amountInStock: 3, totalDonors: 10, approvedRequests: 1, totalBloodUnits: 3 }
];

// Function to render the blood stock cards dynamically
function renderBloodStockCards() {
    const container = document.querySelector('.blood-cards-container');
    container.innerHTML = ""; // Clear existing cards

    bloodStockData.forEach(blood => {
        const card = document.createElement('div');
        card.classList.add('blood-card');
        card.setAttribute('id', blood.bloodType);

        card.innerHTML = `
            <div class="card-header">
                <i class="fas fa-tint blood-icon"></i>
                <h3>${blood.bloodType}</h3>
            </div>
            <div class="card-body">
                <p><strong>Amount in Stock:</strong> ${blood.amountInStock} Units</p>
                <p><strong>Total Donors:</strong> ${blood.totalDonors}</p>
                <p><strong>Approved Requests:</strong> ${blood.approvedRequests}</p>
                <p><strong>Total Blood Units:</strong> ${blood.totalBloodUnits}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// Render the cards on page load
document.addEventListener("DOMContentLoaded", renderBloodStockCards);
