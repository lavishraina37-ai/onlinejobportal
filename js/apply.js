async function loadUser(){

    const {
        data:{user}
    } = await supabaseClient.auth.getUser();

    if(!user){

        window.location.href =
        "login.html";

        return;
    }

    document
    .getElementById("email")
    .value = user.email;
}

loadUser();

document
.getElementById("applyForm")
.addEventListener("submit", applyJob);

async function applyJob(e){

    e.preventDefault();

    const jobId =
    localStorage.getItem("jobId");

    const fullName =
    document.getElementById("fullName").value;

    const email =
    document.getElementById("email").value;

    const phone =
    document.getElementById("phone").value;

    const resume =
    document.getElementById("resume").value;

    const coverLetter =
    document.getElementById("coverLetter").value;

    const { error } =
    await supabaseClient
    .from("applications")
    .insert([
        {
            job_id: jobId,
            user_email: email,
            full_name: fullName,
            phone: phone,
            resume_link: resume,
            cover_letter: coverLetter
        }
    ]);

    if(error){

        alert(error.message);
    }
    else{

        alert("Application Submitted Successfully 🎉");

        window.location.href =
        "my-applications.html";
    }
}