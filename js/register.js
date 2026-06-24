document
.getElementById("registerForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const { data, error } =
    await supabaseClient.auth.signUp({
        email,
        password,
    });

    if (error) {
        alert(error.message);
    } else {
        alert("Registration Successful!");
        window.location.href = "login.html";
    }
});