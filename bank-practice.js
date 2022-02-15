document.getElementById('deposit-button').addEventListener('click', function() {
 let depositInput = document.getElementById('deposit-input');
 let depositTotal = document.getElementById('deposit-total');
    
    // update deposit total
    depositTotal.innerText = parseFloat(depositInput.value) + parseFloat(depositTotal.innerText);
    
    // update balance
    let balanceTotal = document.getElementById('balance-total');
   
    balanceTotal.innerText = Number(depositInput.ariaValueText) + Number(balanceTotal.innerText);

    depositInput.value = '';
})

// withdraw
document.getElementById('withdraw-button').addEventListener('click', function() {
    let withdrawInput = document.getElementById('withdraw-input');
    let withdrawTotal = document.getElementById('withdraw-total');

    // update withdraw total
    withdrawTotal.innerText = Number(withdrawInput.value) + Number(withdrawTotal.innerText);

    // update withdraw balance
    let balanceTotal = document.getElementById('balance-total')
    
    balanceTotal.innerText = Number(balanceTotal.innerText) - Number(withdrawInput.value);

    withdrawInput.value = "";
})