let n = prompt("introduceți n:")
let i = 0

// crearea unui array cu valori random
// sursa: https://www.cloudhadoop.com/javascript-random-array/
const array = Array.from({length: n}, () => Math.floor(Math.random() * 100))


console.log("afișarea prin for:")
for (i = 0; i < array.length; i++) {
    console.log(array[i])
}


console.log("afișarea prin while:")
i = 0
while (i != n) {
    console.log(array[i])
    i++
}


console.log("afișarea prin do..while:")
i = 0
do {
    console.log(array[i])
    i++
} while (i != n)


console.log("afișarea prin for..in:")
for (i in array) {
    console.log(array[i])
}


console.log("afișarea prin for..of:")
for (i of array) {
    console.log(i)
}


console.log("afișarea prin forEach:")
array.forEach(afisarea_forEach)

function afisarea_forEach(item, index) {
    console.log(array[index])
}


console.log("afișarea prin map:")
const map_array = array.map(afisarea_map)

function afisarea_map(value, index, array) {
    console.log(array[index])
}
// avantajul metodei map() este că ea crează un masiv nou, fără a modifica masivul original
// prin chemarea unei funcții pentru fiecare element al masivului original

// după părerea mea, map() este cea mai bună alegere




