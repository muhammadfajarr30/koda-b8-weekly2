$(document).ready(function () {
  $("form").on("submit", (e) => {
    e.preventDefault();
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const password = $("#password").val().trim();
    const confirmPassword = $("#confirm-password").val().trim();
    const terms = $("#terms").is(":checked");

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("all field has to filled");
      return;
    }

    if (password.length < 6) {
      alert("password must be more than 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("pasword doesn't match");
      return;
    }

    if (!terms) {
      alert("you don't check terms and condition yet!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    const newUsers = {
      name: name,
      email: email,
      password: password,
      cart: [],
      wishlist:[]
    };

    users.push(newUsers);
    localStorage.setItem("users", JSON.stringify(users));
    console.log(newUsers);
    window.location.href = "login.html"
  });

});
