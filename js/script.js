// =========================================
// ONLINE JOB PORTAL - JAVASCRIPT
// =========================================


// =========================================
// IMAGE SLIDER
// =========================================

const images = [
    "images/job1.jpg",
    "images/job2.jpg",
    "images/job3.jpg"
];

let currentImage = 0;

function changeSlider() {

    let banner = document.getElementById("banner");

    if (banner) {

        banner.src = images[currentImage];

        currentImage++;

        if (currentImage >= images.length) {

            currentImage = 0;

        }

    }

}

setInterval(changeSlider, 3000);


// =========================================
// RANDOM REGISTRATION NUMBER
// =========================================

function generateRegNo() {

    let regNo = "JOB-" + Math.floor(Math.random() * 900000 + 100000);

    let reg = document.getElementById("regNo");

    if (reg) {

        reg.value = regNo;

    }

    alert("Registration Number Generated Successfully!");

}


// =========================================
// DYNAMIC JOB DISPLAY
// =========================================

function showJobs() {

    let category = document.getElementById("category").value;

    let jobs = document.getElementById("jobs");

    if (!jobs) return;

    if (category == "IT") {

        jobs.innerHTML = `
        <h3>IT Jobs</h3>

        <ul>

        <li>Software Developer</li>

        <li>Frontend Developer</li>

        <li>Backend Developer</li>

        <li>Full Stack Developer</li>

        </ul>
        `;

    }

    else if (category == "Bank") {

        jobs.innerHTML = `
        <h3>Bank Jobs</h3>

        <ul>

        <li>Probationary Officer</li>

        <li>Bank Clerk</li>

        <li>Cashier</li>

        </ul>
        `;

    }

    else if (category == "Government") {

        jobs.innerHTML = `
        <h3>Government Jobs</h3>

        <ul>

        <li>SSC</li>

        <li>UPSC</li>

        <li>Railway</li>

        <li>Police</li>

        </ul>
        `;

    }

    else {

        jobs.innerHTML = "";

    }

}


// =========================================
// COOKIES
// =========================================

function saveCookie() {

    let username = document.getElementById("username").value;

    if (username == "") {

        alert("Please Enter Your Name");

        return;

    }

    document.cookie = "username=" + username + ";max-age=3600";

    alert("Cookie Saved Successfully");

}

function readCookie() {

    alert(document.cookie);

}


// =========================================
// DOM MANIPULATION
// =========================================

function changeTitle() {

    document.getElementById("title").innerHTML =
        "Welcome to India's Best Online Job Portal";

}


// =========================================
// EVENTS
// =========================================

// Mouse Event

function over() {

    document.getElementById("msg").innerHTML =
        "Thank you for visiting our Job Portal.";

}

// Keyboard Event

function typing() {

    console.log("Typing...");

}

// Button Click Event

function hello() {

    alert("Welcome to Online Job Portal");

}


// =========================================
// ALERT PROMPT CONFIRM
// =========================================

function demoPrompt() {

    let name = prompt("Enter Your Name");

    if (name != null && name != "") {

        alert("Welcome " + name);

    }

}

function demoConfirm() {

    let logout = confirm("Are you sure you want to Logout?");

    if (logout) {

        alert("Logout Successful");

    }

    else {

        alert("Logout Cancelled");

    }

}


// =========================================
// FORM VALIDATION
// =========================================

function validate() {

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let password = document.getElementById("password").value;

    let phone = document.getElementById("phone").value.trim();

    let age = document.getElementById("age").value;

    // Name Validation

    if (name == "") {

        alert("Name cannot be empty");

        return false;

    }

    // Email Validation

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {

        alert("Enter Valid Email");

        return false;

    }

    // Password Validation

    if (password.length < 8) {

        alert("Password should contain minimum 8 characters");

        return false;

    }

    // Phone Validation

    if (phone.length != 10 || isNaN(phone)) {

        alert("Enter Valid Mobile Number");

        return false;

    }

    // Age Validation

    if (age < 18) {

        alert("Age should be 18 or Above");

        return false;

    }

    alert("Registration Successful");

    return true;

}


// =========================================
// WELCOME MESSAGE
// =========================================

window.onload = function () {

    console.log("Online Job Portal Loaded Successfully");

};