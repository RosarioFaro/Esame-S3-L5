/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log('         ~ . ~ . ~ Esercizo A ~ . ~ . ~         ')

let sum = 10 + 20;
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log('         ~ . ~ . ~ Esercizo B ~ . ~ . ~         ')

let random = Math.floor(Math.random() * 21)
console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log('         ~ . ~ . ~ Esercizo C ~ . ~ . ~         ')

let me = {
  name: 'Rosario',
  surname: 'Faro',
  age: 25
}
console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log('         ~ . ~ . ~ Esercizo D ~ . ~ . ~         ')

delete me.age
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log('         ~ . ~ . ~ Esercizo E ~ . ~ . ~         ')

me.skills = ["CSS","HTML"]
console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log('         ~ . ~ . ~ Esercizo F ~ . ~ . ~         ')

me.skills.push("JS")
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log('         ~ . ~ . ~ Esercizo G ~ . ~ . ~         ')

me.skills.pop()
console.log(me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice(){
  return Math.floor(Math.random()*6) + 1
}

let numRan = dice()
console.log(numRan)

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(x,y){
  if (x > y) {
    return x;
  } else {
    return y
  }
}

console.log(whoIsBigger(20,15))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(stringa){
  return stringa.split(" ")
}

console.log(splitMe("I love coding")) 

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne (stringa,boolean){
    if (boolean) {
      return stringa.slice(1);
    } else {
      return stringa.slice(0,-1)
    }
}

console.log(deleteOne ('Sono una stringa', 1))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(stringa){
  let arrStringa = '';
  for (let i = 0; i < stringa.length; i++) {
    if (stringa[i] < '0' || stringa[i] > '9'){
      arrStringa += stringa[i]
    }
  }
  return arrStringa;
}

console.log(onlyLetters('Sono1231 Pippo123'))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log('         ~ . ~ . ~ Esercizo 6 ~ . ~ . ~         ')

function isThisAnEmail(email) {

  let mail = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  
  return mail.test(email);
}

console.log(isThisAnEmail('pino@c.co'))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt (){
  let giorniDelleSettimana = [
    "Domenica", "Lunedì", "Martedì", "Mercoledì", 
    "Giovedì", "Venerdì", "Sabato"
  ]

  let oggi = new Date()
  let giorno = oggi.getDay()

  return giorniDelleSettimana[giorno]
}

console.log(whatDayIsIt ())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log('         ~ . ~ . ~ Esercizo 8 ~ . ~ . ~         ')

function rollTheDices(n){
  let somma = 0;
  let valori = []

  for (let i = 0; i < n; i++){
    let risultato = dice()
    valori.push(risultato)
    somma += risultato
  }
  return {
    somma: somma,
    valori: valori
  }
}

console.log(rollTheDices(6))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(data){
  let dataAggiunta = new Date(data)
  let oggi = new Date()
  let differenza = oggi - dataAggiunta;
  let giorniPassati = Math.floor(differenza / (1000*60*60*24))
  return giorniPassati
}

console.log(howManyDays('2023-12-12'))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday (){
  let oggi = new Date();
  let compleanno = new Date(oggi.getFullYear(), 11, 13)

  return oggi.getDate() === compleanno.getDate() && oggi.getMonth() === compleanno.getMonth();
}

console.log(isTodayMyBirthday())

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log('         ~ . ~ . ~ Esercizo 11 ~ . ~ . ~         ')

function deleteProp(oggetto, proprietà){
  delete oggetto[proprietà]
  return oggetto
}

let x = {
  nome: 'Giovanni',
  cognome: 'Mastrota',
  età: 60
}

console.log(deleteProp(x,'cognome'))

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log('         ~ . ~ . ~ Esercizo 12 ~ . ~ . ~         ')

function newestMovie(movies) {
  let filmPiuRecente = movies[0]

  movies.forEach(movie => {
    if (parseInt(movie.Year) > parseInt(filmPiuRecente.Year)) {
      filmPiuRecente = movie
    }
  });

  return filmPiuRecente
}

let filmRecente = newestMovie(movies)
console.log(filmRecente)

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log('         ~ . ~ . ~ Esercizo 13 ~ . ~ . ~         ')

function countMovies (movies) {
  return movies.length
}

let movieNumber = countMovies (movies)
console.log(movieNumber)

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log('         ~ . ~ . ~ Esercizo 14 ~ . ~ . ~         ')

function onlyTheYears (movies){
  return movies.map(movies => movies.Year)
}

let anniFilm = onlyTheYears (movies)
console.log (anniFilm)

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log('         ~ . ~ . ~ Esercizo 15 ~ . ~ . ~         ')

function onlyInLastMillennium (movies) {
  return movies.filter(movies => movies.Year < 2000)
}

let filmMillennioScorso = onlyInLastMillennium (movies)
console.log(filmMillennioScorso)

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log('         ~ . ~ . ~ Esercizo 16 ~ . ~ . ~         ')

function sumAllTheYears (movies){
  return movies.reduce((somma, movies) => somma + parseInt(movies.Year), 0)
}

let totAnni = sumAllTheYears (movies)
console.log(totAnni)

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log('         ~ . ~ . ~ Esercizo 17 ~ . ~ . ~         ')

function searchByTitle (stringa) {
  return movies.filter(movies => movies.Title.includes(stringa))
}

console.log(searchByTitle ('The Lord of the Rings'))

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log('         ~ . ~ . ~ Esercizo 18 ~ . ~ . ~         ')

function searchAndDivide (stringa){
  let match = movies.filter(movies => movies.Title.includes(stringa))
  let unmatch = movies.filter(movies => !movies.Title.includes(stringa))
 return {match, unmatch}
}

console.log(searchAndDivide('Lord of the Rings'))

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log('         ~ . ~ . ~ Esercizo 19 ~ . ~ . ~         ')

function removeIndex(n){
  let moviesDiff = []
  for (let i = 0; i < movies.length; i++) {
    if (i !== n) {
      moviesDiff.push(movies[i]);
    }
  }
  return moviesDiff
}

console.log(removeIndex(7))

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selectContainer (){
    let cont = document.querySelector('#container')
    return cont
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selectTagtd (){
  let tagtd = document.querySelectorAll('td')
  return tagtd
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampatd (){
    let tagtd = document.querySelectorAll('td')
  for (let i = 0; i < tagtd.length; i++){
    console.log(tdElements[i].textContent)
  }
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function tagA(){
  let tagA = document.querySelectorAll('a')
  for (let i = 0; i < tagA.length; i++){
    tagA[i].style.backgroundColor = "red"
  }
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function appendElement (){
  let listUl = document.querySelector('#myList')
  let li = document.createElement('li')
  listUl.appendChild(li)
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function emptyList (){
  let listUl = document.querySelector('#myList')
  listUl.innerText('')
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log('         ~ . ~ . ~ Esercizo 26 ~ . ~ . ~         Da correggere')

function addClassTr (){
  let tr = document.querySelectorAll('tr')
  tr.forEach(tr => {
    tr.classList.add('test')
  })
}

addClassTr();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(height) {
  for (let i = 1; i <= height; i++) {
      console.log("*".repeat(i));
  }
}

halfTree(9);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(num) {
  if (num <= 1) {
    return false
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

console.log(isItPrime (7))