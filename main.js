// CREATE USER 
function createUser() {
  let user = document.getElementById("newUser").value.trim();
  let pass = document.getElementById("newPass").value;
  let rePass = document.getElementById("rePass").value;

  if (user === "" || pass === "" || rePass === "") {
    alert("Please fill all fields!");
    return;
  }

  if (pass !== rePass) {
    alert("Passwords do not match!");
    return;
  }

 
  localStorage.setItem("createdUser", user);
  localStorage.setItem("createdPass", pass);

  alert("User created successfully! Redirecting to login page...");
  window.location.href = "login.html";
}



// LOGIN FUNCTION 
function loginCheck() {
  let user = document.getElementById("User").value.trim();
  let pass = document.getElementById("password").value;


  let savedUser = localStorage.getItem("createdUser");
  let savedPass = localStorage.getItem("createdPass");

  if (user === "" || pass === "") {
    alert("Please fill in both fields!");
    return;
  }

 
  if (user === savedUser && pass === savedPass) {
    alert("Login successful! Welcome " + user + " ");
    // window.location.href = "welcome.html";
  } else {
    alert("Invalid username or password!");
  }
}




// const exitLog = document.getElementById("exitLog");
// if (exitLog) {
//   exitLog.addEventListener("click", function () {
//     if (confirm("Are you sure you want to exit?")) {
//       window.location.href = "create.html"; 
//     }
//   });
// }

