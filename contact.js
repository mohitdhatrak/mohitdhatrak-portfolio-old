let personName = document.querySelector("#name");
let phoneNum = document.querySelector("#phone-number");
let emailID = document.querySelector("#email-address");
let formData = document.querySelector("#contact-me-form");
let submitBtn = document.querySelector("#submit-button");
let outputText = document.querySelector("#output-text");

function validateForm() {
    outputText.style.color = "#b91c1c";

    // name validation
    // just checking if user is entering atleast 1 character not just blank spaces

    // email id validation (conditions considered) -
    /* 1. must have only 1 @ character and atleast 1 dot(.)
    2. can't start or end with @ or .
    3. there can't be 2 dots(..) or .@ or @.
    4. part before @ can have 0-9, a-z, A-Z and #!%$'&+*-/=?^_`.{|}~
    5. part after @ can have a-z, A-Z, 0-9 (but not only digits), dot(.)
    6. part after @ can also have hyphen but it can't be at the start or end */
    const regexEmail =
        /^[\w#!%\$'&\+\*-/\?\^`\.\{\|\}~=]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+$/;

    // phone number validation (conditions considered) -
    /* 1. no special characters allowed (except +) only digits 0-9
     2. it should start with 6/7/8/9 (length of number should be 10 digits)
     3. remaining 9 digits can be any digit from 0-9
     4. optional - length can be 11 or 13 characters if number starts with 0 or 91 or +91 
     5. optional - 1 space after 91 / +91 and 5 digits is allowed (eg. +91 98876 54388) */
    const regexPhone = /^(0|\+?91 ?)?[6-9][0-9]{4} ?[0-9]{5}$/;

    if (personName.value.trim() === "" || emailID.value.trim() === "") {
        outputText.innerText = "Please fill all compulsory fields!";
    }

    // validating email address
    else if (
        !regexEmail.test(emailID.value.trim()) ||
        emailID.value.startsWith(".") ||
        emailID.value.endsWith(".") ||
        emailID.value.endsWith("-") ||
        emailID.value.includes("..") ||
        emailID.value.includes(".@") ||
        emailID.value.includes("@-")
    ) {
        outputText.innerText = "Please enter a valid email address!";
        document.form.email.focus();
    }

    // validating phone number
    else if (
        phoneNum.value.trim() !== "" &&
        !regexPhone.test(phoneNum.value.trim())
    ) {
        outputText.innerText = "Please enter a valid phone number!";
        document.form.phone.focus();
    }

    // if all compulsory fields are filled correctly
    else {
        submitBtn.disabled = true;
        outputText.style.color = "#008037";
        outputText.innerText = "Form submitted successfully!";

        // resets the form fields and clears the message in 2.5 secs
        setTimeout(() => {
            formData.reset();
            outputText.innerText = "";
            submitBtn.disabled = false;
        }, 2500);
    }
}

formData.addEventListener("submit", validateForm);
