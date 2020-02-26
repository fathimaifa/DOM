// pake method addEvent()
// pada kasus ini kita mau ketika kita mengklik paragraf 4, maka akan ada list item baru yang muncul diakhir
const p4 = document.querySelector('section#b p')
p4.addEventListener('click', function() {
	const ul = document.getElementsByTagName('ul')[0]
	const liBaru = document.createElement('li')
	const textLiBaru = document.createTextNode('item baru')
	liBaru.appendChild(textLiBaru)
	ul.appendChild(liBaru)
})


// perbedaan Event Handler dengan addEventListener()
// kalau dia mau ngasih 2 event yang berbeda pada element yang sama dengan method yang sama (misal:click duaduanya), maka keduanya bisa dijalankan, gak menggantikan yang lain. kalau gak ngerti mah, bandingin coba sama kode yang EventHandler, coba run dan bandingin!
const p3 = document.querySelector('.p3')
p3.addEventListener('click', function() {
	p3.style.backgroundColor = 'lightblue'
})
p3.addEventListener('click', function() {
	p3.style.color = 'white'
})