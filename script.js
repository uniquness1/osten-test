document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("scrollToForm")
    .addEventListener("click", function () {
      document
        .querySelector(".cta-section")
        .scrollIntoView({ behavior: "smooth" });
    });
});

function registerUser(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;

  if (name === "" && email === "") {
    alert("All fields are required");
  } else {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    const userDetails = document.getElementById("userDetails");
    userDetails.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p>`;
    document.getElementById("registrationPopup").style.display = "block";

    clearFormFields();
  }
}
function clearFormFields() {
  document.querySelector('input[name="name"]').value = "";
  document.querySelector('input[name="email"]').value = "";
}
function closePopup() {
  document.getElementById("registrationPopup").style.display = "none";
}

document
  .querySelector(".registration-form")
  .addEventListener("submit", registerUser);
