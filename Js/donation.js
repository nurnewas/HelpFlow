// card 1
document.getElementById("btnNoakhali").addEventListener("click", function (e) {
  e.preventDefault();

  // get value from input  field
  const inputNoakhali = getInputById("inputNoakhali");
  console.log(inputNoakhali);

  // Main Account Balance
  const mainBalance = getTextById("mainBalance");
  console.log(mainBalance);

  // Update balance on screen
  const noakhaliBalance = getTextById("noakhaliBalance");
  const newNoakhali = inputNoakhali + noakhaliBalance;
  document.getElementById("noakhaliBalance").innerText = newNoakhali;

  // Main  Balance update
  const mainAccountBalance = mainBalance - inputNoakhali;
  document.getElementById("mainBalance").innerText = mainAccountBalance;
});
//Card 1

// card 2
document.getElementById("btnFeni").addEventListener("click", function (e) {
  e.preventDefault();

  // get value from input  field
  const inputFeni = getInputById("inputFeni");
  console.log(inputFeni);

  // Main Account Balance
  const mainBalance = getTextById("mainBalance");

  // Update balance on screen
  const feniBalance = getTextById("feniBalance");
  const newNFeni = inputFeni + feniBalance;
  document.getElementById("feniBalance").innerText = newNFeni;

  // Main  Balance update
  const mainAccountBalance = mainBalance - inputFeni;
  document.getElementById("mainBalance").innerText = mainAccountBalance;
});
// card 2

// Card 3
document.getElementById("btnQuota").addEventListener("click", function (e) {
  e.preventDefault();

  // get value from input  field
  const inputQuota = getInputById("inputQuota");
  console.log(inputQuota);

  // Main Account Balance
  const mainBalance = getTextById("mainBalance");

  // Update balance on screen
  const quotaBalance = getTextById("quotaBalance");
  const newQuota = inputQuota + quotaBalance;
  document.getElementById("quotaBalance").innerText = newQuota;

  // Main  Balance update
  const mainAccountBalance = mainBalance - inputQuota;
  document.getElementById("mainBalance").innerText = mainAccountBalance;
});
// Card 3

// Card 4
document.getElementById("btnEducation").addEventListener("click", function (e) {
  e.preventDefault();

  // get value from input  field
  const inputEducation = getInputById("inputEducation");
  console.log(inputEducation);

  // Main Account Balance
  const mainBalance = getTextById("mainBalance");

  // Update balance on screen
  const educationBalance = getTextById("educationBalance");
  const newEducation = inputEducation + educationBalance;
  document.getElementById("educationBalance").innerText = newEducation;

  // Main  Balance update
  const mainAccountBalance = mainBalance - inputEducation;
  document.getElementById("mainBalance").innerText = mainAccountBalance;
});
// Card 4
