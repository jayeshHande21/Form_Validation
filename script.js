let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon"),
  errorMsg = classes("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  module(username, 0, "Name can not be blank");
  module(email, 1, "Email can not be blank");
  module(password, 2, "Password can not be blank");
});

let module = (id, serial, message) => {
  if (id.value === "") {
    errorMsg[serial].textContent = message;
    successIcon[serial].style.opacity = "0";
    failureIcon[serial].style.opacity = "1";
  } else {
    errorMsg[serial].textContent = "";
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
