const Email = document.getElementById("Email");
const Password = document.getElementById("Password");
const button = document.getElementById("signin");

button.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("http://localhost:9100/users", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      const comparison = data.find((ele) => ele.Email === Email.value);
      console.log(comparison);
      if (
        comparison.Email === Email.value &&
        comparison.Password === Password.value
      ) {
        alert("Logged in successfully!");
        localStorage.setItem("token", JSON.stringify(Date.now()));
        localStorage.setItem("id", JSON.stringify(comparison.id));
        window.location.href = "../index.html";
      } else {
        alert("You are not registered in!");
      }
    });

  console.log(1);
});
