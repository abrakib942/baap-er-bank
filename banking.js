document.getElementById('deposit-button').addEventListener('click', function() {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

        // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDeposittotal = previousDepositAmount + newDepositAmount;


    depositTotal.innerText = newDeposittotal;

    // update account Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalancetotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalancetotal;
    // clear the deposit input field
    depositInput.value = '';
})

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total  
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalancetotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalancetotal;

   // clear withdraw input
   withdrawInput.value = '';
})

