const addBtn = document.querySelector('.add')
const name = document.querySelector('.name')
const inputWeight = document.querySelector('.weight')
const ring25 = document.querySelector('.ring25')
const ring20 = document.querySelector('.ring20')
const ring15 = document.querySelector('.ring15')
const ring10 = document.querySelector('.ring10')
const ring5 = document.querySelector('.ring5')
const ring250 = document.querySelector('.ring250')
const ring125 = document.querySelector('.ring125')

const wyniki = document.querySelector('.wyniki')

const jeden = document.querySelector("jeden")


const waga = [];
let weight = 0;


let rings = []




addBtn.addEventListener('click', () => {
    rings.length = 0

    // idCounter++
    weight = inputWeight.value
    console.log(weight)

    const objectWeight1 = {
        id: 25,
        quality: ring25.value
    }

    const objectWeight2 = {
        id: 20,
        quality: ring20.value,
    }
    const objectWeight3 = {
        id: 15,
        quality: ring15.value,
    }
    const objectWeight4 = {
        id: 10,
        quality: ring10.value,
    }
    const objectWeight5 = {
        id: 5,
        quality: ring5.value,
    }
    const objectWeight6 = {
        id: 2.5,
        quality: ring250.value,
    }
    const objectWeight7 = {
        id: 1.25,
        quality: ring125.value
    }
    rings.push(objectWeight1, objectWeight2, objectWeight3, objectWeight4, objectWeight5, objectWeight6, objectWeight7)

    // if (inputBar.value === "") {
    //     alert("Sztanga ma przypisany ciezar 20kg")
    // } else(weightBar = inputBar.value)
    // console.log(weightBar)

    // console.log(doubleRings)

    obliczenia()


})


const obliczenia = () => {

    weight -= bar

    console.log(weight)
    const doubleRings = rings.map(function (element) {
        return `${element.id}` * 2
    })

    if (inputWeight.value === '') {
        return alert("Podaj wartosc")
    } else {

        let quality25 = ring25.value
        let quality20 = ring20.value
        let quality15 = ring15.value
        let quality10 = ring10.value
        let quality5 = ring5.value
        let quality250 = ring250.value
        let quality125 = ring125.value

        let result1 = 0
        let result2 = 0
        let result3 = 0
        let result4 = 0
        let result5 = 0
        let result6 = 0
        let result7 = 0

        if (weight > 0) {
            while (weight >= doubleRings[0] && quality25 >= 2) {
                weight = weight - doubleRings[0]
                quality25 -= 2
                result1 += 2
            }
            waga.push(result1)


            while (weight >= doubleRings[1] && quality20 >= 2) {

                weight = weight - doubleRings[1]
                quality20 -= 2
                result2 += 2
            }
            waga.push(result2)

            while (weight >= doubleRings[2] && quality15 >= 2) {

                weight = weight - doubleRings[2]
                quality15 -= 2
                result3 += 2
            }
            waga.push(result3)
        }

        while (weight >= doubleRings[3] && quality10 >= 2) {

            weight = weight - doubleRings[3]
            quality10 -= 2
            result4 += 2
        }
        waga.push(result4)

        while (weight >= doubleRings[4] && quality5 >= 2) {

            weight = weight - doubleRings[4]
            quality5 -= 2
            result5 += 2
        }
        waga.push(result5)

        while (weight >= doubleRings[5] && quality250 >= 2) {

            weight = weight - doubleRings[5]
            quality250 -= 2
            result6 += 2
        }
        waga.push(result6)


        while (weight >= doubleRings[6] && quality125 >= 2) {

            weight = weight - doubleRings[6]
            quality125 -= 2
            result7 += 2
        }
        waga.push(result7)





        console.log(result1, result2, result3, result4, result5, result6, result7)

        const jeden = document.querySelector('.jeden')
        const dwa = document.querySelector('.dwa')
        const trzy = document.querySelector('.trzy')
        const cztery = document.querySelector('.cztery')
        const piec = document.querySelector('.piec')
        const szesc = document.querySelector('.szesc')
        const siedem = document.querySelector('.siedem')
        // const suma = document.querySelector('.suma')


        jeden.innerHTML = result1
        dwa.innerHTML = result2
        trzy.innerHTML = result3
        cztery.innerHTML = result4
        piec.innerHTML = result5
        szesc.innerHTML = result6
        siedem.innerHTML = result7
        // suma.innerHTML = suma

    }
}
document.getElementById("list").addEventListener('change', function () {
    console.log("You selected: ", this.value)
    bar = this.value
})