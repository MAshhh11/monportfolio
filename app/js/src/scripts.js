
//ANIMATION SUR H1

// Faire en sorte que chaque lettre soit un span et appliquer l'annimation
var textWrapper = document.querySelector('.titre');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>"); //Mon h1 se transforme en span

anime.timeline()
  .add({
    targets: '.titre .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  });


//ANIMATION SUR H2 titre2

// Faire en sorte que chaque lettre soit un span et appliquer l'annimation
var textWrapper = document.querySelector('.titre2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>"); //Mon h2 se transforme en span

anime.timeline()
  .add({
    targets: '.titre2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  });


//ANIMATION SUR H2 titre3

// Faire en sorte que chaque lettre soit un span et appliquer l'annimation
  var textWrapper = document.querySelector('.titre3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>"); //Mon h2 se transforme en span

anime.timeline()
  .add({
    targets: '.titre3 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  });



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

