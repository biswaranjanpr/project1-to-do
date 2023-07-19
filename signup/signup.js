const Name = document.getElementById("Name");
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");
/*const check = document.getElementById("checkbox");*/
const button = document.getElementById("signup");

button.addEventListener("click", () => {
  const dataobj = {
    Name: Name.value,
    Email: Email.value,
    Password: Password.value,
    /*checkbox: check.value,*/
  };
  fetch("http://localhost:9100/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataobj),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Account created successfully!");
      window.location.replace = "../signin/signin.html";
    });
});
