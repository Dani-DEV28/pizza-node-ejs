document.getElementById('pizza-form').onsubmit = () => {

    clearErrors();

    let isValid = true;

    // Validate first name
    let fname = document.getElementById('fname').value.trim();
    if (fname === "") {
        document.getElementById("err-fname").style.display = "block";
        isValid = false;
    }

    // Validate last name
    let lname = document.getElementById('lname').value.trim();
    if (lname === "") {
        document.getElementById("err-lname").style.display = "block";
        isValid = false;
    }

    let email = document.getElementById('email').value.trim();
    if(email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1){
        document.getElementById("err-email").style.display = "block";
        isValid = false
    }

    let methodButtons = document.getElementsByName("method");
    let count = 0;
    for(let i = 0; i<methodButtons.length; i++) {
        if(methodButtons[i].checked){
            count++;
        }
    }
    if(count === 0){
        document.getElementById("err-method").style.display = "block";
        isValid = false;
    }

    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}