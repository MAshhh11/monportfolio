// BOUTON RETOUR MENU

boutonMenu = document.getElementById("boutonMenu");

// Quand on scroll 200px vers le bas le bouton apparait
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    boutonMenu.style.display = "block";
  } else {
    boutonMenu.style.display = "none";
  }
}

// Quand on clique sur le bouton retour au début du document
function retourMenu() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

