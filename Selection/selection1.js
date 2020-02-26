
// 1. document.getElementByID() -> mengembalikan element
const judul = document.getElementById('judul')
judul.style.color = 'maroon'
judul.style.backgroundColor = 'lightBlue'
judul.innerHTML = 'Fathima Umar'


// 2. document.getElementsByTagName() -> mengembalikan HTMLCollection
const P = document.getElementsByTagName('p')
for (let i = 0; i<P.length; i++) {
	P[i].style.backgroundColor = 'orange'
	P[i].style.color = 'white'
}

const h1 = document.getElementsByTagName('h1')[0] // karena h1, cuman ada 1. dan getElementsByTagName mengembalikan HTMLCOllection yang bertipe array, maka untuk mengubah kita ga bisa langsung pake array itu, harus cantumkan indexnya. nah cara nulis indexnya itu bisa kaya gitu, jadi disampingnya ada [0] alias indexnya.
h1.style.fontSize = '30px'


// 3. document.getElementsByClassName() -> mengembalikan HTMLCollection
const p1 = document.getElementsByClassName('p1')
p1[0].innerHTML = 'Paragraf ini diubah dari javascript'
// bisa juga nulisnya kaya dibawah ini
// const p1 = document.getElementsByClassName('p1')[0]
// p1.innerHTML = 'Paragraf ini diubah dari javascript'


// 4. 