document.addEventListener('DOMContentLoaded', () => {
    const bookButton = document.getElementById('bookButton');
    const appointmentForm = document.getElementById('appointmentForm');
    const closeFormButton = document.getElementById('closeForm');
    const appointmentFormDetails = document.getElementById('appointmentFormDetails');

    // Show the appointment form when "Book Appointment" is clicked
    bookButton.addEventListener('click', () => {
        appointmentForm.style.display = 'block';
    });

    // Close the appointment form
    closeFormButton.addEventListener('click', () => {
        appointmentForm.style.display = 'none';
    });

    // Handle appointment form submission
    appointmentFormDetails.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent default form submission

        // Get the form data
        const doctor = document.getElementById('doctor').value;
        const appointmentDate = document.getElementById('appointmentDate').value;

        // Show a success message (or process it further like sending to a server)
        alert(`Appointment Booked!\nDoctor: ${doctor}\nAppointment Date: ${appointmentDate}`);

        // Close the form after submission
        appointmentForm.style.display = 'none';
    });
});
