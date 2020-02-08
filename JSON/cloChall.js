//add if else statements to make sure dep/wds are above 0

function ATM(number) {
    let balance = 0;
    return {
        deposits: function (dep) {
            balance += dep;
        },
        withdrawals: function (wd) {
            balance -= wd;
        },
        reminder: function () {
            return 'Remember to take your cash!';
        },
        getBal: function () {
            return 'Your balance is: ' + balance;
        },
        getAcc: function () {
            return 'Your account number is ' + number;
        }
    }
}
let myBal = ATM(1234567);
console.log(myBal.getAcc());
myBal.deposits(100);
console.log(myBal.getBal());
myBal.withdrawals(50);
console.log(myBal.getBal());