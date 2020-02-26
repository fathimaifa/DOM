// kita mau membuat ketika paragraf diklik, dia bakal berubah warna backgroundnya
// pake inline HTML attribute
const p1 = document.querySelector('.p1');

function ubahWarnaP1() {
	p1.style.backgroundColor = 'lightblue'
}
function ubahWarnaP2() {
	p2.style.backgroundColor = 'lightblue'
}

// pake Element Method
const p2 = document.querySelector('.p2')
p2.onclick = ubahWarnaP2
// onclick adalah method yang kalau dia diklik akan menjalankan function apa.


// perbedaan Event Handler dengan addEventListener()
// dia gabisa nimpa kalau functionnya ada 2. bandingin coba sama kode yang addEvent, coba run dan bandingin!
