document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Mencegah perilaku default tautan

            // Sembunyikan semua section
            sections.forEach(section => {
                section.style.display = "none";
            });

            // Tampilkan section yang dipilih
            const targetId = this.getAttribute("data-target");
            document.getElementById(targetId).style.display = "block";
        });
    });

    // Tampilkan section beranda secara default
    document.getElementById("beranda").style.display = "block";
});