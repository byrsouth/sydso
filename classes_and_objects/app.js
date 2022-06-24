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
    let qtr = Math.floor(amount / denomination.quarters);
    amount = (amount % denomination.quarters);

    let dms = Math.floor(amount / denomination.dimes);
    amount = (amount % denomination.dimes);

    let nck = Math.floor(amount / denomination.nickels);
    amount = (amount % denomination.nickels);

    let pns = Math.floor(amount / denomination.pennies);

    document.getElementById('quarters').innerHTML = qtr;
    document.getElementById('dimes').innerHTML = dms;
    document.getElementById('nickels').innerHTML = nck;
    document.getElementById('pennies').innerHTML = pns;
}

function message(msg) {
    document.getElementById('messages').innerHTML = msg;
    setTimeout(() => {
        document.getElementById('messages').innerHTML = '';
    }, 5000);
}