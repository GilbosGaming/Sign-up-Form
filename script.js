var passwordmsg = document.getElementById("password");
var passwordcon = document.getElementById("passwordcon");
var passwordDNM = document.getElementById("passwordDNM")
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

passwordmsg.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }

passwordmsg.onblur = function() {
    document.getElementById("message").style.display = "none";
}

function passwordCheck() {
    
   if (passwordmsg.value !== passwordcon.value) {
       passwordDNM.textContent = "Passwords do not match";
    
   }
   else {
    passwordDNM.textContent = "";
    passwordcon.style.color = "";
    passwordcon.classList.add("valid");
   }
};

function conditionCheck() {
    const password = passwordmsg.value;

    const hasLowercase = /[a-z]/.test(password);
    letter.style.color = hasLowercase ? 'green' : 'red';

    const hasUppercase = /[A-Z]/.test(password);
    capital.style.color = hasUppercase ? 'green' : 'red';

    const hasNumber = /[0-9]/.test(password);
    number.style.color = hasNumber ? 'green' : 'red';

    const hasMinimumLength = password.length >= 8;
    length.style.color = hasMinimumLength ? 'green' : 'red';
}

passwordmsg.addEventListener('input', function() {
    conditionCheck();
    passwordCheck();
});
passwordcon.addEventListener('input', passwordCheck);
