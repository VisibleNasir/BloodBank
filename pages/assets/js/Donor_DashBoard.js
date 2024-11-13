document.addEventListener('DOMContentLoaded', () => {
    // Simulate Donor Profile Data
    const donorName = 'Nasir A Rajak Nadaf';
    const totalDonations = 1;
    const lastDonationDate = 'October 30, 2024';
    const nextEligibleDonation = 'January 30, 2025';

    // Populate Dashboard Data
    document.getElementById('donorName').textContent = donorName;
    document.getElementById('totalDonations').textContent = totalDonations;
    document.getElementById('lastDonationDate').textContent = lastDonationDate;
    document.getElementById('nextEligibleDonation').textContent = nextEligibleDonation;

    // Simulate Donation History Data
    const donationHistory = [
        { date: 'October 30, 2024', center: 'Central Blood Bank', bloodGroup: 'O+', status: 'Completed' },
        { date: 'September 20, 2024', center: 'City Blood Donation', bloodGroup: 'O+', status: 'Completed' }
    ];

    const donationHistoryTable = document.getElementById('donationHistoryTable');

    donationHistory.forEach(donation => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${donation.date}</td>
            <td>${donation.center}</td>
            <td>${donation.bloodGroup}</td>
            <td>${donation.status}</td>
        `;
        donationHistoryTable.appendChild(row);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const donateButton = document.getElementById('donateButton');
    const donationForm = document.getElementById('donationForm');
    const closeFormButton = document.getElementById('closeForm');
    const donationFormDetails = document.getElementById('donationFormDetails');

    // Show the donation form when "Donate Now" is clicked
    donateButton.addEventListener('click', () => {
        donationForm.style.display = 'block';
    });

    // Close the donation form
    closeFormButton.addEventListener('click', () => {
        donationForm.style.display = 'none';
    });

    // Handle donation form submission
    donationFormDetails.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent default form submission

        // Get the form data
        const bloodGroup = document.getElementById('bloodGroup').value;
        const donationCenter = document.getElementById('donationCenter').value;

        // Show a success message (or process it further like sending to a server)
        alert(`Donation Request Submitted!\nBlood Group: ${bloodGroup}\nDonation Center: ${donationCenter}`);

        // Hide the form after submission
        donationForm.style.display = 'none';
    });
});
