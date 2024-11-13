// Sample data for donors
const donors = [
    { name: "Suhas Alagi", age: 20, bloodGroup: "A+", disease: "None", status: "Accepted" },
    { name: "Rajesh Yemul", age: 18, bloodGroup: "B+", disease: "Diabetes", status: "Rejected" },
    { name: "Sudeep Hilli", age: 30, bloodGroup: "O+", disease: "None", status: "Pending" }
];

function renderDonorTable() {
    const donorTableBody = document.getElementById("donorTableBody");
    donorTableBody.innerHTML = ""; // Clear any existing rows

    donors.forEach((donor, index) => {
        const row = document.createElement("tr");


        row.innerHTML = `
            <td>${donor.name}</td>
            <td>${donor.age}</td>
            <td>${donor.bloodGroup}</td>
            <td>${donor.disease}</td>
            <td>${donor.status}</td>
        `;


        const actionCell = document.createElement("td");
        const acceptButton = document.createElement("button");
        const rejectButton = document.createElement("button");

        acceptButton.classList.add("action-btn", "accept-btn");
        rejectButton.classList.add("action-btn", "reject-btn");

        acceptButton.innerText = "Accept";
        rejectButton.innerText = "Reject";


        acceptButton.addEventListener("click", () => {
            donors[index].status = "Accepted";
            renderDonorTable(); // Re-render table to update status
        });


        rejectButton.addEventListener("click", () => {
            donors[index].status = "Rejected";
            renderDonorTable(); // Re-render table to update status
        });


        actionCell.appendChild(acceptButton);
        actionCell.appendChild(rejectButton);
        row.appendChild(actionCell);


        donorTableBody.appendChild(row);
    });
}


document.addEventListener("DOMContentLoaded", renderDonorTable);
