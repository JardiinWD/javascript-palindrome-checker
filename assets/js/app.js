const textInput = document.querySelector(".inputs input") // Prendo il mio tag input dove l'utente deve digitare
/* console.log(textInput); */ // in effetti rilevo che ho preso "<input type="text" placeholder="Inserisci testo o numeri">""
checkBtn = document.querySelector(".inputs button") // Dalla classe inputs prendo il mio button per verificare il value dall'input
infoText = document.querySelector(".info-text") // Questo è il testo dell'esito
let filtro // Inizializzo (senza dichiarare) la mia variabile filtro


/* Scateno evento anche sul button del verifica */
checkBtn.addEventListener("click", () => {
    /* console.log("Sono il pulsante Verifica e mi stai cliccando"); */
    console.log(filtro); // Al click verifico cosa ha scritto l'utente
    let reverseInput = filtro.split("").reverse().join("") // Questa è la mia variabile al contrario
    infoText.style.display = "block" // .style.display gli cambia la proprietà css da none a Block
    // ovvero prendo la parola scritta, la divido in caratteri, la ruoto con reverse e infine la unisco
    console.log(reverseInput);
    // ora avvio condizione necessaria per la verifica, se l'input utente NON è uguale al suo reverse
    if (filtro != reverseInput) {
        /* return console.log("Non è un palindromo"); */
        return infoText.innerHTML = `No, <span>'${filtro}'</span> non è un palindromo` // Do l'esito dinamico negativo
    } else {
        return infoText.innerHTML = `Si, <span>'${filtro}'</span> è un palindromo!` // Do l'esito dinamico positivo
        /*  return console.log(("E' un palindromo")); */
    }
})

/* Scateno un evento sull'input del mio utente, alla digitazione "keyup" ascolto cosa sta scrivendo */
textInput.addEventListener("keyup", () => {
    /* toLowerCase() => necessario se l'utente scrivesse la prima o l'ultima parola in maiuscolo */
    filtro = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "") // Nel mio filtro mi assicuro di rimuovere simboli perc, spazzi, diviso e cosi via 
    console.log(filtro);
    /* Se il valore input ha dei caratteri al suo interno e soprattutto se la lunghezza della parola è più lunga di 2 */
    if (filtro && filtro.length >= 2) {
        /* console.log(`Sono la lunghezza dell'input ${filtro.length}`); */
        // Aggiungo la classe active solo se nel filtro è presente un carattere
        return checkBtn.classList.add("active")
    } else {
        /* Non mostro il mio infotext nel caso fosse vuoto l'input */
        infoText.style.display = "none"
        /* Altrimenti al bottone rimuovi la classe active */
        checkBtn.classList.remove("active")
    }
    /*     
    console.log("Sono il testo digitato dall'utente");
    console.log(textInput.value); 
    */
})








