window.addEventListener('load', function () {
    const navDropdown = document.getElementById("nav-dropdown");
    const navMenuButton = document.getElementById("nav-menu");

    navMenuButton.addEventListener("click", function() {
        navDropdown.classList.toggle("show");
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > convertRemToPixels(55)) {
            navDropdown.classList.remove("show");
        }
    });
});

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}