function hideSideMenu() {
    const x = document.getElementById("sideMenu");

        x.classList.remove("opened");
        x.classList.add("closed")

}

function showSideMenu() {
    const x = document.getElementById("sideMenu");
    x.classList.remove("closed");
    x.classList.add("opened")
}
