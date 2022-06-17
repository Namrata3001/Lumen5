let form = document.querySelector("#form");
// document.querySelector("#form").addEventListener("submit",signupFun);
var userData = JSON.parse(localStorage.getItem("userCred")) || [];

let signIn = document.querySelector("#create-account");
signIn.addEventListener("click", signupFun);
function signupFun(e) {
  e.preventDefault();
  let userObj = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
  };

  userData.push(userObj);
  localStorage.setItem("userCred", JSON.stringify(userData));
  alert("Sign Up Successful")
}
