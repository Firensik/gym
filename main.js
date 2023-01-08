const addBtn = document.querySelector('.add')
const benchPress = document.querySelector('.benchPress')
const squat = document.querySelector('.squat')
const deadlift = document.querySelector('.deadlift')
const inputWeight = document.querySelector('.inputWeight')
const inputName = document.querySelector('.name')
const wyniki = document.querySelector('.wyniki')


const lifters = []
const tablica = [25, 20, 15, 10, 5, 2.5, 1.25];
const waga = [];
let idCounter = 0
let weight = 0


const pomnożonaTablica = tablica.map(el => el * 2)


const tablica1 = pomnożonaTablica[0]
const tablica2 = pomnożonaTablica[1]
const tablica3 = pomnożonaTablica[2]
const tablica4 = pomnożonaTablica[3]
const tablica5 = pomnożonaTablica[4]
const tablica6 = pomnożonaTablica[5]
const tablica7 = pomnożonaTablica[6]





addBtn.addEventListener('click', () => {
    if (inputWeight.value < 20) {
        alert("!Wypierdalaj")
        inputWeight.value = ''
        return
    } else if (inputWeight.value === 20) {
        console.log("pracuj sama sztanga")
    } else if (inputWeight.value > 20) {
        weight = inputWeight.value - 20
        console.log(weight)
    }
    idCounter++
    const newLifter = {
        id: idCounter,
        Name: inputName.value,
        squat: squat.value,
        benchPress: benchPress.value,
        deadlift: deadlift.value,
        Score: inputWeight.value

    }
    lifters.push(newLifter)

    obliczenia()

})

const obliczenia = () => {
    let result1 = 0
    let result2 = 0
    let result3 = 0
    let result4 = 0
    let result5 = 0
    let result6 = 0
    let result7 = 0
    if (weight > 0) {
        while (weight >= tablica1) {
            weight = weight - tablica1
            result1 += 2
        }
        waga.push(result1)

        while (weight >= tablica2) {

            weight = weight - tablica2
            result2 += 2
        }

        while (weight >= tablica3) {

            weight = weight - tablica3
            result3 += 2
        }
        while (weight >= tablica4) {

            weight = weight - tablica4
            result4 += 2
        }
        while (weight >= tablica5) {

            weight = weight - tablica5
            result5 += 2
        }
        while (weight >= tablica6) {

            weight = weight - tablica6
            result6 += 2
        }
        while (weight >= tablica7) {

            weight = weight - tablica7
            result7 += 2
        }
    }
    const jeden = document.querySelector('.jeden')
    const dwa = document.querySelector('.dwa')
    const trzy = document.querySelector('.trzy')
    const cztery = document.querySelector('.cztery')
    const piec = document.querySelector('.piec')
    const szesc = document.querySelector('.szesc')
    const siedem = document.querySelector('.siedem')

    jeden.innerHTML = result1
    dwa.innerHTML = result2
    trzy.innerHTML = result3
    cztery.innerHTML = result4
    piec.innerHTML = result5
    szesc.innerHTML = result6
    siedem.innerHTML = result7

    console.log(result1, result2, result3, result4, result5, result6, result7, weight)

}