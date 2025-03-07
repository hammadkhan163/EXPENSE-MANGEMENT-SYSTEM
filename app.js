
let expenses = [];

function addExpense() {
    let name = document.getElementById('expense-name').value;
    let amount = parseFloat(document.getElementById('expense-amount').value);

    if (name && (amount) && amount > 0) {
        let expense = { name, amount };
        expenses.push(expense);
        updateExpenseList();
        calculateTotal();

        document.getElementById('expense-name').value = '';
        document.getElementById('expense-amount').value = '';
    } else {
        alert('Please fill out all fields correctly.');
    }
}

function removeExpense(index) {
    expenses.splice(index, 1);
    updateExpenseList();
    calculateTotal();
}

function updateExpenseList() {
    let expenseList = document.getElementById('expense-list').getElementsByTagName('tbody')[0];
    expenseList.innerHTML = ''; 

    expenses.forEach((expense, index) => {
        let row = expenseList.insertRow();
        row.innerHTML = `
            <td>${expense.name}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td><button onclick="removeExpense(${index})">Remove</button></td>
        `;
    });
}

function calculateTotal() {
    let total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    document.getElementById('total-amount').textContent = `Total: ${total.toFixed(2)}`;
}

