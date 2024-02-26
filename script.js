
//Puntatori

const titolo = document.getElementById(`povtitle`) ;
const modNotte = document.getElementById(`modnotte`) ;
const indirizzo = document.getElementById(`indirizzo`) ;
const linkAmz = document.getElementsByClassName(`linkamz`) ;
const soloTesto = document.getElementById(`noimg`) ;
const prezzo = document.getElementsByTagName(`h5`) ;
const imgTab = document.getElementsByClassName(`imgtab`)

const body = document.getElementById(`body`) ;
const nav = document.getElementById(`nav`) ;
const main = document.querySelector(`main`) ;

// Listeners

// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
titolo.addEventListener ("click" , function () {
    titolo.innerText = "Point of View"
})

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
modNotte.addEventListener ("click" , function () {
    body.style.backgroundColor = "rgb(82, 82, 82)"
    nav.style.backgroundColor = "rgb(165, 165, 165)"
    indirizzo.style.backgroundColor = "rgb(165, 165, 165)"
    main.style.backgroundColor = "rgb(82, 82, 82)"
})

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
indirizzo.addEventListener ("click" , function () {
    indirizzo.innerText = "In alternativa puoi visitare la nostra sede in Via Segui i Tuoi Sogni 90"
    indirizzo.style.fontSize = "25px"
    indirizzo.style.fontWeight = "800"
})

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function linkAmzz () {
    for ( let i = 0; i < linkAmz.length; i++) {
        linkAmz[i].classList.add("linkamzover")
    }
    return linkAmz
}
linkAmzz()

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
soloTesto.addEventListener("click" , function(compare) {
    for ( let i = 0; i < imgTab.length; i++) {
        if (compare) {
            imgTab[i].classList.toggle("nascosto")
        } else {
            imgTab[i].classList.remove ("nascosto")
        }
    }

    return imgTab
    
})



function randomNumber() {
    return Math.floor(Math.random() * 256) ;
}
console.log(randomNumber);


function RandomPriceColor() {
    let r = randomNumber () ;
    let g = randomNumber () ;
    let b = randomNumber () ;
    let colore = "rgb" + "(" + r + " , " + g + " , "+ b + ")" ;
    return colore ;
}
console.log(RandomPriceColor);

let randomColor = RandomPriceColor() ;
for (let i = 0; prezzo.length; i++) {
    prezzo[i].addEventListener("mouseover" , function() {
        prezzo[i].style.color = RandomPriceColor
    })
}




