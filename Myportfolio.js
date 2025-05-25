
document.addEventListener("DOMContentLoaded", function () {
    // Typed.js setup
    if (document.querySelector(".change")) {
        new Typed(".change", {
            strings: [
                "Full-Stack Developer",
                "UI/UX Designer",
                "WordPress Developer",
                "Python Coder",
                "AI / ML Enthusiast",
                "Learner"
            ],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000,
            loop: true
        });
    }

    // ScrollSpy Active Link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.addEventListener("scroll", () => {
        let top = window.scrollY;

        sections.forEach((sec) => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const targetLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (targetLink) targetLink.classList.add("active");
            }
        });
    });

     const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const profileImg = document.getElementById("profile-img");

// Set your light mode image path here
const darkModeImg = "WhatsApp Image 2024-08-30 at 08.18.26_9c09f6a2.jpg";
const lightModeImg = "light-img2.png"; // 🔁 Replace this with your light image filename

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeToggle.classList.replace("bx-moon", "bx-sun");
    profileImg.src = lightModeImg;
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        themeToggle.classList.replace("bx-moon", "bx-sun");
        profileImg.src = lightModeImg;
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.classList.replace("bx-sun", "bx-moon");
        profileImg.src = darkModeImg;
        localStorage.setItem("theme", "dark");
    }
    
   });
});
