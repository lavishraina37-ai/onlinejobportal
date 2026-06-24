async function testConnection() {
    
    const { data, error } = await supabaseClient
        .from("jobs")
        .select("*");

    if (error) {
        console.error(error);
        alert("Connection Failed");
    } else {
        console.log(data);
        alert("Supabase Connected Successfully!");
    }
}

testConnection();