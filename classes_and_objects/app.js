const calcBtn = document.querySelector('button');
const denomination = {
    quarters: 25,
    dimes: 10,
    nickels: 5,
    pennies: 1
}

calcBtn.addEventListener('click', () => {
    const inputTxt = document.getElementById('input');
    let amount = parseFloat(inputTxt.value);
    if (!isNaN(amount)) {
        calculate(amount);
    } else {
        message("Please enter an number");
    }
});

function calculate(cents) {
    let amount = cents;

    document.getElementById('quarters').innerHTML = Math.floor(amount / denomination.quarters);
    amount = (amount % denomination.quarters);

    document.getElementById('dimes').innerHTML = Math.floor(amount / denomination.dimes);
    amount = (amount % denomination.dimes);

    document.getElementById('nickels').innerHTML = Math.floor(amount / denomination.nickels);
    amount = (amount % denomination.nickels);

    document.getElementById('pennies').innerHTML = Math.floor(amount / denomination.pennies);
}

function message(msg) {
    document.getElementById('messages').innerHTML = msg;
    setTimeout(() => {
        document.getElementById('messages').innerHTML = '';
    }, 5000);
}