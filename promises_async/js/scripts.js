//criação de promessa
const myPromise = new Promise((resolve, reject) => {
    const nome = 'Diana'

    if (nome === 'Diana') {
        resolve('Usuario diana encontrada')
    } else {
        reject('Usuario Diana n encontrada')
    }
})

myPromise.then((data) => {
    console.log(data)
})

//Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Diana'

    if (nome === 'Diana') {
        resolve('Usuario diana encontrada')
    } else {
        reject('Usuario Diana n encontrada')
    }
})

myPromise2
    .then((data) => {
   return data.toLowerCase()
})
.then((stringModificada) => {
    console.log(stringModificada)
})

//retorno do catch
const myPromise3 = new Promise((resolve, reject) => {
    const nome = 'Labelle'

    if (nome === 'Diana') {
        resolve('Usuario diana encontrada')
    } else {
        reject('Usuario Diana n encontrada')
    }
})

myPromise3
    .then((data) => {
   console.log(data)
})
.catch((err) => {
    console.log('Aconteceu um erro: ' + err)
})


//varias promises all
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 ok timeout' )
    }, 2000)
})
const p2 = new Promise((resolve, reject) => {
    resolve('P2 ok')
})
const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

console.log('Depois do all()')

//varias promises race
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P4 ok timeout' )
    }, 2000)
})
const p5 = new Promise((resolve, reject) => {
    resolve('P5 ok')
})
const p6 = new Promise((resolve, reject) => {
    resolve('P6 ok')
})

const resolveAllRace = Promise.all([p4, p5, p6]).then((data) => {
    console.log(data)
})

//fetch request na api do github
const userName = 'dianalves'

fetch(`https://api.github.com/users/${userName}`,{
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    }
})
.then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
})
.then((data) => {
    console.log(`O nome do usuario é ${data.name}`)
})
.catch((err) => {
    console.log(`Houve algum erro: ${err}`)
})
