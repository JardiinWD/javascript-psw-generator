const empty = ""; // Stringa inizialmente vuota che conterrà i caratteri randomici
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Lettere randomiche in uppercase
const lCase = "abcdefghijklmnopqrstuvwxyz"; // Lettere randomiche in lowercase
const number = "0123456789"; // numeri randomici
const symbol = "!@#$%^&£*=-_'"; // simboli randomici

const pLength = document.getElementById("p-length") // Questo è ID di lunghezza password
const upperCase = document.getElementById("p-uppercase") // Questo è ID uppercase
const lowerCase = document.getElementById("p-lowercase") // Questo è ID lowercase
const pNumber = document.getElementById("p-number") // Questo è ID dei numeri
const pSymbol = document.getElementById("p-symbol") // Questo è ID dei simboli
const submitButton = document.getElementById("submit") // Questo è ID del submit button
const password = document.getElementById("password") // Questo è ID della password

submitButton.addEventListener("click", () => {
    /* console.log("Sono il tasto submit e sono stato appena cliccato"); */
    let initial = empty // Inizialmente la password sarà vuota (empty è costante dichiarata sopra)
    console.log(initial); // Verifica tramite console log della variabile iniziale

    /* Analisi condizione
            SE upperCase(form control) è selezionato (check dell'input checkbox)
            Allora initial si somma a se stessa (essendo vuota) + un valore di uCase (random di lettere uppercase)
        */
    (upperCase.checked) ? initial += uCase : "";
    /* Ora replico la stessa condizione per tutti gli altri check */
    (lowerCase.checked) ? initial += lCase : ""; // Condizione Lowercase
    (pNumber.checked) ? initial += number : ""; // Condizione Numeri
    (pSymbol.checked) ? initial += symbol : ""; // Condizione Simboli

    /* Devo dargli la condizione che se va oltre i 30 caratteri non genera niente */
    /* 
    SE il valore della password è Maggiore o uguale a 30 non genera niente
    ALTRIMENTI può generare tranquillamente la password
    */
    if (pLength.value > 30) {
        alert("Non va bene, troppo lunga");
        password.value = empty
    } else {
        /* Valore della password generata tramite una funzione invocata */
        password.value = generatePassword(pLength.value, initial)
    }

})

/**
 * Funzione necessaria per la generazione della password
 * @param {string} l Lunghezza della password
 * @param {*} initial condizione iniziale della password
 */
function generatePassword(l, initial) {
    let pass = "" // Stringa inizialmente vuota
    /* Avvio un ciclo per le numeri, lettere etc randomici */
    /* Analisi ciclo
        Finchè i è minore del valore lunghezza password (pLength.value)
        la variabile pass, inizialmente vuota avrà metodo randomico (Math) per generare la pass
    */
    for (let i = 0; i < l; i++) {
        pass += initial.charAt(Math.floor(Math.random() * initial.length));
    }
    return pass // Ritorno il valore della password
}

/* Implementazione del tasto copy password */
const copy = document.getElementById("copy") // Prendo il tasto copy tramite il suo id

/* Gli aggiungo un evento al click per recuperare la password */
copy.addEventListener("click", () => {
    /* console.log("Sono il pulsante copy"); */
    // Analisi condizione. se il valore dell'input password fosse vuoto
    if (password.value == "") {
        /* console.log("Non c'è niente qua.."); */
        alert("Clicca Genera per creare una password sicura!")
    } else {
        /* console.log("Qui c'è qualcosa!"); */
        password.select();
        document.execCommand("copy");
        alert("La password è stata copiata!")
    }
})

/* Implementazione del tasto reset */
const reset = document.getElementById("reset")
/* console.log(reset); // Verifica del reset */

/* Gli aggiungo l'evento per resettare il valore della password */
reset.addEventListener("click", () => {
    /* console.log("Sono il tasto reset e sono stato appena premuto"); */
    password.value = empty // gli do valore stringa vuota
    /* A questo punto avvio anche il ciclo per dire all'utente di generarne una */
    if (password.value == "") {
        alert("Questo campo è già vuoto, prova a generare una nuova password!")
    }
})

