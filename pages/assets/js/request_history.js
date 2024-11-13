// Sample request history data
const requestHistory = [
    { patientName: "Suhas alagi", bloodGroup: "A+", dateRequested: "2024-11-07", status: "Approved" },
    { patientName: "Rajesh yemul", bloodGroup: "O-", dateRequested: "2024-11-06", status: "Rejected" },
    { patientName: "Sudeep hilli", bloodGroup: "B+", dateRequested: "2024-11-05", status: "Pending" }
];

// Function to render request history table
function renderRequestHistoryTable() {
    const requestHistoryTableBody = document.getElementById("requestHistoryTableBody");
    requestHistoryTableBody.innerHTML = ""; // Clear any existing rows

    requestHistory.forEach((request) => {
        const row = document.createElement("tr");

        // Patient request data columns
        row.innerHTML = `
            <td>${request.patientName}</td>
            <td>${request.bloodGroup}</td>
            <td>${request.dateRequested}</td>
            <td class="status-${request.status.toLowerCase()}">${request.status}</td>
        `;

        // Append row to table body
        requestHistoryTableBody.appendChild(row);
    });
}

// Render table on page load
document.addEventListener("DOMContentLoaded", renderRequestHistoryTable);

