checkUser();
showUser();
loadJobs();

async function checkUser() {

    const {
        data: { user }
    } = await supabaseClient.auth.getUser();

    if (!user) {
        window.location.href = "login.html";
    }
}

async function showUser() {

    const {
        data: { user }
    } = await supabaseClient.auth.getUser();

    if (user) {
        document.getElementById("userEmail")
            .innerText = user.email;
    }
}

async function loadJobs() {

    const { data, error } =
        await supabaseClient
            .from("jobs")
            .select("*");

    if (error) {
        console.log(error);
        return;
    }

    const container =
        document.getElementById("jobsContainer");

    container.innerHTML = "";

    data.forEach(job => {

        container.innerHTML += `

        <div class="job-card">

            <div class="job-header">

                <h2>${job.title}</h2>

                <span class="salary">
                    ${job.salary}
                </span>

            </div>

            <h3>${job.company}</h3>

            <p>📍 ${job.location}</p>

            <p>${job.description}</p>

            <button
                class="apply-btn"
                onclick="applyJob(${job.id})">

                Apply Now

            </button>

        </div>
        `;
    });
}

async function applyJob(jobId) {

    const {
        data: { user }
    } = await supabaseClient.auth.getUser();

    if (!user) {
        alert("Please Login First");
        return;
    }

    const { error } =
        await supabaseClient
            .from("applications")
            .insert([
                {
                    job_id: jobId,
                    user_email: user.email
                }
            ]);

    if (error) {
        alert(error.message);
    }
    else {
        alert("🎉 Job Applied Successfully!");
    }
}

async function logout() {

    await supabaseClient.auth.signOut();

    alert("Logged Out Successfully");

    window.location.href = "login.html";
}

function searchJobs() {

    let input =
        document.getElementById("searchInput")
            .value
            .toLowerCase();

    let cards =
        document.querySelectorAll(".job-card");

    cards.forEach(card => {

        if (
            card.innerText
                .toLowerCase()
                .includes(input)
        ) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }

    });
}