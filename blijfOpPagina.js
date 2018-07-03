// als op een link met een submenu geklikt wordt,
// moet ik niet naar de koppeling gaan

var heeftSub = document.querySelectorAll('.heeft-submenu > a');
console.log(heeftSub);

for(var i=0; i<heeftSub.length; i++) {
    heeftSub[i].addEventListener('click', (e)=> e.preventDefault());
}

