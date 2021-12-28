
const formSignIn = document.getElementById('signIn'),
        firstNameInp = document.getElementById("first-name"),
        lastNameInp = document.getElementById('last-name'),
        emailInp = document.getElementById('email'),
        passwordInp = document.getElementById('password'),
        passwordAgainInp = document.getElementById('password-again'),
        SubmitBtn = document.getElementById("submit-form"),
        checkBoxFormInp = document.getElementById("remember-check");

const textFirstName = document.getElementById('text-first-name'),
        textLastName = document.getElementById('text-last-name'),
        textEmail  = document.getElementById("text-email");
 

var valid;
const isRequired = function(value) {
   if( value === ''){
       return false;
   }else{
       return true;
   }
} 

const isBetween = (length, min, max) => length > max || length < min ? true :false;


const showMsg = (textEl, msg, color) => {

    textEl.textContent = msg;
    textEl.style.color = color;
} 


function validateFirstName(){
    valid = false ;
    let firstName = firstNameInp.value.trim();
    if(!isRequired(firstName)){
        showMsg(textFirstName, "this must be not empty", "red");
    }else if( isBetween(firstName.length, 5, 20)){
        showMsg(textFirstName, "this falid must be between 5 - 20 character", "red");
    }else{
        showMsg(textFirstName, "this is valid", "green");
        return true
    }
    
    

}

firstNameInp.onkeyup = validateFirstName;



function removeShowDisabled() {
    let submitEl = document.getElementById("submit-form");
    validateFirstName();
    if (valid === true){
        console.log("hello");
    }else{
        console.log('this is mistake');
    }
}
document.onkeyup = removeShowDisabled();