// Get input Value By id
function getInputById(id) {
  const inputElement = document.getElementById(id);
  const inputValue = parseFloat(inputElement.value);

  // Check if the input is a valid positive number
  if (isNaN(inputValue) || inputValue <= 0) {
    alert("Please enter a valid positive number!");
    inputElement.value = "";
    return 0;
  }

  return inputValue;
}

// Get text field value by id
function getTextById(id) {
  const textValue = parseFloat(document.getElementById(id).innerText);
  return textValue;
}

// Show section and Hide with Id
function showSectionById(id) {
  // hidden All the section
  console.log("Hiding all sections and showing:", id);
  document.getElementById("addMoneySection").classList.add("hidden");
  document.getElementById("cashOutSection").classList.add("hidden");
  document.getElementById("transferSection").classList.add("hidden");

  //show the selected section
  document.getElementById(id).classList.remove("hidden");
}

// donation
function storeDonation(amount, location, cardName) {
  const donationHistory =
    JSON.parse(localStorage.getItem("donationHistory")) || [];
  const newDonation = {
    amount: amount,
    location: `${location}, Bangladesh`,
    cardName: cardName,
    time: new Date().toLocaleString("en-BD", { timeZone: "Asia/Dhaka" }), // Save the current date and time in Bangladesh format
  };
  donationHistory.push(newDonation);
  localStorage.setItem("donationHistory", JSON.stringify(donationHistory));
}
