
let expenses = [];

function addExpense() {
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (name && !isNaN(amount) && amount > 0) {
        const expense = { name, amount };
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
    const expenseList = document.getElementById('expense-list').getElementsByTagName('tbody')[0];
    expenseList.innerHTML = ''; 

    expenses.forEach((expense, index) => {
        const row = expenseList.insertRow();
        row.innerHTML = `
            <td>${expense.name}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td><button onclick="removeExpense(${index})">Remove</button></td>
        `;
    });
}

function calculateTotal() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    document.getElementById('total-amount').textContent = `Total: ${total.toFixed(2)}`;
}

