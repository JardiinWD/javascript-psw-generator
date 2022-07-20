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

    /* Valore della password generata tramite una funzione invocata */
    password.value = generatePassword(pLength.value, initial)
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

