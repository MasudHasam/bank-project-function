// connect to the withdrow button
document.getElementById("withdrowBtn").addEventListener("click", function () {

    //this function is for get input value and proces it.
    const inputWithdrowAmountNormal = getInputValue("withdrowInput");
    const inputWithdrowAmount = Math.abs(inputWithdrowAmountNormal);

    // By this condition we can check is the input is vlaid or not.
    if (isNaN(inputWithdrowAmount)) {
        alert("Please input a valid number");
        return;
    }

    //this function is for get current value and process it.
    const currentWithdrowAmount = getCurrentValue("withdrowAmount");

    //hear I add input amount and current deposit amount.
    const updateWithdrowAmount = currentWithdrowAmount + inputWithdrowAmount;

    //this function is for set the update value in current value place.
    setUpdateValue("withdrowAmount", updateWithdrowAmount);

    //this function is for get current value and process it.
    const currentMainBalance = getCurrentValue("currentMainBalance");

    //hear I add input amount and current deposit amount.
    const updateMainBalance = currentMainBalance - inputWithdrowAmount;

    //this function is for set the update value in current value place.
    setUpdateValue("currentMainBalance", updateMainBalance);
})