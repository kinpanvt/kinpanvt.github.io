window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("fade-out");
        setTimeout(() => window.location.href = "home.html", 800);
    }, 2000);
});
