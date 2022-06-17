var data = JSON.parse(localStorage.getItem("userCred"));
document.querySelector("form").addEventListener("submit", checkLoginDetails);
function checkLoginDetails(event) {
  event.preventDefault();
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  var found = false;
  for (var i = 0; i < data.length; i++) {
    if (data[i].email == email && data[i].password == password) {
      found = true;
      alert("Login Successful !!!");
      window.location.href = "index.html";
    }
  }
  if (found == false) {
    alert("Invalid Email or Password");
  }
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
}
console.log(data);
