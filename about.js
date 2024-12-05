document.addEventListener("DOMContentLoaded", function () {
    var section1 = document.querySelectorAll(".section1");
    var section2 = document.querySelectorAll(".section2");
    var section3 = document.querySelectorAll(".section3");

    function checkScroll() {
        section1.forEach(function (section) {
            var titre = section.querySelector(".titre");
            var description = section.querySelector(".description");

            var position = section.getBoundingClientRect().top;

            // Si la section est dans la vue
            if (position < window.innerHeight * 0.75) {
                titre.style.opacity = 1;
                titre.style.transform = "translateY(0)";
                description.style.opacity = 1;
                description.style.transform = "translateY(0)";
            }  else {
                titre.style.opacity = 0;
                titre.style.transform = "translateY(20px)";
                description.style.opacity = 0;
                description.style.transform = "translateY(20px)";
            }
        });

        section2.forEach(function (section) {
            var titre = section.querySelector(".titre");
            var description = section.querySelector(".description");

            var position = section.getBoundingClientRect().top;

            // Si la section est dans la vue
            if (position < window.innerHeight * 0.75) {
                titre.style.opacity = 1;
                titre.style.transform = "translateY(0)";
                description.style.opacity = 1;
                description.style.transform = "translateY(0)";
            } else {
                titre.style.opacity = 0;
                titre.style.transform = "translateY(20px)";
                description.style.opacity = 0;
                description.style.transform = "translateY(20px)";
            }
        });

        section3.forEach(function (section) {
            var titre = section.querySelector(".titre");
            var description = section.querySelector(".description");

            var position = section.getBoundingClientRect().top;

            // Si la section est dans la vue
            if (position < window.innerHeight * 0.75) {
                titre.style.opacity = 1;
                titre.style.transform = "translateY(0)";
                description.style.opacity = 1;
                description.style.transform = "translateY(0)";
            } else {
                titre.style.opacity = 0;
                titre.style.transform = "translateY(20px)";
                description.style.opacity = 0;
                description.style.transform = "translateY(20px)";
            }
        });
    }

    // Ajouter un événement de défilement pour déclencher l'animation
    window.addEventListener("scroll", checkScroll);

    // Appeler checkScroll pour les sections déjà visibles au chargement de la page
    checkScroll();
});