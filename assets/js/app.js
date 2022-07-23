const textInput = document.querySelector(".inputs input") // Prendo il mio tag input dove l'utente deve digitare
checkBtn = document.querySelector(".inputs button") // Dalla classe inputs prendo il mio button per verificare il value dall'input
/* console.log(textInput); */ // in effetti rilevo che ho preso "<input type="text" placeholder="Inserisci testo o numeri">""
let filtro // Inizializzo (senza dichiarare) la mia variabile filtro

/* Scateno evento anche sul button del verifica */
checkBtn.addEventListener("click", () => {
    /* console.log("Sono il pulsante Verifica e mi stai cliccando"); */
    console.log(filtro); // Al click verifico cosa ha scritto l'utente
    let reverseInput = filtro.split("").reverse().join("") // Questa è la mia variabile al contrario
    // ovvero prendo la parola scritta, la divido in caratteri, la ruoto con reverse e infine la unisco
    console.log(reverseInput);
})



/* Scateno un evento sull'input del mio utente, alla digitazione "keyup" ascolto cosa sta scrivendo */
textInput.addEventListener("keyup", () => {
    filtro = textInput.value.replace(/[^A-Z0-9]/ig, "") // Nel mio filtro mi assicuro di rimuovere simboli perc, spazzi, diviso e cosi via 
    console.log(filtro);
    /* Se il valore input ha dei caratteri al suo interno e soprattutto se la lunghezza della parola è più lunga di 2 */
    if (filtro && filtro.length >= 2) {
        /* console.log(`Sono la lunghezza dell'input ${filtro.length}`); */
        // Aggiungo la classe active solo se nel filtro è presente un carattere
        return checkBtn.classList.add("active")
    }
    else {
        /* Altrimenti al bottone rimuovi la classe active */
        checkBtn.classList.remove("active")
    }
    /*     
    console.log("Sono il testo digitato dall'utente");
    console.log(textInput.value); 
    */
})








