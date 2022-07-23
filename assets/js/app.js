const textInput = document.querySelector(".inputs input") // Prendo il mio tag input dove l'utente deve digitare
checkBtn = document.querySelector(".inputs button") // Dalla classe inputs prendo il mio button per verificare il value dall'input
console.log(textInput); // in effetti rilevo che ho preso "<input type="text" placeholder="Inserisci testo o numeri">""

/* Scateno un evento sull'input del mio utente, alla digitazione "keyup" ascolto cosa sta scrivendo */
textInput.addEventListener("keyup", () => {
    let filtro = textInput.value.replace(/[^A-Z0-9]/ig, "") // Nel mio filtro mi assicuro di rimuovere simboli perc, spazzi, diviso e cosi via 
    console.log(filtro);
    /* Se il valore input ha dei caratteri al suo interno */
    if (filtro) {
        // Aggiungo la classe active solo se nel filtro è presente un carattere
        return checkBtn.classList.add("active")
    } else {
        /* Altrimenti al bottone rimuovi la classe active */
        checkBtn.classList.remove("active")
    }

    /*     
    console.log("Sono il testo digitato dall'utente");
    console.log(textInput.value); 
    */
})






