// login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

// deposit button event handler
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function(){
    const depositNumber = getInputNumber('deposit-amount');

    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);

    document.getElementById('deposit-amount').value = '';
})

// Withdraw button event handler
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {
    const withdrawNumber = getInputNumber('withdraw-amount');

    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance', -1 * withdrawNumber);

    document.getElementById('withdraw-amount').value = '';
})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const number = parseFloat(amount);
    return number;
}

function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}