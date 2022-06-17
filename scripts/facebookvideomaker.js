function myFunction() {
    let value = document.getElementById("myDropdown").style.display;
    console.log(value);
    if (!value  || value==="none") {
      document.getElementById("myDropdown").style.display = "block";
    } else  if(value==="block"){
      document.getElementById("myDropdown").style.display = "none";
    }
  }