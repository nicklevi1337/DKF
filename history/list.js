document.addEventListener("DOMContentLoaded", function() {
    const listLink = document.querySelector(".list__link-2");
    const sublist = document.querySelector(".sublist");

    listLink.addEventListener("click", function() {
        // Toggle the display of the sublist
        if (sublist.style.display === "none" || sublist.style.display === "") {
            sublist.style.display = "block";
        } else {
            sublist.style.display = "none";
        }
    });
});
