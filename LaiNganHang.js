let money;
let month;
let rate;
let result = null;

function calculator() {
    money = +document.getElementById('id_money').value;
    month = +document.getElementById('id_month').value;
    rate = +document.getElementById('id_rate').value;
    result = myfunction(money, month, rate);
    console.log(result);
}

function myfunction(M1, T1, R1) {
    for (let i = 1; i <= T1; i++) {
        M1 = M1 * (Math.pow((R1/100) + 1, T1) - 1);
    }
    return M1;
}