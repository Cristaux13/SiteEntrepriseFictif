document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si le paramètre d'URL est présent et égal à "formulaire"
    var urlParams = new URLSearchParams(window.location.hash);
    if (urlParams.has('titre-form-impressionAvecModele')) {
        // Faire défiler jusqu'au formulaire
        var formulaire = document.getElementById('titre-form-impressionAvecModele');
        formulaire.scrollIntoView();
    }

    if (urlParams.has('titre-form-impressionSansModele')) {
        // Faire défiler jusqu'au formulaire
        var formulaire = document.getElementById('titre-form-impressionSansModele');
        formulaire.scrollIntoView();
    }
});