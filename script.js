var alertbox = document.querySelector(".alertbox");

function getpassword() {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
  var passwordlength = 16;
  var password = "";

  for (var i = 0; i < passwordlength; i++) {
    var randomnumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomnumber, randomnumber + 1);
  }
  document.getElementById("password").value = password;
  alertbox.innerHTML = "New Password Copied : <br>" + password;
}

// var alertbox = document.querySelector(".alertbox");
function copypassword() {
  var copyPassText = document.getElementById("password");
  copyPassText.select();
  copyPassText.setSelectionRange(0, 9999);
  document.execCommand("copy");
  alertbox.classList.toggle("active");
  setTimeout(function () {
    alertbox.classList.toggle("active");
  }, 2000);
}
