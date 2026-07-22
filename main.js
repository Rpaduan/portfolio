const html = document.querySelector(".html")
const css = document.querySelector(".css")
const javaScript = document.querySelector(".js")
const git = document.querySelector(".git")
const gitHub = document.querySelector(".github")
const vsCode = document.querySelector(".vscode")

const revealElements = document.querySelectorAll(".fade-up");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("fade-up--visible");
            observer.unobserve(entry.target);
        });
    },

    {
        threshold: 0.15,
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});