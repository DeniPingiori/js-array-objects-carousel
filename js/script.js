const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//definisco le variabili
let itemsContent = ''; //definisco la var che contiene le imgs nella sezione principale
let activeElement = 0; //definizione variabile che contiene l'indice dell'img attiva

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

//ciclo l'array e concateno ad itemsContent l'html delle imgs con il testo
images.forEach((elem) => {
    itemsContent += `
    <div class="image position-relative h-100">
    <img src="./${elem.image}" class="main-image" alt="${elem.title}">
        <div class="txt-image">
        <h3>${elem.title}</h3>
        <p>${elem.text}</p>
        </div>
    </div>`
});

//recupero l'elemento dal dom che deve contenere le imgs
document.querySelector('#my-carousel-container .images').innerHTML = itemsContent;

//recupero il primo elemento con la classe image e classe d-none per toglierla
console.log(document.querySelectorAll('.image'));
console.log(document.querySelectorAll('.image')[activeElement]);

let allImages = document.querySelectorAll('.image'); //recupero tutti gli elementi con la classe image
allImages[activeElement].classList.remove('d-none'); //tolgo la classe d-one

//definisco il comportamento del click della freccia di dx
next.addEventListener('click', function(){
    allImages[activeElement].classList.add('d-none');//aggiungo all'elem attuale la classe d-none

    activeElement++; //incremento val dell'indice

    allImages[activeElement].classList.remove('d-none');//rimuovo la classe d-none
});

//definisco il comportamento del click della freccia di dx
prev.addEventListener('click', function(){
    allImages[activeElement].classList.add('d-none');//aggiungo all'elem attuale la classe d-none

    activeElement--; //incremento val dell'indice

    allImages[activeElement].classList.remove('d-none');//rimuovo la classe d-none
});
