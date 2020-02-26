// 1. Mengubah element innerHTML
const judul = document.getElementById('judul')
judul.innerHTML = '<em>Fathima Umar</em>'

// ini nunjukin bahwa innerHTML bisa ngubah semua isi htmlnya
// const sectionA = document.querySelector('section#a')
// sectionA.innerHTML = 'Hello world'


// 2. Mengubah element style.<property>
const judulcss = document.querySelector('#judul')
judul.style.color = ' lightblue' 
judul.style.backgroundColor = 'salmon'


// 3. Mengubah element setAttribute()
const judulatt = document.getElementsByTagName('h1')[0]
judulatt.setAttribute('name', 'fathima') // ini kalau diliat di inspect, file html pas dibagian judul nya jadi nambah atribut baru yaitu name: 'fathima'
const a = document.querySelector('section#a a')
a.setAttribute('id', 'link') // method attribut lainnya ada getAttribut(buat liat ada atirbut apa aja, biasanya dipake di console), ada removeAttribute(menghilangkan attribut)


// 3. Mengubah element classList
// terdapat beberapa method di classList ini, yaitu:
// element.classList.add() .remove() .toggle() .item() .contains() .replace()   kalau toggle itu maksudnya : kalau ada, hapus. kalau gaada, tambahkan
const p2 = document.querySelector('.p2')
p2.classList.add('label')
p2.classList.remove('p2')


