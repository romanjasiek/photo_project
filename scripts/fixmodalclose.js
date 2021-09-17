function contactModalFixClose() {
    const elements = document.querySelectorAll(".contact-modal__close");
    for(const element of elements) {
        element.addEventListener("click", function() {
            const scrollY = window.scrollY;
            const scrollX = window.scrollX;
            setTimeout(function() {
                window.scrollTo({top: scrollY, left: scrollX});
            }, 1);
        });
    }
}

if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(contactModalFixClose, 1);
} else {
    document.addEventListener("DOMContentLoaded", contactModalFixClose, false);
}