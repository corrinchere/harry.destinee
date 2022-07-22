var sideModal = document.getElementById("rightModal")
var openSide = document.getElementById("cash-title")
var closeUser = document.getElementById("close-right-modal")

openSide.onclick = function() {
    sideModal.style.display = "block";
}

closeUser.onclick = function() {
    sideModal.style.display = "none";
}