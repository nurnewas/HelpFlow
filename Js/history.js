document.addEventListener("DOMContentLoaded", () => {
  // Get the Donation and History buttons by their IDs
  const donationBtn = document.getElementById("donationBtn");
  const historyBtn = document.getElementById("historyBtn");

  // Get the Donation and History Sections by their ID
  const donationSection = document.getElementById("donationSection");
  const historySection = document.getElementById("historySection");

  // Set event listener for the Donation button
  donationBtn.addEventListener("click", () => {
    // Show donation section and hide history section
    donationSection.classList.remove("hidden");
    historySection.classList.add("hidden");
  });

  // Set event listener for the History button
  historyBtn.addEventListener("click", () => {
    // Show history section and hide donation section
    historySection.classList.remove("hidden");
    donationSection.classList.add("hidden");

    // Call the function to display the donation history
    showHistory();
  });

  // Function to display the donation history
  function showHistory() {
    const historyContent = document.getElementById("historyContent");

    // Retrieve donation history from localStorage (if any)
    const historyData =
      JSON.parse(localStorage.getItem("donationHistory")) || [];

    // If there's history data, show it
    if (historyData.length > 0) {
      let historyHTML = `<ul>`;
      historyData.forEach((entry) => {
        historyHTML += `<li>Amount: taka: ${entry.amount} <br>Donation Time: ${entry.time} <br> Donation For: ${entry.location}</li>`;
      });
      historyHTML += `</ul>`;
      historyContent.innerHTML = historyHTML;
    } else {
      historyContent.innerHTML = "<p>No donation history available.</p>";
    }
  }
});
