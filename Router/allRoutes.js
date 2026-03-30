import Route from "./Route.js";

// Définir maintenant les routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/signin", "Connexion", "/pages/signin.html"),
];

    // Le titre va s'afficher comme ceci : Route.titre - websitename
    export const websiteName = "Quai Antique";
