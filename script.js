function generate() {
  let complexity = document.getElementById("slider").value;
  let values =
    "ABCDEFGHIJKLMNOPQRSTUVXYWZabcdefghijklmnopqrstuvxwyz1234567890~`!@#$%^&*()-_+={}[]|;:<>,./?";
  let password = "";

  for (let i = 0; i <= complexity; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }
  document.getElementById("display").value = password;
}

function copytoclip() {
  var copyPass = document.getElementById("display");
  copyPass.select();
  document.execCommand("copy");
  alert("Copied the password: " + copyPass.value);
}
