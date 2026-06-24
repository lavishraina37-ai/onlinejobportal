async function loadApplications() {

    const {
        data: { user }
    } = await supabaseClient.auth.getUser();

    const container =
        document.getElementById("applicationsContainer");

    if (!user) {
        container.innerHTML = "<h3>Please login first</h3>";
        return;
    }

    console.log("User Email:", user.email);

    const { data, error } =
        await supabaseClient
            .from("applications")
            .select("*");

    console.log("All Applications:", data);
    console.log("Error:", error);

    if (error) {
        container.innerHTML = `<h3>${error.message}</h3>`;
        return;
    }

    const userApplications = data.filter(
        app => app.user_email === user.email
    );

    console.log("User Applications:", userApplications);

    if (userApplications.length === 0) {
        container.innerHTML =
            "<h3>No Applications Found</h3>";
        return;
    }

    container.innerHTML = "";

    userApplications.forEach(app => {

        container.innerHTML += `
            <div style="border:1px solid #ccc;padding:10px;margin:10px;">
                <h3>Job ID: ${app.job_id}</h3>
                <p><strong>Email:</strong> ${app.user_email}</p>
                <p><strong>Applied At:</strong> ${new Date(app.applied_at).toLocaleString()}</p>
            </div>
        `;

    });
}

loadApplications();