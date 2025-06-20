const form = document.getElementById('form');
const descInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const list = document.getElementById('transaction-list');
const totalDisplay = document.getElementById('total');
const incomeDisplay = document.getElementById('income');
const expenseDisplay = document.getElementById('expense');

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function addTransaction(e) {
  e.preventDefault();

  const desc = descInput.value.trim();
  const amount = +amountInput.value;

  if (!desc || isNaN(amount)) return;

  const transaction = {
    id: Date.now(),
    description: desc,
    amount: amount
  };

  transactions.push(transaction);
  updateLocalStorage();
  renderTransactions();
  updateSummary();

  form.reset();
}

function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  updateLocalStorage();
  renderTransactions();
  updateSummary();
}

function renderTransactions() {
  list.innerHTML = '';
  transactions.forEach(addTransactionDOM);
}

function addTransactionDOM(txn) {
  const sign = txn.amount < 0 ? '-' : '+';
  const item = document.createElement('li');
  item.classList.add(txn.amount < 0 ? 'minus' : 'plus');

  item.innerHTML = `
    ${txn.description} <span>${sign}$${Math.abs(txn.amount).toFixed(2)}</span>
    <button onclick="deleteTransaction(${txn.id})">❌</button>
  `;

  list.appendChild(item);
}

// Update balance, income, and expense
function updateSummary() {
  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);
  const income = amounts.filter(a => a > 0).reduce((acc, val) => acc + val, 0).toFixed(2);
  const expense = amounts.filter(a => a < 0).reduce((acc, val) => acc + val, 0).toFixed(2);

  totalDisplay.innerText = `$${total}`;
  incomeDisplay.innerText = `+$${income}`;
  expenseDisplay.innerText = `-$${Math.abs(expense)}`;
}

// Save transactions to localStorage
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Init App
function init() {
  renderTransactions();
  updateSummary();
}

// Event Listeners
form.addEventListener('submit', addTransaction);

// Load
init();
