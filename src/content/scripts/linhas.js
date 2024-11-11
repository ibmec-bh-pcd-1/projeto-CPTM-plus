document.addEventListener("DOMContentLoaded", () => {
    const lineStatuses = document.querySelectorAll(".line-status");

    lineStatuses.forEach((line) => {
        line.addEventListener("mouseenter", () => {
            const statusText = line.querySelector(".line-status-text");
            statusText.classList.add("hovered");
        });

        line.addEventListener("mouseleave", () => {
            const statusText = line.querySelector(".line-status-text");
            statusText.classList.remove("hovered");
        });
    });
});

function mostrarProblema(element) {
    const problemDescription = element.querySelector(".problem-description");
    if (problemDescription) {
        problemDescription.classList.toggle("show");
    }
}
