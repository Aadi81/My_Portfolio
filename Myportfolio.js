
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
});
