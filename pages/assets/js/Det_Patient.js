// Sample data for patients
const patients = [
    { name: "Suhas alagi", age: 20, bloodGroup: "A+", disease: "None", dateRequested: "2024-11-07", status: "Pending" },
    { name: "Rajesh yemul", age: 18, bloodGroup: "O-", disease: "Diabetes", dateRequested: "2024-11-06", status: "Pending" },
    { name: "Sudeep hilli", age: 30, bloodGroup: "o+", disease: "Heart Condition", dateRequested: "2024-11-05", status: "Pending" }
];

// Function to render patient table
function renderPatientTable() {
    const patientTableBody = document.getElementById("patientTableBody");
    patientTableBody.innerHTML = ""; // Clear any existing rows

    patients.forEach((patient, index) => {
        const row = document.createElement("tr");

        // Patient data columns
        row.innerHTML = `
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.bloodGroup}</td>
            <td>${patient.disease}</td>
            <td>${patient.dateRequested}</td>
            <td>${patient.status}</td>
        `;

        // Action buttons column
        const actionCell = document.createElement("td");
        const approveButton = document.createElement("button");
        const rejectButton = document.createElement("button");

        approveButton.classList.add("action-btn", "accept-btn");
        rejectButton.classList.add("action-btn", "reject-btn");

        approveButton.innerText = "Approve";
        rejectButton.innerText = "Reject";

        // Approve button event listener
        approveButton.addEventListener("click", () => {
            patients[index].status = "Approved";
            renderPatientTable(); // Re-render table to update status
        });

        // Reject button event listener
        rejectButton.addEventListener("click", () => {
            patients[index].status = "Rejected";
            renderPatientTable(); // Re-render table to update status
        });

        // Add buttons to action cell
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("action-buttons");
        buttonContainer.appendChild(approveButton);
        buttonContainer.appendChild(rejectButton);

        actionCell.appendChild(buttonContainer);
        row.appendChild(actionCell);

        // Append row to table body
        patientTableBody.appendChild(row);
    });
}

// Render table on page load
document.addEventListener("DOMContentLoaded", renderPatientTable);
