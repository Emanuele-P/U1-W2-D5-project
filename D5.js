/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const sorted = pets.sort()
console.log(sorted)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

const reversed = pets.reverse()
console.log(reversed)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const invertFirst = pets.shift()
pets.push(invertFirst)
console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars[0].licensePlate = 'RM864DS'
cars[1].licensePlate = 'MI697TY'
cars[2].licensePlate = 'FI283FX'
console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: 'Fiat',
  model: '500',
  color: 'white',
  trims: ['pop', 'lounge', 'sport'],
  licensePlate: 'BO736FH',
})
console.log(cars)

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop()
}
console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  let firstLetter = cars[i].color.charAt(0)
  if (firstLetter === 'b') {
    console.log('Fizz')
  } else {
    console.log('Buzz')
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0
while (i < numericArray.length && numericArray[i] !== 32) {
  console.log(numericArray[i])
  i++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const newPosition = []

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case 'a':
      newPosition.push(1)
      break
    case 'b':
      newPosition.push(2)
      break
    case 'c':
      newPosition.push(3)
      break
    case 'd':
      newPosition.push(4)
      break
    case 'e':
      newPosition.push(5)
      break
    case 'f':
      newPosition.push(6)
      break
    case 'g':
      newPosition.push(7)
      break
    case 'h':
      newPosition.push(8)
      break
    case 'i':
      newPosition.push(9)
      break
    case 'l':
      newPosition.push(10)
      break
    case 'm':
      newPosition.push(11)
      break
    case 'n':
      newPosition.push(12)
      break
    case 'o':
      newPosition.push(13)
      break
    case 'p':
      newPosition.push(14)
      break
    case 'q':
      newPosition.push(15)
      break
    case 'r':
      newPosition.push(16)
      break
    case 's':
      newPosition.push(17)
      break
    case 't':
      newPosition.push(18)
      break
    case 'u':
      newPosition.push(19)
      break
    case 'v':
      newPosition.push(20)
      break
    case 'z':
      newPosition.push(21)
      break
    default:
      newPosition.push(-1)
  }
}

console.log(newPosition)
