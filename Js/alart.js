    // Get the alert box and the close button
    const alertBox = document.getElementById("alertBox");
    const closeBtn = document.getElementById("closeBtn");

    // Function to show the alert
    function showAlert() {
    alertBox.classList.remove("hidden"); 
    }

    // Function to hide the alert
    function hideAlert() {
    alertBox.classList.add("hidden"); 
    }

    // Attach event listener to the "Close Confirmation" button
    closeBtn.addEventListener("click", hideAlert);

    // Add event listeners for all donation buttons
    const donationButtons = document.querySelectorAll(".btn-primary");

    donationButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault(); 
        showAlert(); 
    });
    });
