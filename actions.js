function hideSideMenu() {
    var x = document.getElementById("sideMenu");
    if (x.style.display === "none") {
        return;
    } else {
        x.style.display = "none";
    }
}

function showSideMenu() {
    var x = document.getElementById("sideMenu");
    var y = document.getElementById("mainContainer");
    if (y.offsetWidth > 1600) {
        x.style.display = "block"
    }
}
