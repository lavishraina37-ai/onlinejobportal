document
.getElementById("loginForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const { data, error } =
    await supabaseClient.auth.signInWithPassword({
        email,
        password
    });

    if(error){
        alert(error.message);
    }
    else{
        alert("Login Successful");
        window.location.href = "jobs.html";
    }
});