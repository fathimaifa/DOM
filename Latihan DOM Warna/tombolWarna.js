// LATIHAN KE-1 : BIKIN TOMBOL YANG KALAU DI KLIK BISA NGERUBAH WARNA BACKGROUNDNYA.
const tUbahWarna = document.getElementById('tUbahWarna')
// 4 paragraf yang ada diabawah ini bisa dicobain satu satu, kalau mau dicoba, ilangin aja komennya, dan kasih komen paragraf yang lainnya

// tUbahWarna.onclick = function() {
// 	document.body.style.backgroundColor = 'pink'
// }

// tUbahWarna.onclick = function() {
// 	document.body.setAttribute('class', 'biru-muda')
// }

// tUbahWarna.onclick = function() {
// 	document.body.classList.toggle('biru-muda')
// }

tUbahWarna.addEventListener('click', function() {
	document.body.classList.toggle('biru-muda')
})


// 2. LATIHAN KE-2 : TOMBOL YANG KALAU DI KLIK BISA NGERUBAH WARNA RANDOM

// buat dulu tombolnya
const tAcakWarna = document.createElement('button')
const teksTombol = document.createTextNode('Acak Warna')
tAcakWarna.appendChild(teksTombol)
// kita bisa tambahin atributnya dengan setAttribute()
tAcakWarna.setAttribute('type', 'button')
// nambahin node dengan after. (bisa pake parentNode.appendChild, bisa pake )
tUbahWarna.after(tAcakWarna)

tAcakWarna.addEventListener('click', function() {
	const red = Math.round(Math.random()*255+1)
	const green = Math.round(Math.random()*255+1)
	const blue = Math.round(Math.random()*255+1)
	document.body.style.backgroundColor= 'rgb('+ red +', '+ green +', '+ blue +')'
})