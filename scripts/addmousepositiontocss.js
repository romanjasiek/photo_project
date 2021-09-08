function addMousePositionToCss() {
    const elements = document.querySelectorAll(".skills__card-container");
    for(const element of elements) {
        element.addEventListener("mousemove", function(e) {
            var rect = element.getBoundingClientRect();
            var x = e.clientX - rect.left; 
            var y = e.clientY - rect.top;
            element.style = "--mouse-x:" + (x / element.offsetWidth) + ";--mouse-y:" + (y / element.offsetHeight) + ";";
        });
        element.addEventListener("mouseleave", function(e) {
            element.style = "";
        });
    }
}

if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(addMousePositionToCss, 1);
} else {
    document.addEventListener("DOMContentLoaded", addMousePositionToCss, false);
}