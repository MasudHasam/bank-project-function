//connect to the deposit button.
document.getElementById("depositBtn").addEventListener("click", function () {

    //this function is for get input value and proces it.
    const inputDepositAmountNormal = getInputValue("depositInput");
    const inputDepositAmount = Math.abs(inputDepositAmountNormal);

    // By this condition we can check is the input is vlaid or not.
    if (isNaN(inputDepositAmount)) {
        alert("Please input a valid number");
        return;
    }

    //this function is for get current value and process it.
    const currentDepositAmount = getCurrentValue("depositAmount");

    //hear I add input amount and current deposit amount.
    const updateDepositAmount = currentDepositAmount + inputDepositAmount;

    //this function is for set the update value in current value place.
    setUpdateValue("depositAmount", updateDepositAmount);



    /////*****now get the main balance value and update it according to deposit input amount****////


    //this function is for get current value and process it.
    const currentMainBalance = getCurrentValue("currentMainBalance");

    //hear I add input amount and current deposit amount.
    const updateMainBalance = currentMainBalance + inputDepositAmount;

    //this function is for set the update value in current value place.
    setUpdateValue("currentMainBalance", updateMainBalance);
});
