document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    projects.forEach((project) => {
        project.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#e0f0ff";
            this.style.transition = "0.3s";
        });
        project.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "white";
        });
    });
});
