//login area utilitis.
////this login area function is for login.html
function loginArea() {
    //thek the input valu by these code
    const getEmailByid = document.getElementById("emailInput");
    const getEmail = getEmailByid.value;
    const getPasswordByid = document.getElementById("passwordInput");
    const getPassword = getPasswordByid.value;

    //clear the input area all text by these code
    getEmailByid.value = "";
    getPasswordByid.value = "";

    //check the input email and password validation by these code.
    if (getEmail === "masud@gmail.com" && getPassword === "masud") {

        //change the page login.html to bank.html by this code.
        window.location.href = "bank.html"
    } else {
        alert("Email & password dosen't match.")
    };
};



//this is deposit area function.

//this function is for get input value.
function getInputValue(inputId) {
    const inputValueString = document.getElementById(inputId);
    const inputValue = parseFloat(inputValueString.value);
    inputValueString.value = "";
    return inputValue;
};


//this function is for get the old value.
function getCurrentValue(elementId) {
    const previousValueString = document.getElementById(elementId);
    const previousValue = parseFloat(previousValueString.innerText);
    return previousValue;
};


//this function is for set the update value.
function setUpdateValue(elementId, updateAmount) {
    const currentAmount = document.getElementById(elementId);
    currentAmount.innerText = updateAmount;
};


