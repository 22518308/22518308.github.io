function copyText(value) {
    var copyText = document.getElementById(value).innerText;
    navigator.clipboard.writeText(copyText);
    document.getElementById("copy" + value).src = "images/tick_icon.png";
    setTimeout(function () { document.getElementById("copy" + value).src = "images/clipboard_icon.png"; }, 300)
}

document.addEventListener("DOMContentLoaded", () => {
    const projectItems = document.querySelectorAll(".project-item");

    if (projectItems[0]) {
        projectItems[0].classList.add("visible");
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.6 //% of project visible to trigger
    });

    projectItems.forEach((item, index) => {
        if (index > 0) {
            observer.observe(item);
        }
    });
});