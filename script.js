let balance = 0;

function addTransaction() {
  const desc = document.getElementById("desc").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (desc === "" || isNaN(amount)) {
    alert("Please enter a valid description and amount");
    return;
  }

  balance += amount;
  document.getElementById("balance").innerText = balance;

  const entry = document.createElement("p");
  entry.innerHTML = `${desc}: ₹${amount}`;
  entry.className = amount >= 0 ? "income" : "expense";

  document.getElementById("transactions").appendChild(entry);

  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
}
