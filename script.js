document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let msg = document.getElementById("message");

    let errors = document.querySelectorAll(".error");
    let success = document.querySelector(".success-msg");

    errors.forEach(e => e.innerText = "");

    let isValid = true;

    if (name.value.trim() === "") {
        errors[0].innerText = "Name is required";
        isValid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        errors[1].innerText = "Enter a valid email";
        isValid = false;
    }

    if (msg.value.trim().length < 10) {
        errors[2].innerText = "Message must be at least 10 characters";
        isValid = false;
    }

    if (isValid) {
        success.style.display = "block";
        success.innerText = "Message sent successfully! 🍫";

        name.value = "";
        email.value = "";
        msg.value = "";

        setTimeout(() => {
            success.style.display = "none";
        }, 3000);
    }
});
