const tablica = [25, 20, 15, 10, 5, 2.5, 1.25];
const waga = [];
let weight = 105;
const netWeight = weight - 20;

const pomnożonaTablica = tablica.map(el => el * 2)

console.log(pomnożonaTablica)
const number1 = pomnożonaTablica[0]
const number2 = pomnożonaTablica[1]
const number3 = pomnożonaTablica[2]
const number4 = pomnożonaTablica[3]
const number5 = pomnożonaTablica[4]
const number6 = pomnożonaTablica[5]
const number7 = pomnożonaTablica[6]

i = netWeight
let result = 0;
let wynik2 = 0
let wynik3 = 0
let wynik4 = 0
let wynik5 = 0
let wynik6 = 0
let wynik7 = 0

while (i >= 49) {

    i = i - number1
    result += 2
}

waga.push(result)


if (i <= 50) {
    while (i >= 40) {
        i = i - number2
        wynik2 += 2

    }
    waga.push(wynik2)
}
if (i <= 40) {
    while (i >= 30) {

        i = i - number3
        wynik3 += 2

    }
    waga.push(wynik3)
}
if (i <= 30) {
    while (i >= 20) {
        wynik4 += 2
        i = i - number4

    }
    waga.push(wynik4)
}
if (i <= 20) {
    while (i >= 10) {
        wynik5 += 2
        i = i - number5

    }
    waga.push(wynik5)
}
if (i <= 10) {
    while (i >= 5) {
        wynik6 += 2
        i = i - number6

    }
    waga.push(wynik6)
}
if (i <= 2.5) {
    while (i >= 1.25) {
        wynik7 += 2
        i = i - number7

    }
    waga.push(wynik7)
}

// } else if (i <= 0) {
//     alert("!wypierdalaj")


//     console.log(waga)
console.log(result, wynik2, wynik3, wynik4, wynik5, wynik6, wynik7)
console.log(i)