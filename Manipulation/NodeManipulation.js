// DOM Manipulation 
// document.createElement()
// document.createTextNode()
// node.appendChild()
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()



// I. MENAMBAHKAN ATAU MENYISIPKAN ELEMEN
// A. DENGAN appendChild()
// disini kasusnya kita buat paragraf baru di section yang ber-id a. nambahnya diakhir.
// 1. buat element baru, disini contohnya bikin paragraf (p)
const pBaru = document.createElement('p')
// 2. buat tulisan yang nantinya ada di dalem p yang akan kita buat tadi
const teksPBaru = document.createTextNode('Paragraf Baru')
// 3. simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru)
// 4. simpan pBaru diakhir section#a
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru) // dia menambah di akhir dari parentnya.


// B. DENGAN insertBefore()
// disini kasusnya kita mau nambahin list baru diantara
const liBaru = document.createElement('li')
const teksLiBaru = document.createTextNode('Item Baru')
liBaru.appendChild(teksLiBaru)

const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)')

ul.insertBefore(liBaru, li2)

pBaru.style.backgroundColor = 'lightgreen'
liBaru.style.backgroundColor = 'lightgreen'



// II. MENGHAPUS NODE (REMOVE CHILD)
// dalam kasus ini kita mau menghapus link (a)
const link = document.getElementsByTagName('a')[0]
sectionA.removeChild(link);



// III. MENGGANTI NODE (REPLACE)
// dalam kasus ini kita mau mengubah paragraf 4 jadi judul (h2)
// 1. kita tangkep dulu parent nya
const sectionB = document.getElementById('b')
// 2. kita tangkep node yang mau diganti
const p4 = sectionB.querySelector('p')
// 3. kita buat node baru
const h2Baru = document.createElement('h2')
const teksH2Baru = document.createTextNode('Judul Baru!')
h2Baru.appendChild(teksH2Baru)
// 4. replace
sectionB.replaceChild(h2Baru, p4)
















