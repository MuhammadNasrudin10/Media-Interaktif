let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
    });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

document.addEventListener("click", function (e) {
    const input = e.target.closest('input[type="radio"]');
    if (!input) return;
    const label = input.closest("label.bg_pilihan");
    if (!label) return;
    if (input.classList.contains("terpilih")) {
        input.checked = false;
        input.classList.remove("terpilih");
    } else {
        document.querySelectorAll('input[name="' + input.name + '"]').forEach(function (r) {
            r.classList.remove("terpilih");
        });
        input.classList.add("terpilih");
    }
});